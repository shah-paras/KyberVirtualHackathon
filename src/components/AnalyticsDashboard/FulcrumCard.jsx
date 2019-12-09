import React from 'react';
import { Asset, Card, Modal, Text } from '@mydefi/ui';
import PropTypes from 'prop-types';
import { BZxJS } from '@bzxnetwork/bzx.js';
import Colors from './Colors';

const ICON = 'https://fulcrum.trade/static/media/fulcrum_logo.5cbbdf7b.svg';

function TokenList(tokens) {
  if (tokens && tokens.tokens) {
    const tkns = tokens.tokens;
    const items = tkns.map(token => (
      <div key={token.address}>
        <Text size="20px" color={Colors.textSecondary}>
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
    this.state = {
      showModal: false
    };
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

  toggleModal = () => {
    const isModal = this.state.showModal;
    this.setState({
      showModal: !isModal
    });
  };

  render() {
    return (
      <Card title="Fulcrum" description="Lending and Trading" onClick={this.toggleModal}>
        <Asset icon={ICON} size="30px" symbol="" />
        <Modal
          title="Fulcrum Assets"
          visible={this.state.showModal}
          onClick={this.toggleModal}
          width="800px"
        >
          <TokenList tokens={this.state.tokens} />
        </Modal>
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
