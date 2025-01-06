import userReducer from "../Slices/userSlice";
// import  fruitReducer from "../slices/fruitslice";
// import userReducer from "../slices/userslice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    userinfo: userReducer,
    // fruitinfo:fruitReducer
  },
});

export default store;
