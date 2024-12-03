import { createContext, useState } from "react";

const ThemeContext = createContext(null);

function ThemeContextProvider({ children }) {

    const themeState = {
        themeMode: 'light'
    }

    const [theme, setTheme] = useState(themeState);

    function setThemeMode(value) {
        console.log(value)
        setTheme({ themeMode: value })
    }

    const isThemeLight = () => theme.themeMode === 'light' ? true : false;

    return <ThemeContext.Provider value={{ theme, setThemeMode, isThemeLight }}>
        {children}
    </ThemeContext.Provider>
}


export { ThemeContext, ThemeContextProvider }