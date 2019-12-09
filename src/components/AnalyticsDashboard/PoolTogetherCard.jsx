import React from 'react';
import { Asset, Card, Modal, Text } from '@mydefi/ui';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import poolTogetherUtil from 'pooltogetherjs';
import { ADDRESS, ABI } from '../../web3/poolTogether';
import numeral from 'numeral';
import Colors from './Colors';

const ICON =
  'https://www.pooltogether.com/_next/static/images/pooltogether-white-logo-5d693df8933592c048c8168299f49144.svg';

const NUMERAL_FORMAT = '0,0.000';

class PoolTogetherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      info: {}
    };
  }

  componentDidMount = async () => {
    this.poolTogether = new this.props.web3.eth.Contract(ABI, ADDRESS);
    const info = await this.poolTogether.methods.getInfo().call();
    this.setState({
      info
    });
  };

  toggleModal = () => {
    const isModal = this.state.showModal;
    this.setState({
      showModal: !isModal
    });
  };

  render() {
    return (
      <Card
        title="PoolTogether"
        description="No-loss lottery"
        onClick={this.toggleModal}
      >
        <Asset icon={ICON} size="30px" symbol="" />
        <Modal
          title="Fulcrum Assets"
          visible={this.state.showModal}
          onClick={this.toggleModal}
          width="800px"
        >
          <Text size="20px" color={Colors.textPrimary}>
            Total Supply Balance: 
            {numeral(this.state.info.supplyBalanceTotal).format(NUMERAL_FORMAT)}
          </Text>
          <br />
          <Text size="20px" color={Colors.textSecondary}>
            Ticket Cost: 
            {numeral(this.state.info.ticketCost).format(NUMERAL_FORMAT)}
          </Text>
          <br />
          <Text size="20px" color={Colors.textSecondary}>
            Participant Count: 
            {numeral(this.state.info.participantCount).format(NUMERAL_FORMAT)}
          </Text>
          <br />
          <Text size="20px" color={Colors.textSecondary}>
            Max Pool Size: 
            {numeral(this.state.info.maxPoolSize).format(NUMERAL_FORMAT)}
          </Text>
          <br />
          <Text size="20px" color={Colors.textSecondary}>
            Estimated Interest: 
            {numeral(this.state.info.estimatedInterestFixedPoint18).format(NUMERAL_FORMAT)}
          </Text>
          <br />
          <Text size="20px" color={Colors.textSecondary}>
            Estimated Interest: 
            {numeral(this.state.info.estimatedInterestFixedPoint18).format(NUMERAL_FORMAT)}
          </Text>
          <br />
          <Text size="20px" color={Colors.textSecondary}>
            Hash of Secret: {this.state.info.hashOfSecret}
          </Text>
        </Modal>
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
