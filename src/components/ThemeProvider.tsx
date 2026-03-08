"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Theme = "dark" | "light";
type FontSize = "base" | "large" | "xl";

interface ThemeContextType {
    theme: Theme;
    fontSize: FontSize;
    toggleTheme: () => void;
    setFontSize: (size: FontSize) => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    fontSize: "base",
    toggleTheme: () => { },
    setFontSize: () => { },
});

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("dark");
    const [fontSize, setFontSizeState] = useState<FontSize>("base");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("xenolexica-theme") as Theme | null;
        const savedFontSize = localStorage.getItem("xenolexica-font-size") as FontSize | null;
        if (savedTheme) setTheme(savedTheme);
        if (savedFontSize) setFontSizeState(savedFontSize);
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const html = document.documentElement;

        // Theme
        html.classList.remove("dark", "light");
        html.classList.add(theme);
        localStorage.setItem("xenolexica-theme", theme);

        // Font size
        html.classList.remove("font-base", "font-large", "font-xl");
        html.classList.add(`font-${fontSize}`);
        localStorage.setItem("xenolexica-font-size", fontSize);
    }, [theme, fontSize, mounted]);

    const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
    const setFontSize = (size: FontSize) => setFontSizeState(size);

    return (
        <ThemeContext.Provider value={{ theme, fontSize, toggleTheme, setFontSize }}>
            {children}
        </ThemeContext.Provider>
    );
}
