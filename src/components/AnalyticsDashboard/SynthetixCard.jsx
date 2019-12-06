import React from 'react';
import { SynthetixJs } from 'synthetix-js';
import { Card, Text, Colors } from '@mydefi/ui';
import PropTypes from 'prop-types';
import _ from 'lodash';

/* JS API: https://synthetixjs.synthetix.io */
class SynthetixCard extends React.Component {
  constructor(props) {
    super(props);
    // available features this.synthetix: i.e. const keys = Object.keys(this.synthetix);
    // ["signers","contractSettings","network","Depot","EscrowChecker","ExchangeRates","FeePool",
    // "Synth","Synthetix","SynthetixEscrow","SynthetixState","RewardEscrow","XDR","sEUR","sJPY",
    // "sUSD","sAUD","sGBP","sCHF","sXAU","sXAG","sBTC","sETH","sBNB","sMKR","sTRX","sXTZ","sXRP",
    // "sLTC","sLINK","sCEX","sDEFI","iBTC","iETH","iBNB","iMKR","iTRX","iXTZ","iXRP","iLINK","iLTC",
    // "iCEX","iDEFI","util","utils","ethers","SUPPORTED_NETWORKS"]
    const metaMaskSigner = new SynthetixJs.signers.Metamask();
    this.synthetix = new SynthetixJs({ signer: metaMaskSigner });

    this.state = {
      totalSUSDSupply: 'N/A',
      snxTotalSupply: 'N/A',
      sUSDBalance: 'N/A',
      snxCollateral: 'N/A',
      snxTransferable: 'N/A',
      sUSDDebt: 'N/A'
    };
  }

  componentDidMount = async () => {
    try {
      const totalSUSD = await this.synthetix.sUSD.totalSupply();
      const totalSUSDSupply = this.synthetix.utils.formatEther(totalSUSD);
      const totalSupply = await this.synthetix.Synthetix.totalSupply();
      const snxTotalSupply = this.synthetix.utils.formatEther(totalSupply);
      this.setState({
        totalSUSDSupply,
        snxTotalSupply
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidUpdate = async prevProps => {
    if (!_.isEqual(this.props.selectedAddress, prevProps.selectedAddress)) {
      const sUSDBalance = await this.synthetix.sUSD.balanceOf(this.props.selectedAddress);
      const snxCollateral = await this.synthetix.Synthetix.collateral(this.props.selectedAddress);
      const snxTransferable = await this.synthetix.Synthetix.transferableSynthetix(this.props.selectedAddress);
      const sUSDKey = this.synthetix.sUSD.currencyKey();
      const sUSDDebt = await this.synthetix.Synthetix.debtBalanceOf(this.props.selectedAddress, sUSDKey);

      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        sUSDBalance: this.synthetix.utils.formatEther(sUSDBalance),
        snxCollateral: this.synthetix.utils.formatEther(snxCollateral),
        snxTransferable: this.synthetix.utils.formatEther(snxTransferable),
        sUSDDebt: this.synthetix.utils.formatEther(sUSDDebt)
      });
    }
  };

  render() {
    return (
      <Card title="Synthetix" description={this.props.selectedAddress}>
        <Text size="20px" color={Colors.textPrimary}>
          SUSD Balance: {this.state.sUSDBalance}
        </Text>
        <br />
        <Text size="15px" color={Colors.textSecondary}>
          SNX Collateral: {this.state.snxCollateral}
        </Text>
        <br />
        <Text size="15px" color={Colors.textSecondary}>
          SNX Transferable: {this.state.snxTransferable}
        </Text>
        <br />
        <Text size="15px" color={Colors.textSecondary}>
          SUSD Debt: {this.state.sUSDDebt}
        </Text>
        <br />
        <Text size="15px" color={Colors.textSecondary}>
          SUSD Total Supply: {this.state.totalSUSDSupply}
        </Text>
        <br />
        <Text size="15px" color={Colors.textSecondary}>
          SNX Total Supply: {this.state.snxTotalSupply}
        </Text>
      </Card>
    );
  }
}

SynthetixCard.propTypes = {
  selectedAddress: PropTypes.string.isRequired
};

export default SynthetixCard;
