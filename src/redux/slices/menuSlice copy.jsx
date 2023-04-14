// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   loading: "",
//   itemMenus: [],
//   error: "",
// };

// export const fetchMenus = createAsyncThunk("menu/fetchMenus", () => {
//   return axios
//     .get("https://63ebc7d7be929df00ca23593.mockapi.io/itemMenu")
//     .then((res) => res.data);
// });

// const menuSlice = createSlice({
//   name: "menu",
//   initialState,
//   extraReducers: (builder) => {
//     builder.addCase(fetchMenus.pending, (state) => {
//       state.status = "loading";
//     });
//     builder.addCase(fetchMenus.fulfilled, (state, action) => {
//       state.status = "success";
//       state.itemMenus = action.payload;
//       state.error = "";
//     });
//     builder.addCase(fetchMenus.rejected, (state, action) => {
//       state.status = "error";
//       state.itemMenus = [];
//       state.error = action.error.message;
//     });
//   },
// });

// export default menuSlice.reducer;

// {menu.status === "error" ? (
//     <div>
//       <h2>Виникла помилка 😕</h2>
//     </div>
//   ) : menu.status === "loading" ? (
//     <div>Loading...</div>
//   ) : (
//     menu.itemMenus.map((obj) => {
//       return (
//         <li key={obj} className={styles.menu__listItem}>
//           <a className={styles.menu__listLink} href="#">
//             {obj}
//           </a>
//         </li>
//       );
//     })
//   )}
