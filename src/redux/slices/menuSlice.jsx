import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemMenus: ["Головна", "Види", "Що зробити", "Резиденції", "Фото"],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

export default menuSlice.reducer;
