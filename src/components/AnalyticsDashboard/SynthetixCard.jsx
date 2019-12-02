import React from 'react';
import { SynthetixJs } from 'synthetix-js';
import { Card, Text, Colors } from '@mydefi/ui';
import PropTypes from 'prop-types';

/* JS API: https://synthetixjs.synthetix.io */
class SynthetixCard extends React.Component {
  constructor(props) {
    super(props);
    const metaMaskSigner = new SynthetixJs.signers.Metamask();
    this.synthetix = new SynthetixJs({ signer: metaMaskSigner });

    this.state = {
      totalSUSDSupply: 'N/A',
      snxTotalSupply: 'N/A'
    };
  }

  componentDidMount = async () => {
    const totalSUSD = await this.synthetix.sUSD.totalSupply();
    const totalSUSDSupply = this.synthetix.utils.formatEther(totalSUSD);
    const totalSupply = await this.synthetix.Synthetix.totalSupply();
    const snxTotalSupply = this.synthetix.utils.formatEther(totalSupply);
    this.setState({
      totalSUSDSupply,
      snxTotalSupply
    });
  };

  render() {
    return (
      <Card title="Synthetix" description={this.props.selectedAddress}>
        <Text size="20px" color={Colors.textPrimary}>
          SUSD Total Supply: {this.state.totalSUSDSupply}
        </Text>
        <br />
        <Text size="20px" color={Colors.textPrimary}>
          SNX Total Supply: {this.state.snxTotalSupply}
        </Text>
      </Card>
    );
  }
}

SynthetixCard.defaultProps = {
  selectedAddress: '0x0'
};

SynthetixCard.propTypes = {
  selectedAddress: PropTypes.string
};

export default SynthetixCard;
