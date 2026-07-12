import { createContext, useContext, useState } from 'react'

// Create Context
const ThemeContext = createContext()


// Provider
export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState('light')


  // Toggle Theme
  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'light' ? 'dark' : 'light'
    )
  }


  return (
    <ThemeContext.Provider 
      value={{ theme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}


// Custom Hook
export function useTheme() {
  return useContext(ThemeContext)
}
