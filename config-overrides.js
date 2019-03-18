const {
  override,
  fixBabelImports
}  = require('customize-cra')

const entrySrc = 'src-router2'

module.exports = {
  webpack: override(
    fixBabelImports('antd-mobile', {
      style: 'css'
    })
  ),
  paths: function(paths, env) {
    const appSrc = paths.appSrc.replace(/src$/, entrySrc)
    const appIndexJs = paths.appIndexJs.replace(/\\src\\/, '\\' + entrySrc + '\\')
    paths.appSrc = appSrc
    paths.appIndexJs = appIndexJs
    return paths
  }
}