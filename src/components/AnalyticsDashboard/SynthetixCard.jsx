import React from 'react';
import { SynthetixJs } from 'synthetix-js';
import { Asset, Card, Modal, Table, TableRow, Text } from '@mydefi/ui';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Colors } from './Colors';

const ICON =
  'data:image/png;base64,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';

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
      showModal: false,
      totalSUSDSupply: 'N/A',
      snxTotalSupply: 'N/A',
      sUSDBalance: 'N/A',
      snxCollateral: 'N/A',
      snxTransferable: 'N/A',
      sUSDDebt: 'N/A',
      sETHBalance: 'N/A',
      sBTCBalance: 'N/A',
      totalBalance: '0.0'
    };
  }

  toggleModal = () => {
    const isModal = this.state.showModal;
    this.setState({
      showModal: !isModal
    });
  };

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
    if (
      this.props.selectedAddress &&
      !_.isEqual(this.props.selectedAddress, prevProps.selectedAddress)
    ) {
      const sUSDBalance = await this.synthetix.sUSD.balanceOf(
        this.props.selectedAddress
      );
      const sETHBalance = await this.synthetix.sETH.balanceOf(
        this.props.selectedAddress
      );
      const sBTCBalance = await this.synthetix.sBTC.balanceOf(
        this.props.selectedAddress
      );
      const snxCollateral = await this.synthetix.Synthetix.collateral(
        this.props.selectedAddress
      );
      const snxTransferable = await this.synthetix.Synthetix.transferableSynthetix(
        this.props.selectedAddress
      );
      const sUSDKey = this.synthetix.sUSD.currencyKey();
      const sUSDDebt = await this.synthetix.Synthetix.debtBalanceOf(
        this.props.selectedAddress,
        sUSDKey
      );

      const totalBalance = sUSDBalance.add(sETHBalance).add(sBTCBalance);

      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        sUSDBalance: this.synthetix.utils.formatEther(sUSDBalance),
        snxCollateral: this.synthetix.utils.formatEther(snxCollateral),
        snxTransferable: this.synthetix.utils.formatEther(snxTransferable),
        sUSDDebt: this.synthetix.utils.formatEther(sUSDDebt),
        sETHBalance: this.synthetix.utils.formatEther(sETHBalance),
        sBTCBalance: this.synthetix.utils.formatEther(sBTCBalance),
        totalBalance: this.synthetix.utils.formatEther(totalBalance)
      });
    }
  };

  render() {
    return (
      <Card
        title="Synthetix"
        description={this.state.totalBalance}
        onClick={this.toggleModal}
      >
        <Asset icon={ICON} size="30px" symbol="SNX" />
        <Modal
          title="Synthetix Assets"
          visible={this.state.showModal}
          onClick={this.toggleModal}
          width="800px"
        >
          <Text size="15px" color={Colors.textSecondary}>
            SUSD Total Supply&nbsp;
          </Text>
          <Text size="13px" color={Colors.textTertiary}>
            {this.state.totalSUSDSupply}
          </Text>
          <br />
          <Text size="15px" color={Colors.textSecondary}>
            SNX Total Supply&nbsp;
          </Text>
          <Text size="13px" color={Colors.textTertiary}>
            {this.state.snxTotalSupply}
          </Text>
          <hr />
          <Table>
            <TableRow head data={['Collateral', 'Transferable', 'sUSD Debt']} />
            <TableRow
              data={[
                this.state.snxCollateral,
                this.state.snxTransferable,
                this.state.sUSDDebt
              ]}
            />
          </Table>
          <Text size="20px" color={Colors.textPrimary}>
            SYNTH BALANCES
          </Text>
          <Table>
            <TableRow head data={['sUSD', 'sETH', 'sBTC']} />
            <TableRow
              data={[
                this.state.sUSDBalance,
                this.state.sETHBalance,
                this.state.sBTCBalance
              ]}
            />
          </Table>
        </Modal>
      </Card>
    );
  }
}

SynthetixCard.propTypes = {
  selectedAddress: PropTypes.string.isRequired
};

export default SynthetixCard;
