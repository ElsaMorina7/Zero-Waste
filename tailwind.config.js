module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        gray_300: "#e0e0e0",
        black_900: "#000000",
        white_A700: "#ffffff",
        black_900_3f: "#0000003f",
        colors: "#d0021b",
        white_A700_33: "#ffffff33",
        gray_800: "#4b4b4b",
        red_A701: "#de0707",
        gray_501: "#a7a7a7",
        gray_200: "#e8e8e8",
        red_200_33: "#efa2a233",
        red_200_49: "#efa2a249",
        gray_400_6b: "#b6b6b66b",
        red_A700: "#f10000",
        gray_500: "#919191",
      },
      borderRadius: {
        radius9: "9px",
        radius14: "14px",
        radius22: "22px",
        radius35: "35px",
        radius50: "50px",
        radius53: "53px",
        radius295: "29.5px",
        radius335: "33.5px",
        radius515: "5.15px",
        radius2477: "24.77px",
        radius34855: "34.855px",
        radius49855: "49.855px",
      },
      fontFamily: { inder: "Inder", inter: "Inter", poppins: "Poppins" },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
