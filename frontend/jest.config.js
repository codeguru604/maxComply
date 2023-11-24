module.exports = {
	preset: '@vue/cli-plugin-unit-jest',
	testMatch: ['**/*.spec.js'],
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
		'^.+\\.vue$': '@vue/vue3-jest',
	},
	testEnvironment: 'jsdom',
	testEnvironmentOptions: {
		customExportConditions: ['node', 'node-addons'],
	},
};