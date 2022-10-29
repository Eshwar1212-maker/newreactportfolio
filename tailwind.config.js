/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "firstFont": ['Roboto Mono', "monospace"],
        "secondFont": ['Fasthand', 'cursive'],
        "thirdFont": ['Pacifico', "cursive"],
        "fourthFont": ['Nanum Gothic Coding', "monospace"],
        "fifthFont": ['Fuzzy Bubbles', "cursive"],
        "seventhFont":['Inspiration', "cursive"],
        "eightFont": ["Island Moments", "cursive"],
        "ninthFont": ['Alkalami', "serif"],
        "tenthFont": ['Alkalami', "serif"],
        "11thfont": ['Mukta', "sans-serif"],
        "12thfont": ['Playfair Display', "serif"],
        "13thfont": ['Bitter', "serif"],
        "14thfont": ['Lobster', "cursive"]
      },
    },
  },
  plugins: [],
};

