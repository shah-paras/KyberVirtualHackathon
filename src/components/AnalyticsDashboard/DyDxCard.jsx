import React from 'react';
import { Card, Text, Colors } from '@mydefi/ui';
import PropTypes from 'prop-types';
import { Solo, Networks, BigNumber } from '@dydxprotocol/solo';

class DyDxCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balances: 'N/A'
    };
    this.solo = new Solo(this.props.web3, Networks.MAINNET, {
      defaultAccount: this.props.selectedAddress
    });
  }

  componentDidMount = async () => {
    // TODO this.props.selectedAddress renders in the card description but is empty string in 
    // getters call?
    if (this.selectedAddressExists()) {
      const balances = await this.solo.getters.getAccountBalances(
        this.props.selectedAddress,
        0
      );
      this.setState({
        balances: JSON.stringify(balances)
      });
    }
  };

  selectedAddressExists = () => {
    return (
      typeof this.props.selectedAddress !== 'undefined' &&
      this.props.selectedAddress.length > 0
    );
  };

  render() {
    return (
      <Card title="DxDy" description={this.props.selectedAddress}>
        <Text size="20px" color={Colors.textPrimary}>
          {this.state.balances ? this.state.balances : 'WIP'}
        </Text>
      </Card>
    );
  }
}

DyDxCard.defaultProps = {
  selectedAddress: '0x0'
};

DyDxCard.propTypes = {
  selectedAddress: PropTypes.string
};

export default DyDxCard;
