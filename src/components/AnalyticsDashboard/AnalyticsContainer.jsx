import React, { PureComponent } from 'react';
import { Table, TableRow } from '@mydefi/ui';
import DefiZap from 'defizapjs/src/DefiZap';
import Web3 from 'web3';
import web3 from '../../web3/web3';

import CompoundCard from './CompoundCard';
import FulcrumCard from './FulcrumCard';
import PoolTogetherCard from './PoolTogetherCard';
import SynthetixCard from './SynthetixCard';
// see todo issue for tokenset in import TokenSetsCard from './TokenSetsCard';
import UniswapCard from './UniswapCard';
import WalletCard from './WalletCard';

import { Colors } from './Colors';
import styles from './ui.css';

export const Main = props => {
  return (
    <div
      className={styles.Main}
      style={{ backgroundColor: Colors.mainBackground }}
    >
      {props.children}
    </div>
  );
};

class AnalyticsContainer extends PureComponent {
  constructor(props) {
    super(props);
    const defiZap = new DefiZap();

    this.state = {
      selectedAddress: '',
      web3,
      defiZap
    };
  }

  // @deprecated legacy method for responding to account selection
  handleAddressSelection = () => {
    this.setState(prevState => ({
      selectedAddress: prevState.web3.givenProvider.selectedAddress
    }));
  };

  defiZap = () => {
    return this.state.defiZap;
  };

  componentDidMount = async () => {
    const comp = this;
    if (!this.providerExists()) {
      if (typeof window.ethereum !== 'undefined') {
        // connect via metamask...
        // @todo connect via other provider?
        window.ethereum
          .enable()
          // eslint-disable-next-line no-unused-vars
          .then(accounts => {
            comp.setState({
              web3: new Web3(window.ethereum)
            });
            this.handleAccountsChanged(accounts);
          })
          .catch(error => {
            console.log(`Failure connecting to provider: ${error}`);
          });
      }
    } else if (window.ethereum) {
      window.ethereum.on('accountsChanged', this.handleAccountsChanged);
      this.handleAddressSelection();
      // TODO currently metamask is *not* injecting send: 'Unhandled Rejection (TypeError): window.ethereum.send(...) is undefined'
      // this will be a breaking change
      // window.ethereum
      //   .send('eth_accounts')
      //   .then(accounts => {
      //     this.handleAccountsChanged(accounts);
      //   })
      //   .catch(err => {
      //     if (err.code === 4100) {
      //       console.log('Please connect to MetaMask.');
      //     } else {
      //       console.error(err);
      //     }
      //   });
    } else {
      // possibly old metamask, etc so fallback to legacy handler
      setTimeout(this.handleAddressSelection, 1000);
    }
  };

  // per https://medium.com/metamask/breaking-changes-to-the-metamask-inpage-provider-b4dde069dd0a
  handleAccountsChanged = accounts => {
    console.log(`Handling accounts: ${JSON.stringify(accounts)}`);
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      // TODO replace this with a visible user message
      console.log('Please connect to MetaMask.');
    } else if (accounts[0] !== this.state.selectedAddress) {
      this.setState({
        selectedAddress: accounts[0]
      });
    }
  };

  providerExists = () => {
    return (
      typeof this.state.web3 !== 'undefined' &&
      typeof this.state.web3.givenProvider !== 'undefined'
    );
  };

  render() {
    return (
      <Main>
        <Table>
          <TableRow
            data={[
              <WalletCard
                key="wallet"
                web3={this.state.web3}
                selectedAddress={this.state.selectedAddress}
              />
            ]}
          />
          <TableRow
            data={[
              <SynthetixCard
                key="synthetix"
                selectedAddress={this.state.selectedAddress}
              />
            ]}
          />
          <TableRow
            data={[
              <CompoundCard
                key="compound"
                selectedAddress={this.state.selectedAddress}
              />
            ]}
          />
          <TableRow
            data={[
              <UniswapCard
                key="uniswap"
                web3={this.state.web3}
                selectedAddress={this.state.selectedAddress}
              />
            ]}
          />
          <TableRow
            data={[
              <FulcrumCard
                key="fulcrum"
                web3={this.state.web3}
                selectedAddress={this.state.selectedAddress}
              />
            ]}
          />
          <TableRow
            data={[
              <PoolTogetherCard
                key="pooltogether"
                web3={this.state.web3}
                selectedAddress={this.state.selectedAddress}
              />
            ]}
          />
        </Table>
      </Main>
    );
  }
}

export default AnalyticsContainer;
