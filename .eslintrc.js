module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:nuxt/recommended",
		"plugin:vue/vue3-recommended",
	],
	parserOptions: {
		ecmaVersion: "latest",
		parser: "@typescript-eslint/parser",
		sourceType: "module",
	},
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				'vue/multi-word-component-names': 'off',
				'vue/no-v-html': 'off'
			},
		}
	],
	plugins: ["@typescript-eslint"],
	rules: {

	},
};
