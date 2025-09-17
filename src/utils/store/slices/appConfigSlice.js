import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
    name : "appConfig",
    initialState : {
        language:  {
            lanCode : 'en',
            lanName : 'english',
            country : 'GB',
            flag    : 'https://flagcdn.com/w320/in.png'
        },
        theme : {
            mode : "dark"
        }
    },

    reducers : {
        setLanguage : (state, action) => {
            const {liLanCode, country, liLanName, countryCode : flag } = action.payload;
            state.language.lanCode    = liLanCode,
            state.language.lanName    = liLanName,
            state.language.country    = country,
            state.language.flag       = `https://flagcdn.com/w320/${flag.toLowerCase()}.png`
        },
        setTheme : (state, action) => {
            state.theme.mode = state.theme.mode === "dark" ? "light" : "dark"
        }
    }
})

export const { setLanguage, setTheme } = appConfigSlice.actions;
export default appConfigSlice.reducer