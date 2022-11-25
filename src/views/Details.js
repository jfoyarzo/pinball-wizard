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
      <Row xs="2" style={{ height: '25vh', padding: '1em', backgroundColor: '#5889e4' }}>
        <Col style={{
          backgroundImage: `url(${details})`, backgroundColor: '#5889e4', backgroundBlendMode: 'multiply', backgroundSize: '17vh', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
        }}
        />
        <Col className="d-flex flex-column justify-content-center align-items-end">
          <h2 className="fw-bold mb-0">{city.toUpperCase()}</h2>
          <p>
            {machines}
            {' '}
            machines
          </p>
        </Col>
      </Row>
      <Container className="py-1">
        <p className="fw-bold">CITY LOCATION BREAKDOWN</p>
      </Container>
      {locations && locations.map((location) => (
        <Location key={location.id} name={location.name} machineCount={location.machineCount} />
      ))}
      <Container />
    </div>
  );
};

export default Details;
