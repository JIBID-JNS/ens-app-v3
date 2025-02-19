import { EthAddress } from '@app/types'

export const emptyAddress = '0x0000000000000000000000000000000000000000'

export const networkName = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '1': 'mainnet',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '58008': 'sepolia',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '17000': 'holesky',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '8899': 'jibchain',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '1337': 'local',
}

interface ResolverAddresses {
  [key: string]: EthAddress[]
}

// Ordered by recency
export const RESOLVER_ADDRESSES: ResolverAddresses = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '1': [
    '0x231b0Ee14048e9dCcD1d247744d114a4EB5E8E63',
    '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41',
    '0xdaaf96c344f63131acadd0ea35170e7892d3dfba',
    '0x226159d592e2b063810a10ebf6dcbada94ed68b8',
    '0x1da022710df5002339274aadee8d58218e9d6ab5',
  ],
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '5': [
    '0xd7a4F6473f32aC2Af804B3686AE8F1932bC35750',
    '0x342cf18D3e41DE491aa1a3067574C849AdA6a2Ad',
    '0x19c2d5D0f035563344dBB7bE5fD09c8dad62b001',
    '0x2800Ec5BAB9CE9226d19E0ad5BC607e3cfC4347E',
    '0x121304143ea8101e69335f309e2062d299a234b5',
    '0xff77b96d6bafcec0d684bb528b22e0ab09c70663',
    '0x6e1b40ed2d626b97a43d2c12e48a6de49a03c7a4',
    '0xc1ea41786094d1fbe5aded033b5370d51f7a3f96',
    '0xbbe3fd189d18c8b73ba54e9dd01f89e6b3ee71f0',
    '0x4B1488B7a6B320d2D721406204aBc3eeAa9AD329',
  ],
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '11155111': [
    '0x8FADE66B79cC9f707aB26799354482EB93a5B7dD',
    '0x0CeEC524b2807841739D3B5E161F5bf1430FFA48',
  ],
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '1337': [
    '0x0E801D84Fa97b50751Dbf25036d067dCf18858bF',
    '0xd7a4F6473f32aC2Af804B3686AE8F1932bC35750', // This is fill in resolver. Not actual contract address
    '0x84eA74d481Ee0A5332c457a4d796187F6Ba67fEB',
  ],
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '8899': ['0xC880430D2694A794ebd5bCa6bd50cE4d8bebA09C'],
}

export const NAMEWRAPPER_AWARE_RESOLVERS: ResolverAddresses = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '1': ['0x231b0Ee14048e9dCcD1d247744d114a4EB5E8E63'],
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '5': [
    '0xd7a4F6473f32aC2Af804B3686AE8F1932bC35750',
    '0x342cf18D3e41DE491aa1a3067574C849AdA6a2Ad',
    '0x19c2d5D0f035563344dBB7bE5fD09c8dad62b001',
  ],
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '11155111': ['0x8FADE66B79cC9f707aB26799354482EB93a5B7dD'],
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '1337': ['0x0E801D84Fa97b50751Dbf25036d067dCf18858bF'],
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '8899': ['0x54fEb22E7b72c0e8e7f07b7BC7bFDF08c8d9b056'],
}

export const RESOLVER_INTERFACE_IDS = {
  addrInterfaceId: '0x3b3b57de',
  txtInterfaceId: '0x59d1d43c',
  contentHashInterfaceId: '0xbc1c58d1',
}

export const GRACE_PERIOD = 90 * 24 * 60 * 60 * 1000

export const MOONPAY_WORKER_URL: { [key: number]: string } = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  1: 'https://moonpay-worker.ens-cf.workers.dev',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  5: 'https://moonpay-worker-goerli.ens-cf.workers.dev',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  1337: 'https://moonpay-goerli.ens-cf.workers.dev',
}

export const FAUCET_WORKER_URL = 'https://ens-faucet.ens-cf.workers.dev'

export const WC_PROJECT_ID = '9b14144d470af1e03ab9d88aaa127332'

// 102% of price as buffer for fluctuations
export const CURRENCY_FLUCTUATION_BUFFER_PERCENTAGE = 102
