import React from 'react';
import { Card, Text } from '@mydefi/ui';
import PropTypes from 'prop-types';
import Colors from './Colors';

const COMPOUND_ACCOUNT_ENDPOINT = 'https://api.compound.finance/api/v2/account';

class CompoundCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      health: 'N/A'
    };
  }

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
      <Card title="Compound" description={this.props.selectedAddress}>
        <Text size="20px" color={Colors.textPrimary}>
          {`Health ${this.state.health}`}
        </Text>
        <br />
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
