import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Station } from '@/api/Types'

const stationsSlice = createSlice({
  name: 'stations',
  initialState: [] as Station[],
  reducers: {
    setStations: (state, action: PayloadAction<Station[]>) => {
      return action.payload;
    },
    updateFavorite: (state, action: PayloadAction<{ id: string, favorite: boolean }>) => {
      return state.map(station => 
        station.id === action.payload.id ? { ...station, favorite: action.payload.favorite } : station
      );
    }
  },
 });

export const { setStations, updateFavorite } = stationsSlice.actions;

export default stationsSlice.reducer;