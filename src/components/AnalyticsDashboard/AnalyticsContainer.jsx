import React, { PureComponent } from 'react';
import autobind from 'react-autobind';
import { Main, Table, TableRow } from '@mydefi/ui';
import Web3 from 'web3';
import web3 from '../../web3/web3';
import AugurCard from './AugurCard';
import CompoundCard from './CompoundCard';
import DyDxCard from './DyDxCard';
import MakerCard from './MakerCard';
import SynthetixCard from './SynthetixCard';
import WalletCard from './WalletCard';

class AnalyticsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      web3,
      selectedAddress: ''
    };
    autobind(this);
  }

  handleAddressSelection = () => {
    this.setState(prevState => ({
      selectedAddress: prevState.web3.givenProvider.selectedAddress
    }));
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
          })
          .catch(error => {
            console.log(`Failure connecting to provider: ${error}`);
          });
      }
    }
    setTimeout(this.handleAddressSelection, 1000);
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
          <TableRow data={[<MakerCard key="maker" />]} />
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
              <SynthetixCard
                key="synthetix"
                selectedAddress={this.state.selectedAddress}
              />
            ]}
          />
          <TableRow
            data={[
              <AugurCard
                key="augur"
                selectedAddress={this.state.selectedAddress}
              />
            ]}
          />
          <TableRow
            data={[
              <DyDxCard
                key="dydx"
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
