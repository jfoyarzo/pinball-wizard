import { configureStore } from '@reduxjs/toolkit';
import machinesReducer from './machines/machinesSlice';
import topCitiesReducer from './topCities/topCities';

const reducer = {
  totalMachines: machinesReducer,
  topCities: topCitiesReducer,
};

const store = configureStore({ reducer });

export default store;
