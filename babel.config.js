module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          components: "./src/components/",
          services: "./src/services",
          screens: "./src/screens/",
          constants: "./src/constants/",
          assets: "./src/assets/",
          themes: "./src/themes/",
          // actions: './src/redux/actions/',
          // actionsType: './src/redux/actionsType',
          // sagas: './src/redux/sagas/',
          // reducers: './src/redux/reducers/',
          // selectors: './src/redux/selectors/',
          colors: "./src/themes/colors/",
          typography: "./src/themes/typography/",
          api: "./src/services/api",
        },
      },
    ],
  ],
};
