import { BigNumber } from '@ethersproject/bignumber/lib/bignumber'
import { Contract } from '@ethersproject/contracts'
import { useProvider, useQuery } from 'wagmi'

import AggregatorInterface from '@ensdomains/ens-contracts/build/contracts/AggregatorInterface.json'

// import { useChainId } from '@app/hooks/useChainId'
import { useEns } from '@app/utils/EnsProvider'
import { useQueryKeys } from '@app/utils/cacheKeyFactory'

// const ORACLE_ENS = 'eth-usd.data.eth'
// const ORACLE_GOERLI = '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e'
const ORACLE_DUMMY = '0xbb51B0ced6c4261F7d51c3271D577a897BE8eD26'

export const useEthPrice = () => {
  const provider = useProvider()
  const { ready } = useEns()
  // const { getAddr, ready } = useEns()
  // const chainId = useChainId()

  const { data, isLoading: loading } = useQuery(
    useQueryKeys().ethPrice,
    async () => {
      // let address
      // // Goerli
      // if (chainId === 5) {
      //   address = ORACLE_GOERLI
      // } else {
      //   address = await getAddr(ORACLE_ENS)
      // }
      const address = ORACLE_DUMMY
      if (!address) throw new Error('Contract address not found')
      if (typeof address !== 'string') throw new Error('Contract address is wrong type')
      const oracle = new Contract(address, AggregatorInterface, provider)
      const latest = (await oracle.latestAnswer()) as BigNumber
      return latest
    },
    {
      enabled: !!provider && ready,
    },
  )
  return {
    data,
    loading,
  }
}
