import { useContext } from "react"
import { ThemeContext } from "../theme/theme_provider"



export default function ThemeSwitcher() {
    const { setThemeMode, isThemeLight } = useContext(ThemeContext)
    return <button onClick={() => setThemeMode(isThemeLight() ? 'dark' : 'light')}  >Toggle Theme to {isThemeLight() ? 'dark' : 'light'}</button>
}