import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchFilters {
  Municipality: boolean;
  Location: boolean;
  Address: boolean;
  PostalCode: boolean;
}; 

const initialState: SearchFilters = {
  Municipality: true,
  Location: true,
  Address: true,
  PostalCode: true
};

export const searchSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    setSearchFilters: (state, action: PayloadAction<Partial<SearchFilters>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setSearchFilters } = searchSlice.actions;

export default searchSlice.reducer;