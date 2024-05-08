const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  content: ["./node_modules/flowbite/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#1a56db",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    plugin(function ({ addComponents, addUtilities, addVariant, theme }) {
      addVariant("optional", "&:optional");
      addVariant("hocus", ["&:hover", "&:focus"]);

      addVariant("group-optional", ":merge(.group):optional &");
      addVariant("peer-optional", ":merge(.peer):optional ~ &");
    }),
  ],
};
