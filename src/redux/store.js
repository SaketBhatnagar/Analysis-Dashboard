import { configureStore } from "@reduxjs/toolkit";
import AdminData from "./features/AdminSlice";
export const store = configureStore({
  reducer: { admindata: AdminData },
});
