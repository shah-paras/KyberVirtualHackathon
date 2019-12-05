import React from 'react';
import { Card, Text, Colors } from '@mydefi/ui';
import PropTypes from 'prop-types';
import poolTogetherUtil from 'pooltogetherjs';
import { ADDRESS, ABI } from '../../web3/poolTogether';

class PoolTogetherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poolTogether: {},
      info: {}
    };
  }

  componentDidMount = async () => {
    const poolTogether = new this.props.web3.eth.Contract(ABI, ADDRESS);
    const info = await poolTogether.methods.getInfo().call();
    this.setState({
      poolTogether,
      info
    });
  };

  render() {
    return (
      <Card title="PoolTogether" description={this.props.selectedAddress}>
        <Text size="20px" color={Colors.textPrimary}>
          Total Supply Balance: {this.state.info.supplyBalanceTotal}
        </Text>
        <br />
        <Text size="20px" color={Colors.textSecondary}>
          Ticket Cost: {this.state.info.ticketCost}
        </Text>
        <br />
        <Text size="20px" color={Colors.textSecondary}>
          Participant Count: {this.state.info.participantCount}
        </Text>
        <br />
        <Text size="20px" color={Colors.textSecondary}>
          Max Pool Size: {this.state.info.maxPoolSize}
        </Text>
        <br />
        <Text size="20px" color={Colors.textSecondary}>
          Estimated Interest: {this.state.info.estimatedInterestFixedPoint18}
        </Text>
        <br />
        <Text size="20px" color={Colors.textSecondary}>
          Estimated Interest: {this.state.info.estimatedInterestFixedPoint18}
        </Text>
        <br />
        <Text size="20px" color={Colors.textSecondary}>
          Hash of Secret: {this.state.info.hashOfSecret}
        </Text>
        <br />
      </Card>
    );
  }
}

PoolTogetherCard.propTypes = {
  selectedAddress: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  web3: PropTypes.object.isRequired
};

export default PoolTogetherCard;
