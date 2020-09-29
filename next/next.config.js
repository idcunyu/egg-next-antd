const withLess = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './static/style/antd-custom.less'), 'utf8')
);

module.exports = withLess({
  pageExtensions: ['jsx', 'js'],
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables, // make your antd custom effective
  },
  generateEtags: false,
  webpack: (config, { isServer }) => {
    // 处理@路径
    config.resolve.alias['@'] = path.join(__dirname, '');

    // 全局引入less全局变量、mixins等
    config.module.rules.push({
      test: /\.less$/,
      loader: 'sass-resources-loader',
      options: {
        resources: [
          path.resolve(__dirname, './static/style/vars.less'),
          path.resolve(__dirname, './static/style/mixins.less'),
        ],
      },
    },)

    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }
    return config
  },
})
