// Theme System - Plug and Play
// Copy this code to your project for a complete theme switching system

import React, { createContext, useContext, useState, useEffect } from 'react';

// Theme Definitions
const themes = {
  orange: {
    primary: "#F97316",
    primaryLight: "#FB923C",
    primaryDark: "#C2410C",
    gradient: "from-orange-400 via-orange-500 to-orange-700",
    border: "border-orange-500/30",
    borderHover: "border-orange-500/80",
    glow: "shadow-orange-500/20",
    emojis: ["🎃", "🦇", "👻", "🕷️", "🕸️"],
    titleEmoji: "🎃",
    icon: "🎃"
  },
  gray: {
    primary: "#6366F1",
    primaryLight: "#A5B4FC",
    primaryDark: "#2b287a",
    gradient: "from-indigo-400 via-indigo-600 to-slate-900",
    border: "border-indigo-500/30",
    borderHover: "border-indigo-500/80",
    glow: "shadow-indigo-500/30",
    emojis: ["🌙", "⭐", "✨", "🌃", "☁️"],
    titleEmoji: "🌙",
    icon: "🌙"
  },
  green: {
    primary: "#10B981",
    primaryLight: "#34D399",
    primaryDark: "#047857",
    gradient: "from-emerald-400 via-green-500 to-emerald-700",
    border: "border-emerald-500/30",
    borderHover: "border-emerald-500/80",
    glow: "shadow-emerald-500/20",
    emojis: ["🐸", "🌿", "🍃", "🌧️", "🪷"],
    titleEmoji: "🐸",
    icon: "🐸"
  },
  red: {
    primary: "#EF4444",
    primaryLight: "#F87171",
    primaryDark: "#B91C1C",
    gradient: "from-pink-400 via-red-500 to-rose-600",
    border: "border-rose-500/30",
    borderHover: "border-rose-500/80",
    glow: "shadow-rose-500/20",
    emojis: ["❤️", "💕", "💘", "💖", "💝"],
    titleEmoji: "❤️",
    icon: "❤️"
  },
  blue: {
    primary: "#DC2626",     
    primaryLight: "#F4F4F5",   
    primaryDark: "#15803D",   
    primaryAccent: "#1D4ED8",
    gradient: "from-red-500 via-emerald-500 to-red-700",
    border: "border-red-500/40",
    borderHover: "border-red-500/80",
    glow: "shadow-red-500/30",
    emojis: ["🎄", "🎅", "🎁", "❄️", "⛄", "🍪"],
    titleEmoji: "🎄",
    icon: "🎄"
  }
};

// Theme List for Dropdown
const themeList = [
  {
    name: "Halloween🎃",
    value: "orange",
    color: "#F97316"
  },
  {
    name: "Christmas🎄",
    value: "blue",
    color: "#3B82F6"
  },
  {
    name: "Tokyo Night",
    value: "gray",
    color: "#2d14bbff"
  },
  {
    name: "Phrog",
    value: "green",
    color: "#10B981"
  },
  {
    name: "Valentine",
    value: "red",
    color: "#EF4444"
  }
];

