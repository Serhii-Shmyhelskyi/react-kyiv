import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemMenu: [
    "Резюме",
    "Головна",
    "Види",
    "Погода",
    "Що зробити",
    "Резиденції",
    "Фото",
  ],
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

export default menuSlice.reducer;
