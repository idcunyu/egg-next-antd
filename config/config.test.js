/* eslint valid-jsdoc: "off" */

'use strict';

module.exports = appInfo => {
  const config = exports = {
    cluster: {
      listen: { port: 7002 }
    }
  };

  const userConfig = {
    env: 'test',
  };

  return {
    ...config,
    ...userConfig,
  };
};