// Theme Context
const ThemeContext = createContext(undefined);

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem("app-theme");
    return savedTheme || "orange";
  });

  const setTheme = (themeName) => {
    setCurrentTheme(themeName);
    localStorage.setItem("app-theme", themeName);
    applyScrollbarTheme(themes[themeName]);
  };

  const applyScrollbarTheme = (theme) => {
    const style = document.createElement("style");
    style.textContent = `
      :root {
        --scrollbar-thumb-color: ${theme.primary}80;
        --scrollbar-thumb-gradient: linear-gradient(135deg, ${theme.primary}60, ${theme.primaryLight}40);
        --scrollbar-thumb-border: ${theme.primary}30;
        --scrollbar-thumb-hover-gradient: linear-gradient(135deg, ${theme.primary}80, ${theme.primaryLight}60);
        --scrollbar-thumb-glow: ${theme.primary}40;
        --global-scrollbar-thumb: ${theme.primary}30;
        --global-scrollbar-thumb-hover: ${theme.primary}50;
      }
      ::-webkit-scrollbar-thumb {
        background: ${theme.primary}50 !important;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: ${theme.primary}80 !important;
      }
      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.1) !important;
      }
    `;
    
    const existingStyle = document.getElementById("scrollbar-theme");
    existingStyle && existingStyle.remove();
    style.id = "scrollbar-theme";
    document.head.appendChild(style);
  };

  useEffect(() => {
    applyScrollbarTheme(themes[currentTheme]);
  }, [currentTheme]);

  const getThemeColors = () => themes[currentTheme];

  return (
    <ThemeContext.Provider value={{
      theme: currentTheme,
      setTheme,
      getThemeColors,
      themes,
      themeList
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Theme Dropdown Component
export const ThemeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, getThemeColors, themeList } = useTheme();
  const themeColors = getThemeColors();

  return (
    <div className="relative group">
      {/* Theme Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-11 h-11 border-2 rounded-xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
        style={{
          borderColor: isOpen ? `${themeColors.primary}60` : `${themeColors.primary}30`,
          backgroundColor: isOpen ? `${themeColors.primary}20` : "rgba(0,0,0,0.4)",
          boxShadow: isOpen ? `0 0 30px ${themeColors.primary}40, inset 0 1px 0 rgba(255,255,255,0.1)` : `0 0 15px ${themeColors.primary}10`
        }}
      >
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at center, ${themeColors.primary}25, transparent 70%)`
          }}
        />
        <div className="relative z-10">
          <span style={{ color: themeColors.primaryLight }}>🎨</span>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className="absolute top-12 right-0 bg-black/95 backdrop-blur-xl border rounded-2xl p-4 min-w-[160px] shadow-2xl z-50"
          style={{
            borderColor: `${themeColors.primary}40`,
            boxShadow: `0 25px 50px ${themeColors.primary}30, 0 0 100px ${themeColors.primary}20`,
            animation: "dropdown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
            maxHeight: "300px",
            overflowY: "auto"
          }}
        >
          <div className="mb-3">
            <h4 
              className="text-xs font-semibold uppercase tracking-wider font-orbitron"
              style={{ color: themeColors.primary }}
            >
              Choose Theme
            </h4>
          </div>
          
          {themeList.map((themeOption) => (
            <button
              key={themeOption.value}
              onClick={() => {
                setTheme(themeOption.value);
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-3 py-3 rounded-xl text-sm transition-all duration-300 font-orbitron group/theme relative overflow-hidden ${
                theme === themeOption.value ? "scale-105" : "hover:scale-102"
              }`}
              style={{
                background: theme === themeOption.value 
                  ? `linear-gradient(135deg, ${themeOption.color}20, ${themeOption.color}10)` 
                  : "transparent",
                border: theme === themeOption.value 
                  ? `1px solid ${themeOption.color}40` 
                  : "1px solid transparent"
              }}
              onMouseEnter={(e) => {
                if (theme !== themeOption.value) {
                  e.currentTarget.style.background = `linear-gradient(135deg, ${themeOption.color}15, ${themeOption.color}05)`;
                  e.currentTarget.style.border = `1px solid ${themeOption.color}30`;
                }
              }}
              onMouseLeave={(e) => {
                if (theme !== themeOption.value) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.border = "1px solid transparent";
                }
              }}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover/theme:opacity-100 transition-all duration-300"
                style={{
                  background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                  transform: "translateX(-100%)"
                }}
              />
              <div 
                className={`w-4 h-4 rounded-full border-2 transition-all duration-300 relative ${
                  theme === themeOption.value ? "scale-110" : "group-hover/theme:scale-105"
                }`}
                style={{
                  backgroundColor: themeOption.color,
                  borderColor: theme === themeOption.value 
                    ? "rgba(255,255,255,0.4)" 
                    : "rgba(255,255,255,0.2)",
                  boxShadow: theme === themeOption.value 
                    ? `0 0 15px ${themeOption.color}60, 0 0 30px ${themeOption.color}30` 
                    : `0 0 8px ${themeOption.color}40`
                }}
              >
                {theme === themeOption.value && (
                  <div 
                    className="absolute inset-0 rounded-full animate-ping"
                    style={{
                      backgroundColor: themeOption.color,
                      animationDuration: "2s"
                    }}
                  />
                )}
              </div>
              <span className="relative z-10">{themeOption.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Add CSS animation for dropdown
const style = document.createElement('style');
style.textContent = `
  @keyframes dropdown {
    0% {
      opacity: 0;
      transform: translateY(-10px) scale(0.95);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;
document.head.appendChild(style);

export default { ThemeProvider, useTheme, ThemeDropdown, themes, themeList };
