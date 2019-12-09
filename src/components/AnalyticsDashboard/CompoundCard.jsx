import React from 'react';
import { Asset, Card, Modal, Text } from '@mydefi/ui';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import Colors from './Colors';

const COMPOUND_ACCOUNT_ENDPOINT = 'https://api.compound.finance/api/v2/account';
const ICON =
  'data:image/png;base64,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';

class CompoundCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      health: 'N/A'
    };
  }

  toggleModal = () => {
    const isModal = this.state.showModal;
    this.setState({
      showModal: !isModal
    });
  };

  componentDidMount = async () => {
    fetch(COMPOUND_ACCOUNT_ENDPOINT, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Accept: 'application/json'
      }
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          health: json.accounts[0].health.value
        });
      });
  };

  render() {
    return (
      <Card title="Compound" description="Compound Lending"
        onClick={this.toggleModal}
      >
        <Asset icon={ICON} size="30px" symbol="COMPOUND" />
        <Modal title="Compound Assets" visible={this.state.showModal}
          onClick={this.toggleModal}
          width="800px"
        >
          <Text size="20px" color={Colors.textPrimary}>
            {`Health ${numeral(this.state.health).format('0,0.00000000')}`}
          </Text>
        </Modal>
      </Card>
    );
  }
}

CompoundCard.defaultProps = {
  selectedAddress: '0x0'
};

CompoundCard.propTypes = {
  selectedAddress: PropTypes.string
};

export default CompoundCard;
