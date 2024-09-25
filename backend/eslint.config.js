import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    rules: {
      'func-style': 'off',
      'indent': [ 'error', 2 ],
      'quotes': [ 'error', 'single', {
        'avoidEscape': true
      }],
      'semi': ['error', 'always'],
    }
  }
];