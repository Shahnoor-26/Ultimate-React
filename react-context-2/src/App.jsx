import { useEffect, useState } from "react";
import { ThemeContextProvider } from "./contexts/Theme";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";

const App = () => {
  const [themeMode, updateTheme] = useState("light");

  const enableDark = () => updateTheme("dark");
  const enableLight = () => updateTheme("light");

  useEffect(() => {
    const root = document.querySelector("html");
    root.classList.remove("light", "dark");
    root.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContextProvider value={{ themeMode, enableDark, enableLight }}>
      <div className="flex flex-wrap min-h-screen items-center dark:bg-gray-950">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
};

export default App;
