import { defineConfig, globalIgnores } from 'eslint/config';
import babelParser from '@babel/eslint-parser';
import nextPlugin from '@next/eslint-plugin-next';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

/**
 * Keep typescript@7 for Next. Avoid eslint-config-next / typescript-eslint
 * (they need the TS 6 JS API). Babel parses TS/TSX instead.
 */
export default defineConfig([
  {
    name: 'portfolio/app',
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-typescript', '@babel/preset-react']
        },
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      '@next/next': nextPlugin,
      react,
      'react-hooks': reactHooks
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off'
    }
  },
  globalIgnores([
    'node_modules/**',
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'claude-zip/**',
    'eslint.config.mjs',
    'postcss.config.mjs',
    'next.config.mjs'
  ])
]);
