/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { BsArrowRightCircle } from 'react-icons/bs';

const Location = (props) => {
  const { name, machineCount } = props;
  return (
    <Container className="location">
      <Row style={{ height: '11.5vh' }} className="align-items-center">
        <Col xs="7">
          <span className="fw-bold fs-5">{name}</span>
        </Col>
        <IconContext.Provider value={{ size: '1.3em' }}>
          <Col className="d-flex justify-content-end align-items-center">
            <span style={{ fontSize: '1.2em' }}>
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
