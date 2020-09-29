/* eslint valid-jsdoc: "off" */

'use strict';

module.exports = appInfo => {
  const config = exports = {};

  const userConfig = {
    env: 'local',
    // 使用测试环境配置及数据
    strapiPath: 'http://test.xxx.com',

    // 使用本地strapi配置及数据
    // strapiPath: 'http://192.168.195.99:1337'
    // strapiAssetsPath: 'http://192.168.195.99:1337',
  };

  return {
    ...config,
    ...userConfig,
  };
};
