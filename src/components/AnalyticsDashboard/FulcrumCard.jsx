import React from 'react';
import { Card, Text, Colors } from '@mydefi/ui';
import PropTypes from 'prop-types';
import { BZxJS } from '@bzxnetwork/bzx.js';

function TokenList(tokens) {
//   if (tokens) {
//     return (
//       <div key={tokens.token.address}>
//         <Text size="20px" color={Colors.textPrimary}>
//           Token Address: {tokens.token.address}
//         </Text>
//         <br />
//         <Text size="20px" color={Colors.textSecondary}>
//           Exchange: {tokens.exchange.address} <br />
//           ETH Reserve: {tokens.ethReserve.amount} <br />
//           Token Reserve: {tokens.tokenReserve.amount} <br />
//         </Text>
//       </div>
//     );
//   }
  return <div>No tokens available</div>;
}

class FulcrumCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    const networkId = this.props.web3.eth.net.getId();
    const bzx = new BZxJS(this.props.web3, { networkId });
    const tokens = await bzx.getTokenList();
    console.log(`Got bzx token list: ${JSON.stringify(tokens)}`);
    this.setState({
      networkId,
      bzx,
      tokens
    });
  };

  render() {
    return (
      <Card title="Fulcrum" description={this.props.selectedAddress}>
        <TokenList tokens={this.state.tokens} />
      </Card>
    );
  }
}

FulcrumCard.propTypes = {
  selectedAddress: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  web3: PropTypes.object.isRequired
};

export default FulcrumCard;
