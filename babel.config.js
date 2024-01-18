module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@dtos": "./src/dtos",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@storage": "./src/storage",
            "@utils": "./src/utils",
            "@libs": "./src/libs",
            "@services": "./src/services",
            "@hooks": "./src/hooks",
            "@contexts": "./src/contexts",
            "@routes": "./src/routes",
            "@store": "./src/store",
            "@reducer": "./src/store/reducer",
            "@actions": "./src/store/actions",
            "@saga": "./src/store/saga",
          },
        },
      ],
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          allowUndefined: false,
          path: ".env",
        },
      ],
    ],
  };
};
