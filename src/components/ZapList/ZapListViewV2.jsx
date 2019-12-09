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
  console.log(props);
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
              block
            />
          </div>
          {/* </Col>
        <Col> */}
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
        </Col>
        <Col xs={12} md={8}>
          {props.isOrderable ? null : (
            <>
              <h4>This Zap is still under development.</h4>
              <h4>
                In the meantime, check out our available Zaps{' '}
                <a href="/zaps">here</a>.
              </h4>
            </>
          )}
          {props.oneClickAccessTo ? (
            <span>
              <h6>1-click access to:</h6>
              <h6>
                {props.oneClickAccessTo.map((access, index) => (
                  <Badge
                    key={access.text}
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
          {props.metamaskInteractionsSaved ? (
            <span>
              <h6>
                <b>
                  {props.metamaskInteractionsSaved.map(
                    interactions => interactions.saved
                  )}
                </b>{' '}
                metamask interactions abstracted.
              </h6>
            </span>
          ) : null}
          {props.whatThisMeans ? (
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
          ) : null}
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
