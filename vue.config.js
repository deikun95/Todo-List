module.exports = {
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },
  transpileDependencies: ["vuetify"],
  publicPath: "/name-of-your-project/",
};
