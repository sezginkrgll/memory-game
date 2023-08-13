import { createSlice } from "@reduxjs/toolkit";
import Items from "../Data/Items";

const shuffle = (arr) => {
  let newArr = [...arr]; // create new array
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

export const memorySlice = createSlice({
  name: "memory",
  initialState: {
    cards: shuffle([...Items, ...Items]),
    matches: [],
    match: null,
    opened: 0,
    score: 0,
  },
  reducers: {
    pairing: (state, action) => {
      if (!state.match) {
        state.match = action.payload;
      } else {
        if (state.match === action.payload) {
          state.matches.push(action.payload);
          state.score += 50;
        } else {
          state.score -= 10;
        }
        state.match = null;
      }
      state.opened += 1;
    },
    openedReset: (state, action) => {
      state.opened = 0;
    },
    matchesReset: (state, action) => {
      state.matches = [];
      state.match = null;
      state.opened = 0;
      state.score = 0;
      state.cards = shuffle([...Items, ...Items]);
    },
  },
});

export const { pairing, openedReset, matchesReset } = memorySlice.actions;
export default memorySlice.reducer;
