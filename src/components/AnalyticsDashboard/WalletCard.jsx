import React from 'react';
import { Card, Text } from '@mydefi/ui';
import autobind from 'react-autobind';
import web3 from '../../web3/web3';
import { Colors } from "@mydefi/ui"; 
import Web3 from 'web3';

class WalletCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            web3,
            selectedAddress: '0x0',
            currentBalance: '0'
        };
        autobind(this);
      }
    
      componentDidMount = async () => {
        const comp = this;
        if (typeof this.state.web3.givenProvider === 'undefined'
            || typeof this.state.web3.givenProvider.selectedAddress === 'undefined') {
            if (typeof window.ethereum !== 'undefined') {
                // connect via metamask...
                // @todo connect via other provider?
                window.ethereum.enable().then((accounts) => {
                    comp.setState( {
                        web3: new Web3(window.ethereum)
                    });
                }).catch( (error) => {
                    console.log("Failure connecting to provider: " + error);
                });
            }
        }
        
        console.log('selectedAddress:' + this.state.web3.givenProvider.selectedAddress);
        if (typeof this.state.web3.givenProvider !== 'undefined'
            // sometimes selectedAddress is set undefined...sometimes null... :|
            && typeof this.state.web3.givenProvider.selectedAddress !== 'undefined'
            && this.state.web3.givenProvider.selectedAddress !== null) {
            let balance = await this.state.web3.eth.getBalance(web3.givenProvider.selectedAddress);
            this.setState({
                selectedAddress: web3.givenProvider.selectedAddress,
                currentBalance: web3.utils.fromWei(balance, 'ether')
            });
        }
      }
    
      render() {
        return (
            <Card title="Your wallet" 
                description={ this.state.selectedAddress }>
                <Text size="20px"
                    color={Colors.textPrimary}
                    >{ this.state.currentBalance } Ether</Text>
            </Card>
        );
      }
};

export default WalletCard;