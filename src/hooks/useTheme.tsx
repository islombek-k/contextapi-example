import { useContext } from "react"
import { ThemeContext } from "../context/ThemeProvider"

export const useTheme = () => {
    const context = useContext(ThemeContext)
    
    if(!context) throw new Error("Must be wrapped inside ThemeContext")

    return context;
}