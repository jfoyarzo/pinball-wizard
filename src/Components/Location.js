/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { BsArrowRightCircle } from 'react-icons/bs';

const Location = (props) => {
  const { name, machineCount } = props;
  return (
    <Container className="location">
      <Row style={{ height: '5em' }} className="align-items-center">
        <Col xs="7">
          <span className="fw-bold">{name}</span>
        </Col>
        <IconContext.Provider value={{ size: '1.3em' }}>
          <Col className="text-end">
            <span className>
              {machineCount.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
              })}
              {' '}
              machines
            </span>
            <BsArrowRightCircle className="ms-2" />
          </Col>
        </IconContext.Provider>
      </Row>
    </Container>
  );
};

export default Location;
