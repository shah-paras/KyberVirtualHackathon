import React, { PureComponent } from 'react';
import autobind from 'react-autobind';
import { Main, Table, TableRow } from '@mydefi/ui';
import WalletCard from './WalletCard';
import MakerCard from './MakerCard';

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
          <Table>
            <TableRow data={[
              <WalletCard />
            ]}>
            </TableRow>
            <TableRow data={[
              <MakerCard />
            ]}>
            </TableRow>
          </Table>
        </Main>
    );
  }
};

export default AnalyticsContainer;