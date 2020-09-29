/* eslint valid-jsdoc: "off" */

'use strict';

module.exports = appInfo => {
  const middlewareCommonIgnoreList = [
    /^\/static\/*/,
    /^\/uploads\/*/,
    '/sitemap.txt',
  ];

  const config = exports = {
    keys: appInfo.name + '_1569567266981_0000',
    static: {
      prefix: '/',
    },
    next: {
      dev: process.env.NODE_ENV !== 'production',
      dir: './next/',
    },
    // 中间件，注意设置match或ignore
    middleware: [
      // 'pageHandle',
      // 'dataHandle',
    ],
    // pageHandle: {
    //   ignore: middlewareCommonIgnoreList,
    // },
    // dataHandle: {
    //   ignore: middlewareCommonIgnoreList,
    // },
  };

  const userConfig = {
    pcDomain: 'http://test.xxx.com', // 项目移动端主域名
    wapDomain: 'http://m.test.xxx.com', // 项目移动端主域名
    strapiPath: 'http://localhost:1337', // strapi路径
    strapiAssetsPath: 'http://test.strapixxx.com', // strapi资源路径
    zbjPcPath: 'http://www.abc.com/api', // pc财税项目接口
    zbjMobilePath: 'http://m.abc.com/api', // wap财税项目接口
  };

  return {
    ...config,
    ...userConfig,
  };
};
