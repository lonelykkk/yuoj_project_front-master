const { defineConfig } = require("@vue/cli-service");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: { port: 5173 },
  chainWebpack(config) {
    config.plugin("monoca").use(new MonacoWebpackPlugin());
  },
});
module.exports = {
  //保存时是否校验
  lintOnSave: false
}
module.exports = {
  // ...
  devServer: {
    client: {
      overlay: false
    }
  }
}
