/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        upheval: "upheval",
      },
      // colors: {
      //   primary: "#DAD3C2",
      //   secondary: "#C8C3B4",
      //   dark: "#1D1B17",
      //   danger: "#DA7878",
      // },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#DAD3C2",
          secondary: "#C8C3B4",
          accent: "#DA7878",
          neutral: "#1D1B17",
          success: "#92DA78",
        },
      },
      "lemonade",
    ],
  },

  plugins: [require("daisyui")],
};
