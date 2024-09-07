const path = require('path');
const { override, addWebpackPlugin } = require('customize-cra');
const { DefinePlugin } = require('webpack');

module.exports = override(
  // Добавляем конфигурацию для изменения пути сборки
  (config) => {
    config.output.path = path.resolve(__dirname, 'dist');
    return config;
  }
);
