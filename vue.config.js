// vue.config.js

process.env.VUE_APP_BUILD_TIME = (new Date()).toString()

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  publicPath: '/static/beibishi2022/', // 部署到博客上
  chainWebpack: config => {
    config.module
      .rule('yaml')
      .test(/\.ya?ml?$/)
      .use('yaml-loader')
      .loader('yaml-loader')
  }
}