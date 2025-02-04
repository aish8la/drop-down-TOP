const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "dropdown-menu.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
}