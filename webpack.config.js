const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
	mode: "development",
	// entry: path.resolve(__dirname, "src", "index.tsx"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		compress: true,
		port: 9000,
	},
	plugins: [],
	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				include: path.resolve(__dirname),
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [
								[
									"@babel/preset-env",
									{
										targets: "defaults",
									},
								],
								"@babel/preset-react",
							],
						},
					},
				],
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
};
