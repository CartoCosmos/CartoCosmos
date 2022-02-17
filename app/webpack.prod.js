const { merge } = require('webpack-merge');
const Common = require("./webpack.common.js");

module.exports = merge(Common, {
  mode: "production",
  devtool: "source-map",
  watch: false,
});
