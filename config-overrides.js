const entrySrc = 'src-couter_react'


module.exports = {
  paths(paths, env) {
    const appSrc = paths.appSrc.replace(/src$/, entrySrc)
    const appIndexJs = paths.appIndexJs.replace(/\\src\\/, '\\' + entrySrc + '\\')
    paths.appSrc = appSrc
    paths.appIndexJs = appIndexJs
    return paths
  }
}