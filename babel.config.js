// babel.config.js
module.exports = {
    presets: [
      ['@babel/preset-env', {
        useBuiltIns: 'usage',
        corejs: 3, // Используйте core-js версии 3
      }],
      '@babel/preset-react',
    ],
  };