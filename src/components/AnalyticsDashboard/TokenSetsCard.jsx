import React from 'react';
import { Card, Text, Colors } from '@mydefi/ui';
import PropTypes from 'prop-types';
import SetProtocol from 'setprotocol.js';

// TODO seeing a lot of failures executing `yarn add setprotocol.js`
// i.e.
// make: *** [Release/obj.target/scrypt/src/node-boilerplate/scrypt_params_async.o] Error 1
// gyp ERR! build error 
// gyp ERR! stack Error: `make` failed with exit code: 2
// gyp ERR! stack     at ChildProcess.onExit (/Users/heiho1/.nvm/versions/node/v12.13.1/lib/node_modules/npm/node_modules/node-gyp/lib/build.js:194:23)
// gyp ERR! stack     at ChildProcess.emit (events.js:210:5)
// gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:272:12)
// gyp ERR! System Darwin 18.7.0
// gyp ERR! command "/Users/heiho1/.nvm/versions/node/v12.13.1/bin/node" "/Users/heiho1/.nvm/versions/node/v12.13.1/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
// so deferring this card for now

// TODO support alternate configs like Kovan?
// @see https://dev.tokensets.com/#/getting-started#installation
const MAINNET_CONFIG = {
  coreAddress: '0xf55186CC537E7067EA616F2aaE007b4427a120C8',
  exchangeIssuanceModuleAddress: '0x73dF03B5436C84Cf9d5A758fb756928DCEAf19d7',
  kyberNetworkWrapperAddress: '0x0x9B3Eb3B22DC2C29e878d7766276a86A8395fB56d',
  protocolViewerAddress: '0x589d4b4d311EFaAc93f0032238BecD6f4D397b0f',
  rebalanceAuctionModuleAddress: '0xe23FB31dD2edacEbF7d92720358bB92445F47fDB',
  rebalancingSetExchangeIssuanceModule: '0xd4240987D6F92B06c8B5068B1E4006A97c47392b',
  rebalancingSetIssuanceModule: '0xcEDA8318522D348f1d1aca48B24629b8FbF09020',
  rebalancingSetTokenFactoryAddress: '0x15518Cdd49d83471e9f85cdCFBD72c8e2a78dDE2',
  setTokenFactoryAddress: '0xE1Cd722575801fE92EEef2CA23396557F7E3B967',
  transferProxyAddress: '0x882d80D3a191859d64477eb78Cca46599307ec1C',
  vaultAddress: '0x5B67871C3a857dE81A1ca0f9F7945e5670D986Dc',
  wrappedEtherAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
};

class TokenSetsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {};

  render() {
    return (
      <Card title="TokenSets" description={this.props.selectedAddress}>
        WIP
      </Card>
    );
  }
}

TokenSetsCard.propTypes = {
  selectedAddress: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  web3: PropTypes.object.isRequired
};

export default TokenSetsCard;