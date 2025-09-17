import { configureStore } from "@reduxjs/toolkit";
import appConfigReducer from "../store/slices/appConfigSlice"

const appStore = configureStore( {
    reducer : {
        appConfig : appConfigReducer
    }
})

export default appStore;