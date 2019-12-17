import {
  LENDER_CONTRACT_ADDRESS,
  ETHMAXIMALIST_CONTRACT_ADDRESS,
  DOUBLE_BULL_CONTRACT_ADDRESS,
  MODERATE_BULL_CONTRACT_ADDRESS,
  SUPER_SAVER_CONTRACT_ADDRESS,
  UNIPOOL_DAI_CONTRACT_ADDRESS,
  UNIPOOL_MKR_CONTRACT_ADDRESS,
  UNIPOOL_SNX_CONTRACT_ADDRESS,
  UNIPOOL_SETH_CONTRACT_ADDRESS,
  UNIPOOL_SAI_CONTRACT_ADDRESS,
  UNIPOOL_CHAI_CONTRACT_ADDRESS

} from '../web3/address';

import LENDER_ABI from '../web3/abi';
import ETHMAXIMALIST_ABI from '../web3/ethmaxAbi';
import SHORTTERMBULL_ABI from '../web3/DoubleBullAbi';
import MODERATE_BULL_ABI from '../web3/moderateBullAbi';
import SUPER_SAVER_ABI from '../web3/superSaverAbi';
import UNIPOOL_DAI_ABI from '../web3/unipoolDaiAbi';
import UNIPOOL_MKR_ABI from '../web3/unipoolMkrAbi';
import UNIPOOL_SNX_ABI from '../web3/unipoolSnxAbi';
import UNIPOOL_SETH_ABI from '../web3/unipoolSEthAbi';
import UNIPOOL_SAI_ABI from '../web3/unipoolSaiAbi';
import UNIPOOL_CHAI_ABI from '../web3/unipoolChaiAbi';


const contractProvider = name => {
  switch (name) {
    case 'Lender': {
      return {
        contractAbi: LENDER_ABI,
        contractAddress: LENDER_CONTRACT_ADDRESS,
        gas: 7000000
      };
    }
    case 'ETH Bull': {
      return {
        contractAbi: ETHMAXIMALIST_ABI,
        contractAddress: ETHMAXIMALIST_CONTRACT_ADDRESS,
        gas: 7000000
      };
    }
    case 'Moderate Bull': {
      return {
        contractAbi: MODERATE_BULL_ABI,
        contractAddress: MODERATE_BULL_CONTRACT_ADDRESS,
        gas: 2000000,
        gasPrice: '1000000000'
      };
    }
    case 'Double Bull': {
      return {
        contractAbi: SHORTTERMBULL_ABI,
        contractAddress: DOUBLE_BULL_CONTRACT_ADDRESS,
        gas: 7000000
      };
    }
    case 'Super Saver': {
      return {
        contractAbi: SUPER_SAVER_ABI,
        contractAddress: SUPER_SAVER_CONTRACT_ADDRESS,
        gas: 3000000
      };
    }
    case 'DAI Unipool': {
      return {
        contractAbi: UNIPOOL_DAI_ABI,
        contractAddress: UNIPOOL_DAI_CONTRACT_ADDRESS,
        gas: 1500000
      };
    }
    case 'MKR Unipool': {
      return {
        contractAbi: UNIPOOL_MKR_ABI,
        contractAddress: UNIPOOL_MKR_CONTRACT_ADDRESS,
        gas: 1500000
      };
    }
    case 'SNX Unipool': {
      return {
        contractAbi: UNIPOOL_SNX_ABI,
        contractAddress: UNIPOOL_SNX_CONTRACT_ADDRESS,
        gas: 1500000
      };
    }
    case 'sETH Unipool': {
      return {
        contractAbi: UNIPOOL_SETH_ABI,
        contractAddress: UNIPOOL_SETH_CONTRACT_ADDRESS,
        gas: 1500000
      };
    }
    case 'SAI Unipool': {
      return {
        contractAbi: UNIPOOL_SAI_ABI,
        contractAddress: UNIPOOL_SAI_CONTRACT_ADDRESS,
        gas: 1500000
      };
    }
    case 'CHAI Unipool': {
      return {
        contractAbi: UNIPOOL_CHAI_ABI,
        contractAddress: UNIPOOL_CHAI_CONTRACT_ADDRESS,
        gas: 1500000
      };
    }
    default:
      return null;
  }
};

export default contractProvider;
