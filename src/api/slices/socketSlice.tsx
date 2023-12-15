import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SocketState {
  Normal: boolean;
  Rapido: boolean;
}; 

const initialState: SocketState = {
  Normal: true,
  Rapido: true,
};

export const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    setSocketTypes: (state, action: PayloadAction<Partial<SocketState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setSocketTypes } = socketSlice.actions;

export default socketSlice.reducer;