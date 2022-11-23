import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getMachines } from '../redux/machines/machinesSlice';
import usa from '../img/usa_map.png';
import pinballIcon from '../img/pinball_icon.png';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMachines());
  }, [dispatch]);

  const totalMachines = useSelector((state) => state.totalMachines);
  const top = useSelector((state) => state.topCities);

  return (
    <div className="home-wrapper">
      <Row xs="2" style={{ height: '25vh', padding: '1em', backgroundColor: 'blue' }}>
        <Col style={{
          backgroundImage: `url(${usa})`, backgroundColor: 'blue', backgroundBlendMode: 'multiply', backgroundSize: '20vh', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
        }}
        />
        <Col>
          <h2>USA</h2>
          <p>
            Machine count:
            {' '}
            {totalMachines}
          </p>
        </Col>
      </Row>
      <Container className="border border-primary">
        <p>Top Cities</p>
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
              <Link to={`/${region.city}`}>
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
