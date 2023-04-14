import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/menuSlice";
import footerReducer from "./slices/footerSlice";

export const store = configureStore({
  reducer: { menu: menuReducer, footer: footerReducer },
});
