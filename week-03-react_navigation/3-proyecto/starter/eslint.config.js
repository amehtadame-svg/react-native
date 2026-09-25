// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
  require('eslint-config-expo/flat'),
  {
    ignores: ['dist/*', 'node_modules/*'],
  },
]);
