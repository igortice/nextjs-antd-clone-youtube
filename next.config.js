const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // optional
  // modifyVars: { '@primary-color': '#04f' },
  // optional
  lessVarsFilePath: './src/styles/variables.less',
  // optional https://github.com/webpack-contrib/css-loader#object
  // cssLoaderOptions: {},

  webpack(config) {
    return config;
  },
});
