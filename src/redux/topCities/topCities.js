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

export const getDetails = createAsyncThunk(
  'topCities/getDetails',
  async (city) => {
    const response = await fetch(`https://pinballmap.com/api/v1/locations.json?by_city_id=${city}`);
    const resJson = await response.json();
    return resJson;
  },
);

const topCitiesSlice = createSlice({
  name: 'topCities',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCities.fulfilled, (state, action) => {
        const topList = action.payload;
        return topList.map((region) => ({
          city: region.city,
          machineCount: region.machine_count,
        }));
      })
      .addCase(getDetails.fulfilled, (state, action) => {
        const { locations } = action.payload;
        const localDetails = locations.map((location) => ({
          id: location.id,
          name: location.name,
          address: location.street,
          city: location.city,
          machineCount: location.num_machines,
        }));
        const { city } = localDetails[0];
        const sortedDetails = localDetails.sort((a, b) => b.machineCount - a.machineCount);
        return state.map((element) => {
          if (element.city === city) {
            return { ...element, locations: sortedDetails };
          }
          return element;
        });
      });
  },
});

export default topCitiesSlice.reducer;
