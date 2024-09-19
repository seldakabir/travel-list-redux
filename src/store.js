import { configureStore } from "@reduxjs/toolkit";
import travelSlice from "./travelSlice";

const store = configureStore({
  reducer: { travelList: travelSlice },
});
export default store;
