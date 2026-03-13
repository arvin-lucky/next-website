import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	// Override default ignores of eslint-config-next.
	globalIgnores([
		// Default ignores of eslint-config-next:
		'.next/**',
		'out/**',
		'build/**',
		'next-env.d.ts',
		'node_modules/**',
		'public/**',
		'src/app/api/**',
		'commitlint.config.{js,ts}',
		'tailwind.config.{js,ts}',
	]),

	// Prettier integration (must be placed last to override other rules)
	eslintPluginPrettierRecommended,
	{
		plugins: {
			import: importPlugin,
			'simple-import-sort': simpleImportSort,
		},
		rules: {
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
			'import/first': 'error',
			'import/newline-after-import': 'error',
			'import/no-duplicates': 'error',

			'no-console': 'off',
			'consistent-return': 'off',
			curly: 'off',
			'default-case': 'off',
			eqeqeq: 'error',
			'no-alert': 'warn',
			'no-else-return': 'error',
			'no-lone-blocks': 'error',
			'no-new-wrappers': 'error',
			'no-param-reassign': 'error',
			'no-self-compare': 'error',
			'no-useless-return': 'off',
			'vars-on-top': 'error',
			'no-label-var': 'error',
			'no-shadow': 'warn',
			// 'no-use-before-define': 'error',
			'array-bracket-spacing': 'error',
			// camelcase: 'error',
			'no-var': 'error',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'react-hooks/exhaustive-deps': 'off',

			'@next/next/no-img-element': 'off',
			'@typescript-eslint/no-unsafe-function-type': 'off',
			'@typescript-eslint/no-unused-expressions': 'off',
			'no-use-before-defined': 'off',

			'@typescript-eslint/no-empty-object-type': 'off',
		},
	},
]);

export default eslintConfig;
