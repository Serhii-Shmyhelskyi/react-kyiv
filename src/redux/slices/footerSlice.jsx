import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  footerItemDetal: ["Бронювання", "Оплата", "Умови", "Політика", "Карта сайта"],

  footerItemBlog: [
    "Ідеї для фотосесії",
    "Весілля в Києві",
    "ТОП 10 ресторанів Києва",
    "Кращі пам'ятки",
    "Київська кухня",
  ],

  footerItemCompani: ["Про компанію", "Працюй з нами", "Преса"],

  footerItemKontack: [
    {
      name: "Зв'яжися з нами",
      imageUrlFooter: "https://img.icons8.com/ios-filled/256/phone.png",
    },
    {
      name: "Facebook",
      imageUrlFooter: "https://img.icons8.com/ios-glyphs/256/facebook.png",
    },
    {
      name: "Instagram",
      imageUrlFooter: "https://img.icons8.com/ios-filled/256/instagram-new.png",
    },
    {
      name: "YouTube",
      imageUrlFooter: "https://img.icons8.com/ios-glyphs/256/youtube-play.png",
    },
    {
      name: "Пошта",
      imageUrlFooter:
        "https://img.icons8.com/external-nawicon-glyph-nawicon/256/external-email-communication-nawicon-glyph-nawicon.png",
    },
  ],
};

const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {},
});

export default footerSlice.reducer;
