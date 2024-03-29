module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@forms': './src/forms',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@images': './assets/images',
          '@fonts': './assets/fonts',
          '@functions': './src/functions',
        },
      },
    ],
  ],
};
