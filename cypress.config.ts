import { defineConfig } from "cypress";

export default defineConfig({
	env: {
		codeCoverage: {
			exclude: ["cypress/**/*.*", "packages/**/src/__tests__/*.*"],
		},
	},
	component: {
		specPattern: "packages/**/*.cy.{js,jsx,ts,tsx}",
		excludeSpecPattern: ["cypress/**/*.*"],
		video: false,
		setupNodeEvents(on, config) {
			require("@cypress/code-coverage/task")(on, config);
			// include any other plugin code...

			// It's IMPORTANT to return the config object
			// with any changed environment variables
			return config;
		},
		devServer: {
			framework: "react",
			bundler: "webpack",
		},
	},
});
