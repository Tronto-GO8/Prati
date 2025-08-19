import { useState, useEffect, useMemo, useContext, createContext } from "react";

const contextTheme = createContext(null)

export function themeModifier({children}){
    const [theme, setTheme] = useState('ligth')

    const mudarTheme = () => {
        setTheme = ((tema) => (tema === 'ligth' ? 'drak': 'ligth'))
    }

    const armazanarTema = useMemo(() => ({theme, mudarTheme}), [theme, mudarTheme])

    return <themeModifier.Provider value={value}>{children}</themeModifier.Provider>;
}

export function useTheme(){
    const ctx = useContext(contextTheme)
    if(!ctx){ 
        throw new Error ("Você precisa estar dentro do provider correto");
    }
    return ctx
}

function ThemeToggleButton() {
  const { toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Alternar Tema</button>;
}

function ThemeDisplay() {
  const { theme } = useTheme();
  return <p>Tema atual: {theme}</p>;
}
