import { createSlice } from "@reduxjs/toolkit";
const initialStateList = [];

const travelSlice = createSlice({
  name: "travelList",
  initialState: initialStateList,
  reducers: {
    addToList: {
      prepare(text, quantity) {
        return {
          payload: { text, quantity },
        };
      },
      reducer(state, action) {
        const newItem = {
          id: Date.now(),
          title: action.payload.text,
          quantity: action.payload.quantity,
          packed: false,
        };
        state.push(newItem);
      },
    },
    removeFromList: (state, action) => {
      return state.filter((state) => state.id !== action.payload);
    },
    toggleUpdate: (state, action) => {
      const filter = state.find((state) => state.id === action.payload);
      if (filter) {
        filter.packed = !filter.packed;
      }
    },
    clearList: (state) => {
      return [];
    },
  },
});

export const { addToList, removeFromList, toggleUpdate, clearList } =
  travelSlice.actions;
export default travelSlice.reducer;
