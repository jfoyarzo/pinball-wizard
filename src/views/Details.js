/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { getDetails } from '../redux/topCities/topCities';
import details from '../img/details_img.png';

const Details = (props) => {
  const { city, machines } = props;
  const dispatch = useDispatch();
  const top = useSelector((state) => state.topCities);

  useEffect(() => {
    const currentCity = top.find((element) => element.city === city);
    if (!currentCity.locations) {
      dispatch(getDetails(city));
      console.log(city)
    }
  }, [city]);

  return (
    <div className="details-wrapper">
      <Row xs="2" style={{ height: '25vh', padding: '1em', backgroundColor: 'blue' }}>
        <Col style={{
          backgroundImage: `url(${details})`, backgroundColor: 'blue', backgroundBlendMode: 'multiply', backgroundSize: '20vh', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
        }}
        />
        <Col>
          <h2>{city}</h2>
          <p>
            Machine count:
            {' '}
            {machines}
          </p>
        </Col>
      </Row>
      <Container className="border border-primary">
        <p>Top Locations</p>
      </Container>
    </div>
  );
};

export default Details;
