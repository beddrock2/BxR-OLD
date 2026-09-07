// Usage Example - How to implement the theme system
// Copy this code to see how to use the theme system

import React from 'react';
import { ThemeProvider, ThemeDropdown, useTheme } from './theme-system';

// Example component that uses theme colors
const ExampleComponent = () => {
  const { getThemeColors } = useTheme();
  const colors = getThemeColors();

  return (
    <div 
      className="p-6 rounded-xl"
      style={{
        background: `linear-gradient(135deg, ${colors.primary}20, transparent)`,
        border: `1px solid ${colors.primary}30`
      }}
    >
      <h2 style={{ color: colors.primary }}>Themed Component</h2>
      <p style={{ color: colors.primaryLight }}>
        This component adapts to the current theme!
      </p>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-black text-white">
        {/* Navigation with Theme Dropdown */}
        <nav className="fixed top-6 right-6 z-50">
          <ThemeDropdown />
        </nav>

        {/* Your app content */}
        <main className="pt-20 px-6">
          <h1 className="text-4xl font-bold text-center mb-8">
            My Themed Application
          </h1>
          
          <ExampleComponent />
          
          {/* More components that use themes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[1, 2, 3].map((item) => (
              <ThemedCard key={item} />
            ))}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
};

// Another themed component
const ThemedCard = () => {
  const { getThemeColors } = useTheme();
  const colors = getThemeColors();

  return (
    <div 
      className="p-4 rounded-lg transition-all duration-300 hover:scale-105"
      style={{
        background: `linear-gradient(135deg, ${colors.primary}10, transparent)`,
        border: `1px solid ${colors.primary}20`,
        boxShadow: `0 4px 20px ${colors.primary}20`
      }}
    >
      <h3 style={{ color: colors.primary }}>Themed Card</h3>
      <p style={{ color: colors.primaryLight }}>
        This card uses theme colors for styling
      </p>
    </div>
  );
};

export default App;
