import React, { PureComponent } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import autobind from 'react-autobind';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Accordion from 'react-bootstrap/Accordion';

import PercentageCircle from '../PercentageCircle';
import LenderBuyButton from '../BuyButton/LenderBuyButton';
import styles from './Zaps.module.css';
import '../../App.css';

class ZapFullView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    autobind(this);
  }

  customToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionToggle(eventKey);
    return (
      <Button
        className="m-2"
        onClick={decoratedOnClick}
        variant="link"
        size="lg"
      >
        {children}
      </Button>
    );
  };

  render() {
    const { name, components, isOrderable, description } = this.props;

    return (
      <div key={name} className={styles.cardContainer}>
        <section className="pb-2 pt-md-12">
          <div className="container">
            <div className="card shadow" style={{ backgroundColor: '#ffffff' }}>
              <div className="card-body">
                <Row className="flex-column">
                  <Row className="justify-content-center">
                    <h1 className="text-center my-3 hedger">{name}</h1>
                  </Row>
                  <Row className="justify-content-center">
                    {components.map(item => (
                      <div key={item.name}>
                        <PercentageCircle
                          percentage={item.percent}
                          color="#5540bf"
                        />
                        <h6 className="text-center mt-3">{item.name}</h6>
                      </div>
                    ))}
                  </Row>
                </Row>
                {isOrderable ? (
                  <Accordion>
                    <Row className={styles.buttonSpacing}>
                      <Button
                        href={description.tutorialLink}
                        variant="outline-primary"
                        target="_blank"
                        size="lg"
                        className="m-2"
                      >
                        View Tutorial
                      </Button>
                      <LenderBuyButton name={name} isOrderable={isOrderable} />
                      <this.customToggle eventKey="0">
                        More info
                      </this.customToggle>
                    </Row>
                    <Row>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <h3>{description.textQuestion}</h3>
                          {description.textAnswer.map(answer => {
                            return <p key={answer}>{answer}</p>;
                          })}
                          {description.textLink.map((linkData, i) => {
                            return (
                              <div key={linkData.hyperlink}>
                                <a
                                  href={linkData.hyperlink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {linkData.text}
                                </a>{' '}
                                {i === description.textLink.length - 1
                                  ? ''
                                  : 'and'}{' '}
                              </div>
                            );
                          })}
                        </Card.Body>
                      </Accordion.Collapse>
                    </Row>
                  </Accordion>
                ) : (
                  <div className="row justify-content-center my-4">
                    <LenderBuyButton name={name} isOrderable={isOrderable} />
                    <div className="col-12 col-md-12 col-lg-12 text-center">
                      <h4 style={{ color: 'black' }}>
                        This Zap is still under development.
                      </h4>
                      <h4 style={{ color: 'black' }}>
                        {' '}
                        In the meantime, check out our available Zaps{' '}
                        <a href="/availablezaps">here</a>.
                      </h4>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ZapFullView;
