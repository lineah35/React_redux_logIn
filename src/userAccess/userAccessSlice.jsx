import { createSlice } from "@reduxjs/toolkit";

export const userAccessSlice = createSlice({
    name: "userAccess",
    initialState: {
        logIn: {
            userName: "",
            password: "",
            isLoggedIn: false
        },
        personalInfo: {
            hobby: "",
            hobby2: "",
            favouriteMovie: "",
            favouriteBand: "",
            petName: ""
        }
    },

    reducers: {
        storeLogInInfo: (state, action) => {
            state.logIn = action.payload;
            console.log("stored state in userAccessSlice:", state.logIn);
        },
        storePersonalInfo: (state, action) => {
            state.personalInfo = action.payload;
            console.log("state.personalInfo:", state.personalInfo);
        }
    }
})

export const { storeLogInInfo, storePersonalInfo } = userAccessSlice.actions;
export default userAccessSlice.reducer;