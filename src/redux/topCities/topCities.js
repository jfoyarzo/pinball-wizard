import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

export const getCities = createAsyncThunk(
  'topCities/getCities',
  async () => {
    const response = await fetch('https://pinballmap.com/api/v1/locations/top_cities_by_machine.json');
    const resJson = await response.json();
    return resJson;
  },
);

const topCitiesSlice = createSlice({
  name: 'topCities',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCities.fulfilled, (state, action) => {
      const topList = action.payload;
      return topList.map((region) => ({
        city: region.city,
        machineCount: region.machine_count,
      }));
    });
  },
});

export default topCitiesSlice.reducer;
