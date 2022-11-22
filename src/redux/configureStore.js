import { configureStore } from '@reduxjs/toolkit';
import machinesReducer from './machines/machinesSlice';

const reducer = {
  totalMachines: machinesReducer,
};

const store = configureStore({ reducer });

export default store;
