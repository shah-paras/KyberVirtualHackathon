import React from 'react';
import { Card, Text } from '@mydefi/ui';
import { Colors } from "@mydefi/ui"; 
import createMaker from '../../utils/dai';

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
            cdp,
            collateralizationRatio,
            dai,
            maker,
            targetPrice
        });
      }

      render() {
        return (
            <Card title="MakerDAO" 
                description={ this.state.address }>
                <Text size="20px"
                    color={Colors.textPrimary}
                    >{`Collateral ${this.state.collateralizationRatio}`}</Text>
                <br />
                <Text size="20px"
                    color={Colors.textPrimary}
                    >{`Debt ${this.state.balance}`}</Text>
                <br />
                <Text size="20px"
                    color={Colors.textPrimary}
                    >{`USD Target Price: ${this.state.targetPrice}`}</Text>
            </Card>
        );
      }
};

export default MakerCard;