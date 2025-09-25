import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
    name : "appConfig",
    initialState : {
        language:  {
            lanCode : 'hi',
            lanName : 'हिन्दी',
            country : 'IN',
            flag    : 'https://flagcdn.com/w320/in.png'
        },
        theme : {
            mode : "dark"
        }
    },

    reducers : {
        setLanguage : (state, action) => {
            const {lanCode, country, lanName, countryCode : flag } = action.payload;
            state.language.lanCode    = lanCode,
            state.language.lanName    = lanName,
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