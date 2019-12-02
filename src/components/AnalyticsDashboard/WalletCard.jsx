import React from 'react';
import { Card, Text, Colors } from '@mydefi/ui';
import PropTypes from 'prop-types';
import web3 from '../../web3/web3';

class WalletCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBalance: '0'
    };
  }

  componentDidMount = async () => {
    await this.updateWallet();
  };

  updateWallet = async () => {
    if (this.selectedAddressExists()) {
      const balance = await this.getSelectedBalance();
      this.setState({
        currentBalance: web3.utils.fromWei(balance, 'ether')
      });
    }
    setTimeout(this.updateWallet, 1000);
  };

  selectedAddressExists = () => {
    return (
      typeof this.props.web3.givenProvider.selectedAddress !== 'undefined' &&
      this.props.web3.givenProvider.selectedAddress !== null
    );
  };

  getSelectedBalance = async () => {
    return this.props.web3.eth.getBalance(web3.givenProvider.selectedAddress);
  };

  render() {
    return (
      <Card title="Your wallet" description={this.props.selectedAddress}>
        <Text size="20px" color={Colors.textPrimary}>
          {this.state.currentBalance} Ether
        </Text>
      </Card>
    );
  }
}

WalletCard.defaultProps = {
  selectedAddress: '0x0'
};

WalletCard.propTypes = {
  selectedAddress: PropTypes.string
};

export default WalletCard;
