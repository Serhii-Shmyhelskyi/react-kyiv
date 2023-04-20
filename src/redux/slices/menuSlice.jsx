import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemMenus: [
    { name: "Головна", link: "/" },
    { name: "Чому Київ?", link: "whyKyiv" },
    { name: "Що зробити", link: "2" },
    { name: "Резиденції", link: "3" },
    { name: "Фото", link: "4" },
  ],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

export default menuSlice.reducer;
