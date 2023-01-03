import { configureStore } from "@reduxjs/toolkit";
import userAccessReducer from "./userAccess/userAccessSlice";

export default configureStore({
    reducer: userAccessReducer
})