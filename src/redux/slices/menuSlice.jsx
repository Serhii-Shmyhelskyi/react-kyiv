import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemMenus: [
    { name: "Головна", link: "/" },
    { name: "Чому Київ?", link: "reason" },
    { name: "Що зробити", link: "/" },
    { name: "Мрія 'АН-225'", link: "dream" },
    { name: "Резиденції", link: "/" },
    { name: "Фото", link: "/" },
  ],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

export default menuSlice.reducer;
