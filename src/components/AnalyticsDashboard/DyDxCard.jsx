import React from 'react';
import { Card, Text, Colors } from '@mydefi/ui';
import PropTypes from 'prop-types';
import { Solo, Networks } from '@dydxprotocol/solo';
import _ from 'lodash';

function MarketList(markets) {
  const marks = markets.markets;
  if (marks && marks.length > 0) {
    const items = marks.map(market => (
      <div key={market.id}>
        <Text size="20px" color={Colors.textPrimary}>
          {market.name} ({market.symbol})
        </Text>
        <br />
        <Text size="20px" color={Colors.textSecondary}>
          Currency: {market.currency.symbol} <br />
          Supply Index: {market.supplyIndex} <br />
          Borrow Index: {market.borrowIndex} <br />
          Collateral Ratio: {market.collateralRatio} <br />
        </Text>
      </div>
    ));
    return <div>{items}</div>;
  }
  return <div>No markets available</div>;
}

class DyDxCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markets: []
    };
  }

  componentDidMount = async () => {};

  componentDidUpdate = async prevProps => {
    if (!_.isEqual(this.props.selectedAddress, prevProps.selectedAddress)) {
      // eslint-disable-next-line react/no-did-update-set-state
      try {
        const marks = await this.getMarkets(this.props.selectedAddress);
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          markets: marks
        });
      } catch (err) {
        console.log(`Failure getting balances ${err}`);
      }
    }
  };

  getMarkets = async selectedAddress => {
    if (selectedAddress) {
      const solo = new Solo(this.props.web3.currentProvider, Networks.MAINNET, {
        defaultAccount: selectedAddress
      });
      const { markets } = await solo.api.getMarkets();
      return markets;
    }
    return [];
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
        <MarketList markets={this.state.markets} />
      </Card>
    );
  }
}

DyDxCard.propTypes = {
  selectedAddress: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  web3: PropTypes.object.isRequired
};

export default DyDxCard;
