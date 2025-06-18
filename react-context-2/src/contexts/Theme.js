import { createContext, useContext } from "react";

// Create Context
export const ThemeContext = createContext({
  themeMode: "light",
  enableDark: () => {},
  enableLight: () => {},
});

// Create Provider
export const ThemeContextProvider = ThemeContext.Provider;

// Create Custom Hook
export const useTheme = () => {
  return useContext(ThemeContext);
};
