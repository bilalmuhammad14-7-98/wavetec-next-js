// tailwind.config.js
module.exports = {
  // darkMode: 'class',
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary colors
          primary: {
            light: '#0040C1', // light mode blue
            dark: '#155EEF', // dark mode blue
          },
          secondary: {
            light: '#004EEB',
            dark: '#818cf8',
          },

          // Backgrounds
          bg: {
            light: '#FFFFFF',
            dark: '#0C0E12',
          },
          section: {
            light: '#F5F5F5',
            dark: '#13161B',
          },

          // Text colors
          text: {
            headingLight: '#181D27',
            headingDark: '#F7F7F7',
            bodyLight: '#535862',
            bodyDark: '#94979C',
            mutedLight: '#B2DDFF',
            mutedDark: '#CECFD2',
          },

          // Borders
          border: {
            light: '#D5D7DA',
            dark: '#373A41',
          },
        },
      },
    },
  },
  plugins: [],
};
