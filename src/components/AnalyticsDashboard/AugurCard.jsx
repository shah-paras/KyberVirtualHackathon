import React from 'react';
import { Augur } from 'augur.js';
import { Card, Text, Colors } from '@mydefi/ui';
import PropTypes from 'prop-types';

const HTTP_ENDPOINT =
  'https://eth-mainnet.alchemyapi.io/jsonrpc/-vPGIFwUyjlMRF9beTLXiGQUK6Nf3k8z';

/* JS API: https://Augurjs.Augur.io */
class AugurCard extends React.Component {
  constructor(props) {
    super(props);
    this.augur = new Augur();
    this.state = {};
  }

  componentDidMount = async () => {
    this.augur.connect({
      httpAddresses: [HTTP_ENDPOINT],
      wsAddresses: []
    });
    this.augur.api.Universe.getOrCacheMarketCreationCost({
      onSent: result => {
        console.log(`Augur conn send ${result}`);
      },
      onSuccess: result => {
        console.log(`Augur connected:${JSON.stringify(result)}`);
      },
      onFailed: result => {
        console.log(`Failure connecting to augur ${result}`);
      }
    });
  };

  render() {
    return (
      <Card title="Augur" description="WIP">
        <Text size="20px" color={Colors.textPrimary}>
          TBD
        </Text>
      </Card>
    );
  }
}

AugurCard.defaultProps = {
  selectedAddress: '0x0'
};
AugurCard.propTypes = {
  selectedAddress: PropTypes.string
};

export default AugurCard;
