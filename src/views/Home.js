/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getMachines } from '../redux/machines/machinesSlice';
import usa from '../img/usa_map.png';
import pinballIcon from '../img/pinball_icon.png';

let firstRender = true;

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (firstRender) {
      dispatch(getMachines());
      firstRender = false;
    }
  }, []);

  const totalMachines = useSelector((state) => state.totalMachines);
  const top = useSelector((state) => state.topCities);

  return (
    <div className="home-wrapper">
      <Row style={{ height: '20vh', padding: '1em', backgroundColor: '#5889e4' }}>
        <Col
          xs="7"
          style={{
            backgroundImage: `url(${usa})`, backgroundColor: '#5889e4', backgroundBlendMode: 'multiply', backgroundSize: '25vh', backgroundRepeat: 'no-repeat', backgroundPosition: '40px center',
          }}
        />
        <Col className="d-flex flex-column justify-content-center ps-4">
          <h1 className="mb-0">USA</h1>
          <p>
            {totalMachines}
            {' '}
            Machines
          </p>
        </Col>
      </Row>
      <Container style={{ backgroundColor: '#35548b' }}>
        <p className="fw-bold" style={{ fontSize: '1em' }}>MACHINES BY CITY</p>
      </Container>
      <div className="top-container">
        <Row>
          {top.map((region) => (
            <Col
              xs="6"
              key={region.city}
              className="p-4 border"
              style={{
                backgroundImage: `url(${pinballIcon})`, backgroundSize: '13vh', backgroundRepeat: 'no-repeat', backgroundPosition: 'top', backgroundColor: 'blue', backgroundBlendMode: 'multiply',
              }}
            >
              <Link to={`/${region.city.split(' ').join('')}`}>
                <div className="d-flex flex-column justify-content-end" style={{ height: '15vh' }}>
                  <h3>{region.city}</h3>
                  <p>
                    Machine Count:
                    {' '}
                    {region.machineCount}
                  </p>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
