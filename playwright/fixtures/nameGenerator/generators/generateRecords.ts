/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable no-await-in-loop */
import { toUtf8Bytes } from '@ethersproject/strings/lib/utf8'
import _ from 'lodash'
import { Accounts } from 'playwright/fixtures/accounts'
import { Provider } from 'playwright/fixtures/provider'

import { formatsByCoinType, formatsByName } from '@ensdomains/address-encoder'
import { PublicResolver } from '@ensdomains/ensjs/generated/PublicResolver'
import { encodeContenthash } from '@ensdomains/ensjs/utils/contentHash'
import { namehash } from '@ensdomains/ensjs/utils/normalise'
import { RecordOptions } from '@ensdomains/ensjs/utils/recordHelpers'

import { emptyAddress } from '@app/utils/constants'

import { getContract } from '../utils/getContract'

export type Records = {
  texts?: { key: string; value: string }[]
  coins?: { key: number; value: string }[]
  contenthash?: string
  abi?: {
    contentType: number
    data: any
  }
}

type Input = {
  name: string
  owner: `0x${string}`
  resolver?: string
  records?: RecordOptions
}

type Dependencies = {
  accounts: Accounts
  provider: Provider
}

export const generateRecords = async (
  { name, owner, resolver, records }: Input,
  { accounts, provider }: Dependencies,
) => {
  if (!resolver || !records || !owner) return

  // Connect contract
  const signer = provider.getSigner(accounts.getIndex(owner))
  const publicResolver = (await getContract('PublicResolver', {
    address: resolver,
    signer,
  })) as PublicResolver

  // Make records
  const node = namehash(name)

  const { texts = [], coinTypes = [], contentHash, abi } = records
  for (const { key, value } of texts) {
    await publicResolver.setText(node, key, value)
  }

  for (const { key, value } of coinTypes) {
    if (value === '' || value === '0x' || value === emptyAddress)
      throw new Error('Cannot create record with empty address')
    let coinTypeInstance
    if (!Number.isNaN(parseInt(key))) {
      coinTypeInstance = formatsByCoinType[parseInt(key)]
    } else {
      coinTypeInstance = formatsByName[key.toUpperCase()]
    }
    const inputCoinType = coinTypeInstance.coinType
    const encodedAddress = coinTypeInstance.decoder(value)
    await publicResolver['setAddr(bytes32,uint256,bytes)'](node, inputCoinType, encodedAddress)
  }

  if (contentHash) {
    const _contentHash = encodeContenthash(contentHash)
    if (_contentHash.error) throw new Error(_contentHash.error)
    if (typeof _contentHash.encoded !== 'string')
      throw new Error('Error occured while encoding contenthash')
    const tx = await publicResolver.setContenthash(node, _contentHash.encoded as string)
    await tx.wait()
  }

  if (abi) {
    await publicResolver.setABI(node, abi.contentType, toUtf8Bytes(JSON.stringify(abi.data)))
  }
}
