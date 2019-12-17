import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import Donut from '../PercentageDoughnut';
import NavigationBar from '../NavigationBar';

import '../../App.css';
import styles from './ZapList.module.css';

import {
  INDIVIDUAL_ZAP_PAGE,
  GENERATE_ZAP
} from '../../constants/googleAnalytics';
import { registerEvent } from '../../api/googleAnalytics';
import BuyButtonContainer from '../BuyButton/BuyButtonContainer';
import GiftButtonContainer from '../GiftButton/GiftButtonContainer';


const footerButtons = () => (
  <div className="row justify-content-center my-1">
    <div className="col-12 col-md-12 col-lg-12 text-center">
      <Button variant="outline-info" size="lg" href="/survey" type="link" block>
        Not sure which to pick? Try Zap Generator
      </Button>
      <hr />
      <Button
        variant="outline-info"
        target="_blank"
        size="lg"
        href="https://defizap.typeform.com/to/UZSZg5"
        type="link"
        block
        onClick={() =>
          registerEvent({
            category: GENERATE_ZAP,
            action: INDIVIDUAL_ZAP_PAGE
          })}
      >
        Don&apos;t see your Zap? Submit a request and we will create one!
      </Button>
    </div>
  </div>
);

const Zap = props => {
  return (
    <div key={props.name} className="m-4 p-4 bg-white flex-column">
      {/* <Row className={styles.zapName}>
        <h3>{props.name}</h3>
      </Row> */}
      <Row>
        <Col xs={12} md={4} className="align-text-center">
          <Donut data={props} />
          <div className="mt-2">
            <BuyButtonContainer
              name={props.name}
              isOrderable={props.isOrderable}
              hasReturnsChart={props.hasReturnsChart}
              ensAddress={props.ensAddress}
              gasLimitRequirement={props.gasLimitRequirement}
              block
            />
          </div>
          {props.isOrderable ? (
            <div className="mt-md-2 mt-2 pb-md-0 pb-3 "> 
              <Button
                href={`/zaps/${props.id}`}
                size="auto"
                variant="outline-dark"
                value="Learn More"
                block
              >
                Learn More
              </Button>
            </div>
          ) : null}
        </Col>
        <Col xs={12} md={3}>
          {props.isOrderable ? null : (
            <>
              <h4>This Zap is still under development.</h4>
              <h4>
                In the meantime, check out our available Zaps{' '}
                <a href="/zaps">here</a>.
              </h4>
            </>
          )}
          <Row className="text-center text-md-left" >
            <Col xs={12} md={10} className="text-sm-center text-md-left">
              {props.oneClickAccessTo ? (
                <span>
                  <h6>1-click access to:</h6>
                  <h6>
                    {props.oneClickAccessTo.map((access, index) => (
                      <Badge
                        key={access.text}
                        style={{ backgroundColor: access.color }}
                        variant="primary"
                        className={index === 0 ? 'beforePill' : 'afterPill'}
                      >
                        {access.text}
                      </Badge>
                    ))}
                  </h6>
                </span>
              ) : (
                  ''
                )}
              {props.platformsUsed ? (
                <span>
                  <h6>Platforms used:</h6>
                  <h6>
                    {props.platformsUsed.map((platform, index) => (
                      <a
                        href={platform.url}
                        key={platform.value}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Badge
                          style={{ backgroundColor: platform.color }}
                          variant="success"
                          className={index === 0 ? 'beforePill' : 'afterPill'}
                        >
                          {platform.value}
                        </Badge>
                      </a>
                    ))}
                  </h6>
                </span>
              ) : (
                  ''
                )}
              {props.ensAddress ? (
                <span>
                  <h6>
                    View contract on Etherscan:
                </h6>
                  <h6>
                    <a
                      href={`https://etherscan.io/address/${props.ensAddress}`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Badge
                        variant="info"
                      >
                        {props.ensAddress}
                      </Badge>
                    </a>
                  </h6>
                </span>
              ) : null}
              {props.metamaskInteractionsSaved ? (
                <span>
                  <h6 >
                    Wallet interactions saved: <br/>

                <b style={{ fontSize: '1.4em', }}>
                      {props.metamaskInteractionsSaved.map(
                        interactions => interactions.saved
                      )}
                    </b>
                  </h6>

                </span>
              ) : null}
            </Col>
            
          </Row>

          {/* {props.whatThisMeans ? (
            <span>
              <h5>What this means:</h5>
              <ul>
                {props.whatThisMeans.text.map(item => (
                  <li key={item} className="text-left">
                    {item}
                  </li>
                ))}
              </ul>
            </span>
          ) : null} */}
        </Col>
        <Col xs={0} md={3}>
        </Col>
        <Col xs={12} md={2}>
            <div className="mt-2">
              <GiftButtonContainer
                name={props.name}
                isOrderable={props.isOrderable}
                hasReturnsChart={props.hasReturnsChart}
                ensAddress={props.ensAddress}
                gasLimitRequirement={props.gasLimitRequirement}
                block
              />
              </div>    
            </Col>
      </Row>
      {/* <hr />
      <Row> */}
      {/* <Col xs={12} md={6}>
          <div className="mt-2">
            <BuyButtonContainer
              name={props.name}
              isOrderable={props.isOrderable}
              block
            />
          </div>
        </Col>
        <Col xs={12} md={6}>
          {props.isOrderable ? (
            <div className="mt-2">
              <Button
                href={`/zaps/${props.id}`}
                size="auto"
                variant="outline-dark"
                value="Learn More"
                block
              >
                Learn More
              </Button>
            </div>
          ) : null}
        </Col> */}
      {/* </Row> */}
    </div>
  );
};

const ZapListView = props => {
  const { data } = props;
  return (
    <Container>
      <NavigationBar />
      {data.filter(zap => zap.isOrderable).map(zap => Zap(zap))}
      <hr />
      {footerButtons()}
      <br />
      <br />
    </Container>
  );
};

export default ZapListView;

export { Zap };
