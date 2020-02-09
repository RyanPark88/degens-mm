module.exports = {
  privateKey: '0x51A33a5bBa82f8EBd0fE2192A25CA2E60B9Dc32f',

  // Orderbook connection

  orderbookEndpoint: 'wss://degens.com/ws',
  versionName: '0xBet',

  // Reflector connection

  reflectorUrl: 'REPLACE_ME',
  reflectorApiKey: 'REPLACE_ME',

  // Network config

  chainId: 1,
  contractAddr: '0x8888888883585b9a8202Db34D8b09d7252bfc61C',
  tokenAddr: '0x6B175474E89094C44Da98b954EedeAC495271d0F',

  // Order config

  orderExpiryTimeSeconds: 60 * 5,
  orderRefreshTimeSeconds: 60,

  marketTypeLimits: {
      spread: 2,
      total: 2,
  },

  defaultStrategy: {
      oddsLimit: 1.2,
  },

  strategies: [
    {
      sport: (v) => v !== 'Soccer',
      oddsSource: 'bet365',
      baseAmount: 50,
      markupMult: 1,
    },
    {
      sport: 'Soccer',
      oddsSource: 'betfair',
      baseAmount: 40,
      markupMult: 1.01,
    }
  ],
};
