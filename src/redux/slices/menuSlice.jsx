import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemMenus: [
    { name: "Головна", link: "/" },
    { name: "Чому Київ?", link: "reason" },
    { name: "Мрія 'АН-225'", link: "dream" },
    { name: "Фото", link: "photo" },
  ],
};
// react-kyiv

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

export default menuSlice.reducer;
