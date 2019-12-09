import React from 'react';
import { Card, Text, Colors } from '@mydefi/ui';
import numeral from 'numeral';
import Colors from './Colors';

import createMaker from '../../utils/dai';

const NUMERAL_FORMAT = '0,0.000';

class MakerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: 'Connecting...',
      balance: 0
    };
  }

  componentDidMount = async () => {
    const maker = await createMaker();
    await maker.authenticate();
    const dai = maker.service('token').getToken('DAI');
    const cdp = maker.service('cdp');
    const address = maker.currentAddress();
    const balance = await dai.balanceOf(address);
    const collateralizationRatio = await cdp.getSystemCollateralization();
    const targetPrice = await cdp.getTargetPrice();

    this.setState({
      address,
      balance,
      // eslint-disable-next-line react/no-unused-state
      cdp,
      collateralizationRatio,
      // eslint-disable-next-line react/no-unused-state
      dai,
      // eslint-disable-next-line react/no-unused-state
      maker,
      targetPrice
    });
  };

  render() {
    return (
      <Card title="MakerDAO" description={this.state.address}>
        <Text
          size="20px"
          color={Colors.textPrimary}
        >{`Collateral ${numeral(this.state.collateralizationRatio).format(NUMERAL_FORMAT)}`}</Text>
        <br />
        <Text
          size="20px"
          color={Colors.textPrimary}
        >{`Debt ${numeral(this.state.balance).format(NUMERAL_FORMAT)}`}</Text>
        <br />
        <Text
          size="20px"
          color={Colors.textPrimary}
        >{`USD Target Price: ${numeral(this.state.targetPrice).format(NUMERAL_FORMAT)}`}</Text>
      </Card>
    );
  }
}

export default MakerCard;
