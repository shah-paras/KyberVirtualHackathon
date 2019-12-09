import React, { PureComponent } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import autobind from 'react-autobind';

// import ReturnSparkLine from '../ReturnSparkline';
// import PercentageCircle from '../PercentageCircle';
import BuyButtonContainer from '../BuyButton/BuyButtonContainer';
import Donut from '../PercentageDoughnut';
import '../../App.css';

class ZapFullView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    autobind(this);
  }

  render() {
    const {
      name,
      components,
      isOrderable,
      description,
      output,
      hasReturnsChart,
      oneClickAccessTo,
      platformsUsed,
      metamaskInteractionsSaved
    } = this.props;

    return (
      <Card>
        <Card.Body className="text-center">
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={4}>
              <Donut data={this.props} />
            </Col>
          </Row>
          {/* <Card.Title>
            <div className="h1 bold">{name}</div>
          </Card.Title> */}
          <br />
          <BuyButtonContainer name={name} size="lg" isOrderable={isOrderable} />
          <Row className="justify-content-center align-text-center">
            <Col xs={12} md={6} className="justify-content-center text-center">
              {oneClickAccessTo ? (
                <span>
                  <h5 className="zapFullViewHeader"> 1-click access to:</h5>
                  <h5>
                    {oneClickAccessTo.map((access, index) => (
                      <Badge
                        key={access.text}
                        variant="primary"
                        className={index === 0 ? 'beforePill' : 'afterPill'}
                      >
                        {access.text}
                      </Badge>
                    ))}
                  </h5>
                </span>
              ) : null}
              {this.props.whatThisMeans ? (
                <span>
                  <h5>What this means:</h5>
                  <ul>
                    {this.props.whatThisMeans.text.map(item => (
                      <li key={item} className="text-left">
                        {item}
                      </li>
                    ))}
                  </ul>
                </span>
              ) : null}
              {platformsUsed ? (
                <span>
                  <h5>Platforms used: </h5>
                  <h5>
                    {platformsUsed.map((platform, index) => (
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
                  </h5>
                </span>
              ) : null}
              {metamaskInteractionsSaved ? (
                <span>
                  <h5 className="zapFullViewHeader">
                    Metamask interactions abstracted
                  </h5>
                  <h1>
                    {metamaskInteractionsSaved.map(
                      interactions => interactions.saved
                    )}
                  </h1>
                </span>
              ) : null}
              <div className="mt-2">
                <Button
                  href={description.tutorialLink}
                  variant="outline-primary"
                  target="_blank"
                  size="lg"
                  className="m-2"
                >
                  View Tutorial
                </Button>
                {this.props.hasReturnsChart ? (
                  <Button
                    href={`https://pools.fyi/#/returns/${this.props.tokenAddress}`}
                    variant="outline-primary"
                    target="_blank"
                    size="lg"
                    className="m-2"
                  >
                    Pools.fyi
                  </Button>
                ) : null}
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default ZapFullView;
