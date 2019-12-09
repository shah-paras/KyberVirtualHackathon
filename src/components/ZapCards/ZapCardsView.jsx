import React from 'react';
import isEmpty from 'lodash/isEmpty';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// import PercentageCircle from '../PercentageCircle';
import '../../App.css';
import Donut from '../PercentageDoughnut';

const ZapCardsView = props => {
  const {
    basketData: { name, components, id }
  } = props;

  if (!isEmpty(props.basketData)) {
    return (
      <Card className="text-center justify-content-center">
        <Card.Body>
          {/* <div
            className="font-30 lender mt-0 mb-4 pb-4"
            style={{ height: '50px' }}
          >
            <h3>{name}</h3>
          </div> */}
          <div className="mb-2 row justify-content-center flex flex-wrap">
            <Donut data={props.basketData} />
          </div>
          <div className="text-center justify-content-center">
            <Button href={`/zaps/${id}`} size="lg" variant="primary">
              More Info
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
  return null;
};

export default ZapCardsView;
