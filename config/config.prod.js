/* eslint valid-jsdoc: "off" */

'use strict';

module.exports = appInfo => {
  const config = exports = {};

  const userConfig = {
    env: 'production',
    pcDomain: 'https://www.xxx.com',
    wapDomain: 'https://m.xxx.com',
    strapiPath: 'https://www.strapixxx.com',
    strapiAssetsPath: 'https://www.strapixxx.com',
    zbjPcPath: 'https://www.abc.com/api',
    zbjMobilePath: 'https://m.abc.com/api'
  };

  return {
    ...config,
    ...userConfig,
  };
};
