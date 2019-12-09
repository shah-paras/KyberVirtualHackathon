const surveyResults = {
  conservative: {
    beginner: {
      shortTerm: {
        bull: ['lender', 'unipoolseth'],
        bear: ['lender', 'unipooldai'],
        flat: ['lender', 'unipoolsnx'],
        notSure: ['lender', 'unipoolmkr']
      },
      mediumTerm: {
        bull: ['unipoolseth', 'lender'],
        bear: ['lender', 'unipooldai'],
        flat: ['lender', 'unipoolmkr'],
        notSure: ['lender', 'unipoolsnx']
      },
      longTerm: {
        bull: ['unipoolseth', 'supersaver'],
        bear: ['supersaver', 'unipooldai'],
        flat: ['supersaver', 'unipoolsnx'],
        notSure: ['supersaver', 'unipoolmkr']
      }
    },
    expert: {
      shortTerm: {
        bull: ['unipoolseth', 'bullSharpe'],
        bear: ['unipooldai', 'bearSharpe'],
        flat: ['lender', 'unipoolmkr'],
        notSure: ['lender', 'unipoolsnx']
      },
      mediumTerm: {
        bull: ['unipoolseth', 'bullSharpe'],
        bear: ['unipooldai', 'bearSharpe'],
        flat: ['lender', 'unipoolsnx'],
        notSure: ['lender', 'unipoolmkr']
      },
      longTerm: {
        bull: ['unipoolseth', 'bullSharpe'],
        bear: ['unipooldai', 'bearSharpe'],
        flat: ['supersaver', 'unipoolsnx'],
        notSure: ['supersaver', 'unipoolmkr']
      }
    },
    advanced: {
      shortTerm: {
        bull: ['unipoolseth', 'bullSharpe'],
        bear: ['unipooldai', 'bearSharpe'],
        flat: ['lender', 'unipoolmkr'],
        notSure: ['lender', 'unipoolsnx']
      },
      mediumTerm: {
        bull: ['unipoolseth', 'bullSharpe'],
        bear: ['unipooldai', 'bearSharpe'],
        flat: ['lender', 'unipoolsnx'],
        notSure: ['lender', 'unipoolmkr']
      },
      longTerm: {
        bull: ['unipoolseth', 'bullSharpe'],
        bear: ['unipooldai', 'bearSharpe'],
        flat: ['supersaver', 'unipoolmkr'],
        notSure: ['supersaver', 'unipoolsnx']
      }
    }
  },
  moderate: {
    beginner: {
      shortTerm: {
        bull: ['unipoolseth', 'moderatebull'],
        bear: ['unipooldai', 'moderate'],
        flat: ['unipoolsnx', 'moderate'],
        notSure: ['unipoolmkr', 'moderate']
      },
      mediumTerm: {
        bull: ['unipoolseth', 'moderatebull'],
        bear: ['unipooldai', 'moderate'],
        flat: ['unipoolmkr', 'moderate'],
        notSure: ['unipoolsnx', 'moderate']
      },
      longTerm: {
        bull: ['unipoolseth', 'moderatebull'],
        bear: ['unipooldai', 'moderateBear'],
        flat: ['unipoolmkr', 'moderate'],
        notSure: ['unipoolsnx', 'moderate']
      }
    },
    expert: {
      shortTerm: {
        bull: ['unipoolseth', 'longTermBull'],
        bear: ['unipooldai', 'shortTermBear'],
        flat: ['shortTermFlat', 'unipoolsnx'],
        notSure: ['unipoolmkr', 'shortTermFlat']
      },
      mediumTerm: {
        bull: ['unipoolseth', 'longTermBull'],
        bear: ['unipooldai', 'shortTermBear'],
        flat: ['unipoolmkr', 'shortTermFlat'],
        notSure: ['unipoolsnx', 'shortTermFlat']
      },
      longTerm: {
        bull: ['unipoolseth', 'longTermBull'],
        bear: ['unipooldai', 'shortTermBear'],
        flat: ['unipoolsnx', 'moderateFlat'],
        notSure: ['unipoolmkr', 'moderateFlat']
      }
    },
    advanced: {
      shortTerm: {
        bull: ['unipoolseth', 'moderatebull'],
        bear: ['unipooldai', 'shortTermBear'],
        flat: ['unipoolmkr', 'shortTermFlat'],
        notSure: ['unipoolsnx', 'shortTermFlat']
      },
      mediumTerm: {
        bull: ['unipoolseth', 'moderateDiversified'],
        bear: ['unipooldai', 'activeBear'],
        flat: ['unipoolsnx', 'moderateFlat'],
        notSure: ['unipoolmkr', 'moderateFlat']
      },
      longTerm: {
        bull: ['unipoolseth', 'hedgedBull'],
        bear: ['unipooldai', 'moderateFlat'],
        flat: ['unipoolmkr', 'moderateFlat'],
        notSure: ['moderateFlat', 'unipoolsnx']
      }
    }
  },
  aggressive: {
    beginner: {
      shortTerm: {
        bull: ['unipoolseth', 'beginnerBull'],
        bear: ['unipooldai', 'beginnerBear'],
        flat: ['unipoolsnx', 'shortTermFlat'],
        notSure: ['unipoolmkr', 'shortTermFlat']
      },
      mediumTerm: {
        bull: ['unipoolseth', 'lender'],
        bear: ['unipooldai', 'lender'],
        flat: ['unipoolmkr', 'lender'],
        notSure: ['lender', 'unipoolsnx']
      },
      longTerm: {
        bull: ['unipoolseth', 'beginnerBull'],
        bear: ['unipooldai', 'activeBear'],
        flat: ['unipoolsnx', 'flatLands'],
        notSure: ['unipoolmkr', 'flatLands']
      }
    },
    expert: {
      shortTerm: {
        bull: ['doublebull', 'unipoolseth'],
        bear: ['unipooldai', 'riskyBear'],
        flat: ['doublebull', 'unipoolmkr'],
        notSure: ['doublebull', 'unipoolsnx']
      },
      mediumTerm: {
        bull: ['doublebull', 'unipoolseth'],
        bear: ['unipooldai', 'activeBear'],
        flat: ['doublebull', 'unipoolsnx'],
        notSure: ['doublebull', 'unipoolmkr']
      },
      longTerm: {
        bull: ['unipoolseth', 'riskyBull'],
        bear: ['unipooldai', 'activeBear'],
        flat: ['unipoolmkr', 'flatLands'],
        notSure: ['unipoolsnx', 'flatLands']
      }
    },
    advanced: {
      shortTerm: {
        bull: ['ETHMaximalist', 'unipoolseth'],
        bear: ['unipooldai', 'riskyBear'],
        flat: ['unipoolmkr', 'flatLands'],
        notSure: ['unipoolsnx', 'lender']
      },
      mediumTerm: {
        bull: ['unipoolseth', 'ETHMaximalist'],
        bear: ['unipooldai', 'riskyBear'],
        flat: ['unipoolsnx', 'flatLands'],
        notSure: ['unipoolmkr', 'lender']
      },
      longTerm: {
        bull: ['unipoolseth', 'riskyBull'],
        bear: ['unipooldai', 'activeBear'],
        flat: ['activeBull', 'unipoolmkr'],
        notSure: ['unipoolsnx', 'activeBull']
      }
    }
  }
};

export default surveyResults;
