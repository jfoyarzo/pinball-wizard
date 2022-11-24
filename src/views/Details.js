/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { getDetails } from '../redux/topCities/topCities';
import Location from '../Components/Location';
import details from '../img/details_img.png';

const Details = (props) => {
  const { city, machines } = props;
  const dispatch = useDispatch();
  const top = useSelector((state) => state.topCities);
  const currentCity = top.find((element) => element.city === city);
  const { locations } = currentCity;

  useEffect(() => {
    if (!locations) {
      dispatch(getDetails(city));
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
      {locations && locations.map((location) => (
        <Location key={location.id} name={location.name} machineCount={location.machineCount} />
      ))}
      <Container />
    </div>
  );
};

export default Details;
