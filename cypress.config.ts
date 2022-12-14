import { defineConfig } from "cypress";

export default defineConfig({
	component: {
		specPattern: "packages/**/*.cy.{js,jsx,ts,tsx}",
		devServer: {
			framework: "react",
			bundler: "webpack",
		},
	},
});
