/* eslint-disable @typescript-eslint/no-explicit-any */
// src/redux/counterSlice.ts
import { createSlice } from "@reduxjs/toolkit";
interface fixturesInit {
  favMatches: number[];
}

const initialState: fixturesInit = { favMatches: [] };
export const fixturesSlice = createSlice({
  name: "fixture",
  initialState,
  reducers: {
    addFav: (state, actions) => {
      const id = actions.payload;
      const current = state.favMatches;
      const isAdded = current.includes(id);
      try {
        if (isAdded) {
          state.favMatches = current.filter((favId) => favId !== id);
        } else {
          state.favMatches.push(actions.payload);
        }
      } finally {
        chrome.storage.local.set({
          ["favMatches"]: JSON.stringify(state.favMatches),
        });
        window.localStorage.setItem(
          "favMatches",
          JSON.stringify(state.favMatches)
        );
      }
    },
    updataStorage: (state) => {
      window.localStorage.setItem(
        "favMatches",
        JSON.stringify(state.favMatches)
      );
    },
  },
});

export const { addFav } = fixturesSlice.actions;
export default fixturesSlice.reducer;
