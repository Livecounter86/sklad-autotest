import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: [
      'node_modules/',
      'playwright-report/',
      'test-results/',
      '**/*.js',
    ],
  },
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      'max-len': ['error', 140],
      'indent': 'off',
      '@stylistic/indent': ['error', 2],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
      '@stylistic/eol-last': 'error',
      '@stylistic/spaced-comment': ['error', 'always'],
      'class-methods-use-this': 'off',
      'no-underscore-dangle': 'error',
      'no-await-in-loop': 'error',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'never', prev: 'singleline-let', next: 'singleline-let' },
        { blankLine: 'never', prev: 'singleline-const', next: 'singleline-const' },
        { blankLine: 'never', prev: 'singleline-var', next: 'singleline-var' },
        { blankLine: 'always', prev: '*', next: 'multiline-block-like' },
        { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
        { blankLine: 'always', prev: '*', next: 'multiline-expression' },
        { blankLine: 'always', prev: 'multiline-expression', next: '*' },
        { blankLine: 'never', prev: 'expression', next: 'expression' },
      ],
    },
  },
);
