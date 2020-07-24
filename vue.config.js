const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: '',
  pluginOptions: {
    cordovaPath: 'src-cordova',
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('layout', resolve('src/layout'))
      .set('base', resolve('src/base'))
      .set('static', resolve('src/static'));
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://fengziqiao.top:8802/auth', // 你要请求的后端接口ip+port
        changeOrigin: true, // 允许跨域，在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        ws: true, // 开启webSocket
        pathRewrite: {
          '^/api': '', // 替换成target中的地址
        },
      },
      '/ws': {
        target: 'http://fengziqiao.top:8802/ws', // 你要请求的后端接口ip+port
        changeOrigin: true, // 允许跨域，在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        ws: true, // 开启webSocket
        pathRewrite: {
          '^/ws': '/ws', // 替换成target中的地址
        },
      },
    },
  },
};
