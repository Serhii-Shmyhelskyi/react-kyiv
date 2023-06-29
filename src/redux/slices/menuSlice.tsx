import { createSlice } from "@reduxjs/toolkit";

type menuItem = {
  name: string;
  link: string;
  pathnameId: string;
};

export interface menuSliceState {
  itemMenus: menuItem[];
}

const initialState: menuSliceState = {
  itemMenus: [
    { name: "Головна", link: "/react-kyiv/", pathnameId: "/react-kyiv/" },
    { name: "Чому Київ?", link: "reason", pathnameId: "/react-kyiv/reason" },
    { name: "Мрія 'АН-225'", link: "dream", pathnameId: "/react-kyiv/dream" },
    { name: "Фото", link: "photo", pathnameId: "/react-kyiv/photo" },
  ],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

export default menuSlice.reducer;
