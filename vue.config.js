
const path = require('path');
// const px2rem = require('postcss-plugin-px2rem')
// const postcss = px2rem({
//   remUnit: 100
// })
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: "/",    // 公共路径
  outputDir: 'dist', // 不同的环境打不同包名
  css: { // 一次配置，全局使用，这个scss 因为每个文件都要引入
    // extract: true,
    sourceMap: false,
    loaderOptions: {
      // postcss: {
      //   plugins: [
      //     postcss
      //   ]
      // }
    }
  },
  lintOnSave: false,  // 关闭eslint
  productionSourceMap: false,  // map文件
  devServer: {
    port: 8888, // 端口号
    host: '0.0.0.0',
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器

    //proxy: 'https://newtopup-test.ecoph.tk'  // 配置跨域处理,只有一个代理
    proxy: {
      [process.env.VUE_APP_PROXY]: {
        target: `https://reality_activities-api.kgtindok.com`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_PROXY]: ''
        }
      }
    },  // 配置多个代理
  },
  chainWebpack: (config) => {

    // set alias
    config.resolve.alias
      .set('@', resolve('src'))
      .set('common', resolve('src/common'))
      .set('assets', resolve('src/assets'))

    config.optimization.delete('splitChunks')
    // config
    //   .plugin('webpack-bundle-analyzer')
    //   .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    // 所有组件中导入公共styl  
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
    function addStyleResource(rule) {
      rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
          patterns: [
            path.resolve(__dirname, './src/assets/css/var.styl'),
            path.resolve(__dirname, './src/assets/css/mixin.styl'),
          ],
        })
    }

  },
  configureWebpack: (config) => {
    config.output.filename = `js/[name].[hash].js`
    config.output.chunkFilename = `js/[name].[hash].js`
    if (process.env.NODE_ENV === 'production') {
      // 打包压缩图片
      // config.plugins.push(
      //   new tinyPngWebpackPlugin({
      //     key: "zDScpf7z3yLMKypDs19qKDCgdC2xCbrR"
      //   })
      // )
    }


  }
}