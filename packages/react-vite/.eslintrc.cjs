/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: false,
  extends: ['plugin:react/recommended'],
  plugins: ['react'],
  rules: {
    'react/self-closing-comp': 'error',
  },
  overrides: [
    {
      files: './vite.config.ts',
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
}
