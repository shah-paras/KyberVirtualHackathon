const Zaps = {
  unipoolchai: {
    id: 'unipoolchai',
    name: 'CHAI Unipool',
    text: 'Uni CHAI',
    isOrderable: true,
    hasReturnsChart: true,
    ensAddress: 'CHAIUnipool.DeFiZap.eth',
    tokenAddress: '0x670577FEb18576C10F632b2e26976E659d1e5E33',
    gasLimitRequirement:'1500000',
    platformsUsed: [
      {
        key: 'uniswap',
        value: 'Uniswap',
        url: 'https://uniswap.io/',
        color: '#AF2CE4'
      }
    ],
    oneClickAccessTo: [{ text: 'Add Liquidity to generate fees', color:'#18722b' }],
    numberOfInteractions: 5,
    outperformsDuring: ['Choppy Markets'],
    whatHappensUnderTheHood: '',
    whatHappensAfter: '',
    components: [
      {
        name: 'CHAI Pool token',
        percent: 100,
        color: '#ad7213'
      }
    ],
    description: {
      textQuestion: 'What does this Zap do?',
      textAnswer: ['Sample text'],
      textLink: [
        {
          text: 'dummy text',
          hyperlink: 'https://google.com'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/chai-unipool-defizap-tutorial'
    },
    whatThisMeans: {
      text: [
        '50% converted to CHAI interest bearing token',
        '50% left over input + acquired tokens are supplied to Uniswap pool to mint liquidity tracking tokens'
      ]
    },
    metamaskInteractionsSaved: [{ saved: 5 }]
  },
  unipooldai: {
    id: 'unipooldai',
    name: 'DAI Unipool',
    text: 'Uni DAI',
    isOrderable: true,
    hasReturnsChart: true,
    ensAddress: 'DAIUnipool.DeFiZap.eth',
    tokenAddress: '0x2a1530c4c41db0b0b2bb646cb5eb1a67b7158667',
    gasLimitRequirement:'1500000',
    platformsUsed: [
      {
        key: 'uniswap',
        value: 'Uniswap',
        url: 'https://uniswap.io/',
        color: '#AF2CE4'
      }
    ],
    oneClickAccessTo: [{ text: 'Add Liquidity to generate fees', color:'#18722b' }],
    numberOfInteractions: 5,
    outperformsDuring: ['Choppy Markets'],
    whatHappensUnderTheHood: '',
    whatHappensAfter: '',
    components: [
      {
        name: 'DAI Pool token',
        percent: 100,
        color: '#F59D0D'
      }
    ],
    description: {
      textQuestion: 'What does this Zap do?',
      textAnswer: ['Sample text'],
      textLink: [
        {
          text: 'dummy text',
          hyperlink: 'https://google.com'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/dai-unipool-defizap-tutorial'
    },
    whatThisMeans: {
      text: [
        '50% converted to DAI',
        '50% left over input + acquired tokens are supplied to Uniswap pool to mint liquidity tracking tokens'
      ]
    },
    metamaskInteractionsSaved: [{ saved: 3 }]
  },
  unipoolmkr: {
    id: 'unipoolmkr',
    name: 'MKR Unipool',
    text: 'Uni MKR',
    isOrderable: true,
    hasReturnsChart: true,
    ensAddress: 'MKRUnipool.DeFiZap.eth',
    tokenAddress: '0x2c4bd064b998838076fa341a83d007fc2fa50957',
    gasLimitRequirement:'1500000',
    platformsUsed: [
      {
        key: 'uniswap',
        value: 'Uniswap',
        url: 'https://uniswap.io/',
        color: '#AF2CE4'

      }
    ],
    oneClickAccessTo: [{ text: 'Add Liquidity to generate fees', color:'#18722b' }],
    numberOfInteractions: 3,
    outperformsDuring: ['Choppy Markets'],
    whatHappensUnderTheHood: '',
    whatHappensAfter: '',
    components: [
      {
        name: 'MKR Pool token',
        percent: 100,
        color: '#D34FEE'
      }
    ],
    description: {
      textQuestion: 'What does this Zap do?',
      textAnswer: ['Sample text'],
      textLink: [
        {
          text: 'dummy text',
          hyperlink: 'https://google.com'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/mkr-unipool-defizap-tutorial'
    },
    whatThisMeans: {
      text: [
        '50% converted to MKR',
        '50% left over input + acquired tokens are supplied to Uniswap pool to mint liquidity tracking tokens'
      ]
    },
    metamaskInteractionsSaved: [{ saved: 3 }]
  },
  unipoolsnx: {
    id: 'unipoolsnx',
    name: 'SNX Unipool',
    text: 'Uni SNX',
    isOrderable: true,
    hasReturnsChart: true,
    ensAddress: 'SNXUnipool.DeFiZap.eth',
    tokenAddress: '0x3958b4ec427f8fa24eb60f42821760e88d485f7f',
    gasLimitRequirement:'1500000',
    platformsUsed: [
      {
        key: 'uniswap',
        value: 'Uniswap',
        url: 'https://uniswap.io/',
        color: '#AF2CE4'
      }
    ],
    oneClickAccessTo: [{ text: 'Add Liquidity to generate fees', color:'#18722b' }],
    numberOfInteractions: 5,
    outperformsDuring: ['Choppy Markets'],
    whatHappensUnderTheHood: '',
    whatHappensAfter: '',
    components: [
      {
        name: 'SNX Pool token',
        percent: 100,
        color: '#000000'
      }
    ],
    description: {
      textQuestion: 'What does this Zap do?',
      textAnswer: ['Sample text'],
      textLink: [
        {
          text: 'dummy text',
          hyperlink: 'https://google.com'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/snx-unipool-defizap-tutorial'
    },
    whatThisMeans: {
      text: [
        '50% converted to SNX',
        '50% left over input + acquired tokens are supplied to Uniswap pool to mint liquidity tracking tokens'
      ]
    },
    metamaskInteractionsSaved: [{ saved: 3 }]
  },
  unipoolseth: {
    id: 'unipoolseth',
    name: 'sETH Unipool',
    text: 'Uni sETH',
    isOrderable: true,
    hasReturnsChart: true,
    ensAddress: 'sETHUnipool.DeFiZap.eth',
    tokenAddress: '0xe9cf7887b93150d4f2da7dfc6d502b216438f244',
    gasLimitRequirement:'1500000',
    platformsUsed: [
      {
        key: 'uniswap',
        value: 'Uniswap',
        url: 'https://uniswap.io/',
        color: '#AF2CE4'
      }
    ],
    oneClickAccessTo: [{ text: 'Add Liquidity to generate fees', color:'#18722b' }],
    numberOfInteractions: 5,
    outperformsDuring: ['Choppy Markets'],
    whatHappensUnderTheHood: '',
    whatHappensAfter: '',
    components: [
      {
        name: 'sETH Pool token',
        percent: 100,
        color: '#01D691'
      }
    ],
    description: {
      textQuestion: 'What does this Zap do?',
      textAnswer: ['Sample text'],
      textLink: [
        {
          text: 'dummy text',
          hyperlink: 'https://google.com'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/seth-unipool-defizap-tutorial'
    },
    whatThisMeans: {
      text: [
        '50% converted to sETH',
        '50% left over input + acquired tokens are supplied to Uniswap pool to mint liquidity tracking tokens'
      ]
    },
    metamaskInteractionsSaved: [{ saved: 3 }]
  },
  unipoolsai: {
    id: 'unipoolsai',
    name: 'SAI Unipool',
    text: 'Uni SAI',
    isOrderable: true,
    hasReturnsChart: true,
    ensAddress: 'SAIUnipool.DeFiZap.eth',
    tokenAddress: '0x09cabec1ead1c0ba254b09efb3ee13841712be14',
    gasLimitRequirement:'1500000',
    platformsUsed: [
      {
        key: 'uniswap',
        value: 'Uniswap',
        url: 'https://uniswap.io/',
        color: '#AF2CE4'

      }
    ],
    oneClickAccessTo: [{ text: 'Adding Liquidity to generate fees', color:'#18722b' }],
    numberOfInteractions: 5,
    outperformsDuring: ['Choppy Markets'],
    whatHappensUnderTheHood: '',
    whatHappensAfter: '',
    components: [
      {
        name: 'SAI Pool token',
        percent: 100,
        color: '#1F8FF9'
      }
    ],
    description: {
      textQuestion: 'What does this Zap do?',
      textAnswer: ['Sample text'],
      textLink: [
        {
          text: 'dummy text',
          hyperlink: 'https://google.com'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/dai-unipool-defizap-tutorial'
    },
    whatThisMeans: {
      text: [
        '50% converted to SAI',
        '50% left over input + acquired tokens are supplied to Uniswap pool to mint liquidity tracking tokens'
      ]
    },
    metamaskInteractionsSaved: [{ saved: 3 }]
  },
  lender: {
    id: 'lender',
    name: 'Lender',
    text: 'Lender',
    isOrderable: true,
    hasReturnsChart: false,
    numberOfInteractions: 4,
    ensAddress: 'Lender.DeFiZap.eth',
    gasLimitRequirement:'7000000',
    components: [
      {
        name: 'cSAI',
        percent: 90,
        color: '#11CEBE'
      },
      {
        name: 'dLETH2x',
        percent: 10,
        color: '#0035C4'
      }
    ],
    description: {
      textQuestion: 'What does this Zap do?',
      textAnswer: [
        'Lender Zap allocates incoming deposits 90% to cSAI and 10% to dLETH2x.',
        'Therefore, if you send 1 ETH to this Lender.DeFiZap.eth, or buy from our website, 0.9 of your worth will go towards investing in Compound.Finance while 0.1 of your ETH will be used to open a Perpetual ETH Long with 2x leverage.',
        "Lender's Zap is interesting because, within a year, the interest generated from cSAI could completely cover your margin trade purchase. Think of it as trading with your future interest earned.",
        'After sending your ETH, you will immediately receive allocated tokens (cSAI+dLETH2x) which track your DAI lending balance + margin trade position. Once you receive these tokens you can visit Compound.Finance to view/withdraw interest earned and Fulcrum.Trade to view your ROI/ close position on dLETH2x.'
      ],
      textLink: [
        {
          text: 'Check out this tutorial we made to help you use Fulcrum',
          hyperlink:
            'https://defitutorials.substack.com/p/margin-trading-with-fulcrum'
        },
        {
          text: 'Compound.',
          hyperlink:
            'https://defitutorials.substack.com/p/earn-passive-income-with-compound'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/lender-zap-walk-through-tutorial'
    },
    whatThisMeans: {
      text: [
        '90% auto-converted into SAI + supplied to Compound to mint cSAI',
        '10% used to open ETH Long position with 2X leverage on Fulcrum (dLETH2x)'
      ]
    },
    oneClickAccessTo: [
      { text: 'Lending',color:'#0bef3d' },
      { text: 'Long ETH with 2X Leverage', color:'#007BFF' }
    ],
    platformsUsed: [
      {
        key: 'Compound',
        value: 'Compound',
        url: 'https://compound.finance/',
        color: '#28A745'
      },
      {
        key: 'Fulcrum',
        value: 'Fulcrum',
        url: 'https://fulcrum.trade/#/',
        color:'#407BF7'
      }
    ],
    metamaskInteractionsSaved: [{ saved: 4 }]
  },
  ETHMaximalist: {
    id: 'ETHMaximalist',
    name: 'ETH Bull',
    text: 'Eth-Max',
    isOrderable: true,
    hasReturnsChart: false,
    numberOfInteractions: 6,
    ensAddress: 'EthBull.DeFiZap.eth',
    gasLimitRequirement:'7000000',
    components: [
      {
        name: 'dLETH2x',
        percent: 50,
        color: '#5540BF'
      },
      {
        name: 'dsWBTC',
        percent: 50,
        color: '#A726f2'
      }
    ],
    description: {
      textQuestion: 'What does this Zap do?',
      textAnswer: [
        'Your deposit is automatically split between bZx Perpetual Short WBTC (dsWBTC) and bZx Perpetual Long ETH-DAI 2x(dLETH2x).  For example, if you send 1 ETH to Ethmax.DeFiZap.eth or buy from our website, 0.5 of your ETH will go towards opening a Perpetual (without expiration) BTC Short position on Fulcrum exchange while 0.5 will be used to open a Perpetual ETH Long with 2x leverage.',
        'This means you will have exposure to 1 ETH (0.5X2) and 0.5 ETH’s worth of WBTC Short position. After sending your ETH, you will immediately receive allocated tokens (dsWBTC+dLETH2x) which track your trade positions.',
        'Soon you will be able to manage your positions and assets directly from DeFiZap Dashboard.'
      ],
      textLink: [
        {
          text: 'Check out this tutorial we made to help you use Fulcrum.',
          hyperlink:
            'https://defitutorials.substack.com/p/margin-trading-with-fulcrum'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/eth-maximalist-zap-walk-through-tutorial'
    },
    whatThisMeans: {
      text: [
        '50% used to open ETH Long position with 2X leverage on Fulcrum (dLETH2x)',
        '50% used to open BTC Short position on Fulcrum (dsWBTC2x)'
      ]
    },
    oneClickAccessTo: [
      { text: 'Long ETH with 2X Leverage', color:'#007BFF' },
      { text: 'Short-sell WBTC', color:'#DC3545' }
    ],
    platformsUsed: [
      {
        key: 'Fulcrum',
        value: 'Fulcrum',
        url: 'https://fulcrum.trade/#/',
        color:'#407BF7'
      }
    ],
    metamaskInteractionsSaved: [{ saved: 2 }]
  },
  moderatebull: {
    id: 'moderatebull',
    name: 'Moderate Bull',
    text: 'Mod-Bull',
    isOrderable: true,
    hasReturnsChart: false,
    numberOfInteractions: 4,
    ensAddress: 'ModerateBull.DeFiZap.eth',
    gasLimitRequirement:'2000000',
    components: [
      {
        name: 'sETH',
        percent: 50,
        color: '#01ad75'
      },
      {
        name: 'sBTC',
        percent: 50,
        color: '#53B267'
      }
    ],
    description: {
      textQuestion: 'What does Moderate Bull Zap do?',
      textAnswer: [
        'Your deposit is automatically allocated 50% to sBTC and 50% to sETH Synths which represent BTC and ETH long positions on Synthetix’s protocol.',
        'For example, if you send 1 ETH to ModerateBull.DeFiZap.Eth:',
        ' - 0.5 of your ETH will go towards longing BTC by purchasing sBTC on Synthetix exchange.',
        ' - 0.5 of your ETH will go towards longing ETH by purchasing sETH on Synthetix exchange.',
        'After sending your deposit, you will immediately receive allocated Synths (sBTC+sETH) which track your trade positions.',
        'Soon you will be able to manage your purchased assets right from DeFiZap Dashboard but for now you can visit Synthetix.Exchange to view balances and trade your Synths.',
        'Please note:',
        '  (a). Etherscan will show you a warning error.  Please do not worry, that is just an internal check error that does not impact the transaction and you will receive the necessary sBTC and sETH in your wallet without any issues.',
        '  (b). If you are sending ETH directly to ModerateBull.DeFiZap.Eth, please ensure that the Gas Price is set to no more than 1 Gwei.'
      ],
      textLink: [
        {
          text:
            'Check out this tutorial to help you understand how Synthetix works.',
          hyperlink:
            'https://defitutorials.substack.com/p/the-ultimate-guide-to-synthetix'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/moderate-bull-defizap-walk-through'
    },
    whatThisMeans: {
      text: ['50% used to acquire sBTC', '50% used to acquire sETH']
    },
    oneClickAccessTo: [{ text: 'Synthetic Asset Trading', color:'#6C757D' }],
    platformsUsed: [
      {
        key: 'Synthetix',
        value: 'Synthetix',
        url: 'https://https://synthetix.exchange/',
        color: '#282C34'
      }
    ],
    metamaskInteractionsSaved: [{ saved: 3 }]
  },
  doublebull: {
    id: 'doublebull',
    name: 'Double Bull',
    text: 'Double-Bull',
    isOrderable: true,
    hasReturnsChart: false,
    numberOfInteractions: 4,
    ensAddress: 'DoubleBull.DeFiZap.eth',
    gasLimitRequirement:'7000000',
    components: [
      {
        name: 'dLETH2x',
        percent: 50,
        color: '#D42351'
      },
      {
        name: 'dLWBTC2x',
        percent: 50,
        color: '#6E2001'
      }
    ],
    description: {
      textQuestion: 'What does Double Bull do?',
      textAnswer: [
        'Your deposit is automatically split into opening Perpetual (no expiration) 2x Long on ETH(dLETH2x) + BTC(dLWBTC2x).',
        'For example, if you send 1 ETH to DoubleBull.DeFiZap.eth:',
        ' - 0.5 of your ETH will go towards opening Perpetual BTC Long position with 2x leverage.',
        ' - 0.5 ETH will be used to open Perpetual ETH Long with 2x leverage. This means you will have exposure to 1 ETH (0.5x2).',
        'After sending your deposit, you will immediately receive allocated bZx tokens (dLETH2x+dLWBTC2x) which track your open margin trade positions.',
        'Soon you will be able to manage your purchased assets right from DeFiZap Dashboard but for now you can visit Fulcrum.Trade to view your balances and trade your positions.'
      ],
      textLink: [
        {
          text: 'Check out this tutorial to see how Fulcrum works.',
          hyperlink:
            'https://defitutorials.substack.com/p/margin-trading-with-fulcrum'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/double-bull-defizap-walk-through'
    },
    whatThisMeans: {
      text: [
        '50% used to open ETH Long position with 2X leverage on Fulcrum (dLETH2x)',
        '50% used to open BTC Long position with 2X leverage on Fulcrum (dLWBTC2x)'
      ]
    },
    oneClickAccessTo: [
      { text: 'Long ETH with 2X Leverage', color:'#007BFF' },
      { text: 'Long BTC with 2X Leverage', color:'#FFC107' }
    ],
    platformsUsed: [
      {
        key: 'Fulcrum',
        value: 'Fulcrum',
        url: 'https://fulcrum.trade/#/',
        color:'#407BF7'

      }
    ],
    metamaskInteractionsSaved: [{ saved: 2 }]
  },
  supersaver: {
    id: 'supersaver',
    name: 'Super Saver',
    text: 'SuperSaver',
    isOrderable: true,
    hasReturnsChart: false,
    numberOfInteractions: 5,
    ensAddress: 'SuperSaver.DeFiZap.eth',
    gasLimitRequirement:'3000000',
    components: [
      {
        name: 'cSAI',
        percent: 50,
        color: '#01D691'
      },
      {
        name: 'iSAI',
        percent: 50,
        color: '#0062CD'
      }
    ],
    description: {
      textQuestion: 'What does SuperSaver Zap do?',
      textAnswer: [
        'Your deposit is automatically allocated 50% to cSAI and 50% to iSAI which represent your DAI supply balances on Compound and Fulcrum',
        'For example, if you send 1 ETH to SuperSaver.DeFiZap.Eth:',
        '- 0.5 of your ETH will be converted to cSAI.',
        '- 0.5 of your ETH will be converted to iSAI.',
        'After sending your deposit, you will immediately receive allocated tokens.',
        "Soon you will be able to manage these tokens right from DeFiZap Dashboard but for now you can visit Compound + Fulcrum to see how much interest you've earned or make a withdrawal."
      ],
      textLink: [
        {
          text: 'Check out this tutorial we made to help you use Fulcrum',
          hyperlink:
            'https://defitutorials.substack.com/p/margin-trading-with-fulcrum'
        },
        {
          text: 'Compound.',
          hyperlink:
            'https://defitutorials.substack.com/p/earn-passive-income-with-compound'
        }
      ],
      tutorialLink:
        'https://defitutorials.substack.com/p/super-saver-defizap-walk-through'
    },
    whatThisMeans: {
      text: [
        '50% auto-converted into SAI + supplied to Compound to mint cSAI',
        '50% auto-converted into SAI + supplied to Fulcrum to mint iSAI'
      ]
    },
    oneClickAccessTo: [{ text: 'Lending', color:'#0bef3d' }],
    platformsUsed: [
      {
        key: 'Compound',
        value: 'Compound',
        url: 'https://compound.finance/',
        color: '#28A745'
      },
      {
        key: 'Fulcrum',
        value: 'Fulcrum',
        url: 'https://fulcrum.trade/#/',
        color:'#407BF7'

      }
    ],
    metamaskInteractionsSaved: [{ saved: 4 }]
  },

  bullSharpe: {
    id: 'bullSharpe',
    name: 'Conservative Bull',
    isOrderable: false,
    components: [
      {
        name: 'cSAI',
        percent: 90
      },
      {
        name: 'ETHMINVOL',
        percent: 10
      }
    ]
  },
  bearSharpe: {
    id: 'bearSharpe',
    name: 'Conservative Bear',
    isOrderable: false,
    components: [
      {
        name: 'cSAI',
        percent: 90
      },
      {
        name: 'dSETH1x',
        percent: 10
      }
    ]
  },
  moderate: {
    id: 'moderate',
    name: 'Moderate',
    isOrderable: false,
    components: [
      {
        name: 'cSAI',
        percent: 50
      },
      {
        name: 'ETH12EMA',
        percent: 25
      },
      {
        name: 'ETHMINVOL',
        percent: 25
      }
    ]
  },
  moderateBear: {
    id: 'moderateBear',
    name: 'Moderate Bear',
    isOrderable: false,
    components: [
      {
        name: 'cSAI',
        percent: 50
      },
      {
        name: 'ETHHIVOL',
        percent: 25
      },
      {
        name: 'ETH12EMA',
        percent: 25
      }
    ]
  },
  longTermBull: {
    id: 'longTermBull',
    name: 'Long Term Bull',
    isOrderable: false,
    components: [
      {
        name: 'cSAI',
        percent: 20
      },
      {
        name: 'ETH20SMACO',
        percent: 40
      },
      {
        name: 'ETHMINVOL',
        percent: 40
      }
    ]
  },
  shortTermBear: {
    id: 'shortTermBear',
    name: 'Short Term Bear',
    isOrderable: false,
    components: [
      {
        name: 'cSAI',
        percent: 20
      },
      {
        name: 'ETHHIVOL',
        percent: 40
      },
      {
        name: 'ETH12EMA',
        percent: 40
      }
    ]
  },
  shortTermFlat: {
    id: 'shortTermFlat',
    name: 'Short Term Flat',
    isOrderable: false,
    components: [
      {
        name: 'ETHMINVOL',
        percent: 50
      },
      {
        name: 'ETH20SMACO',
        percent: 25
      },
      {
        name: 'ETH12EMA',
        percent: 25
      }
    ]
  },
  moderateDiversified: {
    id: 'moderateDiversified',
    name: 'Moderate Diversified',
    isOrderable: false,
    components: [
      {
        name: 'cSAI',
        percent: 25
      },
      {
        name: 'ETH12EMA',
        percent: 25
      },
      {
        name: 'ETH26EMA',
        percent: 25
      },
      {
        name: 'dLETH2x',
        percent: 25
      }
    ]
  },
  moderateFlat: {
    id: 'moderateFlat',
    name: 'Moderate Flat',
    isOrderable: false,
    components: [
      {
        name: 'cSAI',
        percent: 25
      },
      {
        name: 'ETHMINVOL',
        percent: 50
      },
      {
        name: 'ETH12EMA',
        percent: 25
      }
    ]
  },
  hedgedBull: {
    id: 'hedgedBull',
    name: 'Hedge Bull',
    isOrderable: false,
    components: [
      {
        name: 'cSAI',
        percent: 50
      },
      {
        name: 'ETHMINVOL',
        percent: 40
      },
      {
        name: 'dLETH2x',
        percent: 10
      }
    ]
  },
  beginnerBull: {
    id: 'beginnerBull',
    name: 'Beginner Bull',
    isOrderable: false,
    components: [
      {
        name: 'ETHMINVOL',
        percent: 50
      },
      {
        name: 'ETH20SMA',
        percent: 50
      }
    ]
  },
  beginnerBear: {
    id: 'beginnerBear',
    name: 'Beginner Bear',
    isOrderable: false,
    components: [
      {
        name: 'cSAI',
        percent: 50
      },
      {
        name: 'ETH12EMA',
        percent: 25
      },
      {
        name: 'ETH26EMA',
        percent: 25
      }
    ]
  },
  activeBear: {
    id: 'activeBear',
    name: 'Active Bear',
    isOrderable: false,
    components: [
      {
        name: 'ETHHIVOL',
        percent: 50
      },
      {
        name: 'ETH12EMA',
        percent: 25
      },
      {
        name: 'dSETH2x',
        percent: 25
      }
    ]
  },
  activeBull: {
    id: 'activeBull',
    name: 'Active Bull',
    isOrderable: false,
    components: [
      {
        name: 'ETHHIVOL',
        percent: 50
      },
      {
        name: 'ETH12EMA',
        percent: 50
      }
    ]
  },
  flatLands: {
    id: 'flatLands',
    name: 'Flat Lands',
    isOrderable: false,
    components: [
      {
        name: 'ETHMINVOL',
        percent: 50
      },
      {
        name: 'ETH12EMA',
        percent: 50
      }
    ]
  },
  riskyBear: {
    id: 'riskyBear',
    name: 'Risky Bear',
    isOrderable: false,
    components: [
      {
        name: 'ETHHIVOL',
        percent: 50
      },
      {
        name: 'ETH12EMA',
        percent: 25
      },
      {
        name: 'dLETH2x',
        percent: 25
      }
    ]
  },
  riskyBull: {
    id: 'riskyBull',
    name: 'Risky Bull',
    isOrderable: false,
    components: [
      {
        name: 'ETHMINVOL',
        percent: 25
      },
      {
        name: 'dLETH2x',
        percent: 75
      }
    ]
  }
};

export default Zaps;
