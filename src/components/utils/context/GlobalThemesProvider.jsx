import { createContext, useContext, useState } from "react";
import themes from "./themes"
import React from 'react'
import { useReducer } from "react";

export const GlobalThemes = createContext()

const initialTheme = {
    theme: themes.light
}
function ThemeReducer(state,action){
    switch(action.type){
        case "toggleDarkMode":
            return{
                ...state,
                theme: state.theme === themes.light ? themes.dark : themes.light
            };
            default:
                return state;
    }
}
const GlobalThemesProvider = ({children}) =>{
    const [state, dispatch] = useReducer(ThemeReducer, initialTheme);
    return(
        <GlobalThemes.Provider value={{theme: state.theme, toggleDarkMode: () => dispatch({type: 'toggleDarkMode'}) }}>
            {children}
        </GlobalThemes.Provider>
    )
}

export default GlobalThemesProvider













// const GlobalThemesProvider = ({children}) =>{
  
//     const [theme, setTheme] = useState(themes.light);
    
//     const toggleDarkMode = () =>{
//         if(theme === themes.light){
//             setTheme(themes.dark)
//         }else if(theme === themes.dark){
//             setTheme(themes.light)
//         }

//     }
//     const data = {
//         theme,
//         setTheme,
//         toggleDarkMode
//     }

//         return (
//             <GlobalThemes.Provider value={data}>
//                 {children}
//             </GlobalThemes.Provider>
//         )

// }

// export default GlobalThemesProvider

