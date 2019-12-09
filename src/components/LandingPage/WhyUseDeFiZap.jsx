import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SaveTime from '../../assets/save-time.svg';
import SaveGas from '../../assets/save-gas.svg';
import NonCustodial from '../../assets/non-custodial.svg';

const WhyUseDeFiZap = () => (
  <Container>
    <Row className="justify-content-center pt-5 pb-0">
      <h2>Why Use DeFiZap?</h2>
    </Row>
    <Row className="justify-content-center text-center">
      <Col sm md lg>
        <img src={SaveTime} width="94px" alt="Save Time" />
        <h5>Save Time {'&'} Gas</h5>
        <p>
          DeFiZap is a system of smart contracts - Zaps - that deploys capital
          across multiple DeFi protocols in one transaction, saving users’ time
          and gas fees.
        </p>
      </Col>
      <Col sm md lg>
        <img src={SaveGas} width="120px" alt="Save Time" />
        <h5>Easy Access</h5>
        <p>
          DeFiZap doesn’t spread your money into 'top 10 on coinmarketcap' -
          Zaps infuse capital into DeFi protocols built on top of Ethereum,
          furthering user adoption.
          <br />
          <a
            href="https://defitutorials.substack.com/p/get-instant-exposure-across-multiple"
            rel="noopener noreferrer"
            target="_blank"
          >
            View our case study here.
          </a>
        </p>
      </Col>
      <Col sm md lg>
        <img src={NonCustodial} width="90px" alt="Save Time" />
        <h5>Non Custodial</h5>
        <p>
          When you use DeFiZap, you mint {'&'} receive the same
          liquidity/position tracking tokens as when separately using Uniswap,
          Compound, bZx, Synthetix, etc. on your own.
          <br />
          <a
            href="https://github.com/DeFiStrategies/KyberVirtualHackathon/tree/master/SmartContracts"
            rel="noopener noreferrer"
            target="_blank"
          >
            Review smart contract code.
          </a>
        </p>
      </Col>
    </Row>
  </Container>
);

export default WhyUseDeFiZap;
