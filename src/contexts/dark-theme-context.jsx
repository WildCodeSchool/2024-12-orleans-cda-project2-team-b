import { createContext, useContext, useEffect, useState } from 'react';

const DarkThemeContext = createContext();

export function DarkThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(() => {
    return localStorage.getItem('dark-mode') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('dark-mode', darkTheme);
  }, [darkTheme]);

  return <DarkThemeContext.Provider value={{ darkTheme, setDarkTheme }}>{children}</DarkThemeContext.Provider>;
}

export function useDarkTheme() {
  const context = useContext(DarkThemeContext);
  if (!context) {
    throw new Error('useDarkTheme must be used within a DarkThemeProvider');
  }
  return context;
}
