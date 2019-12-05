import React from 'react';
import { Card, Text, Colors } from '@mydefi/ui';
import PropTypes from 'prop-types';
import { getTokenReserves } from '@uniswap/sdk';

class UniswapCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      exchange: '',
      ethReserve: '',
      tokenReserve: ''
    };
  }

  componentDidMount = async () => {
    const tokenAddress = '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359'; // DAI Mainnet
    const tokenReserves = await getTokenReserves(
      tokenAddress,
      this.props.web3.currentProvider
    );
    this.setState({ 
      token: tokenReserves.token,
      exchange: tokenReserves.exchange,
      ethReserve: tokenReserves.ethReserve,
      tokenReserve: tokenReserves.tokenReserve
    });
  };

  render() {
    return (
      <Card title="Uniswap" description={this.props.selectedAddress}>
        <Text size="20px" color={Colors.textPrimary}>
          Token: {JSON.stringify(this.state.token.address)}
        </Text>
        <br />
        <Text size="20px" color={Colors.textSecondary}>
          Exchange: {JSON.stringify(this.state.exchange.address)}
        </Text>
        <br />
        <Text size="20px" color={Colors.textSecondary}>
          ETH reserve: {JSON.stringify(this.state.ethReserve.amount)}
        </Text>
        <br />
        <Text size="20px" color={Colors.textSecondary}>
          Token reserve: {JSON.stringify(this.state.tokenReserve.amount)}
        </Text>
        <br />
      </Card>
    );
  }
}

UniswapCard.propTypes = {
  selectedAddress: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  web3: PropTypes.object.isRequired
};

export default UniswapCard;
