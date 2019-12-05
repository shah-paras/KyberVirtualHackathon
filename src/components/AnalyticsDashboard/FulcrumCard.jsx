import React from 'react';
import { Card, Text, Colors } from '@mydefi/ui';
import PropTypes from 'prop-types';
import { BZxJS } from '@bzxnetwork/bzx.js';

function TokenList(tokens) {
  if (tokens && tokens.tokens) {
    const tkns = tokens.tokens;
    const items = tkns.map(token => (
      <div key={token.address}>
        <Text size="20px" color={Colors.textPrimary}>
          {token.name} ({token.symbol}) at {token.address}
        </Text>
      </div>
    ));
    return <div>{items}</div>;
  }
  return <div>No tokens available</div>;
}

class FulcrumCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    const networkId = await this.props.web3.eth.net.getId();
    const bzx = new BZxJS(this.props.web3, { networkId });
    const tokens = await bzx.getTokenList();
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
