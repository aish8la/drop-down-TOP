const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dropdown-menu.js',
        library: {
          name: 'DropdownMenu',
          type: 'umd',
          export: 'default',
        },
        globalObject: 'this',
      },
});