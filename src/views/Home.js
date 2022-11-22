import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMachines } from '../redux/machines/machinesSlice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMachines());
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
