import React, { PureComponent } from 'react';
import autobind from 'react-autobind';
import { Main } from '@mydefi/ui';
import WalletCard from './WalletCard';

class AnalyticsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
    autobind(this);
  }

  componentDidMount = async () => {
  }

  render() {
    return (
        <Main>
            <WalletCard />
        </Main>
    );
  }
};

export default AnalyticsContainer;