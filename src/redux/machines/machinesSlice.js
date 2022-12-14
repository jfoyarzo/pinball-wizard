/* eslint-disable camelcase */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

export const getMachines = createAsyncThunk(
  'totalMachines/getMachines',
  async () => {
    const response = await fetch('https://pinballmap.com/api/v1/regions/location_and_machine_counts.json');
    const resJson = await response.json();
    return resJson;
  },
);

const machinesSlice = createSlice({
  name: 'totalMachines',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMachines.fulfilled, (state, action) => {
      const { num_lmxes } = action.payload;
      const machineCount = num_lmxes.toLocaleString();
      return machineCount;
    });
  },
});

export default machinesSlice.reducer;
