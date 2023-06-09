import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface playersState {
  player1: Array<any> | undefined;
  player2: Array<any> | undefined;
  player3: Array<any> | undefined;
}

const initialState: playersState = {
  player1: undefined,
  player2: undefined,
  player3: undefined,
};

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    setPlayersPokemon: (state, action: PayloadAction<playersState>) => {
      state.player1 = action.payload.player1;
      state.player2 = action.payload.player2;
      state.player3 = action.payload.player3;
    },
  },
});


export  const { setPlayersPokemon } = playersSlice.actions;
export default playersSlice.reducer