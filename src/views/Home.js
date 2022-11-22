import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { getMachines } from '../redux/machines/machinesSlice';
import usa from '../img/usa_map.png';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMachines());
  }, [dispatch]);

  const totalMachines = useSelector((state) => state.totalMachines);
  return (
    <div className="home-wrapper">
      <Row xs="2" style={{ height: '30vh', padding: '1em', backgroundColor: 'blue' }}>
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
    </div>
  );
};

export default Home;
