module.exports = {
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
       boxShadow: {
        'top': '0 -2px 4px 0 rgba(0, 0, 0, 0.1)',
        'top-lg': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
};
