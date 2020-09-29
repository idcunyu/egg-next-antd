'use strict';

// had enabled by egg
// exports.static = true;

exports.next = {
  enable: true,
  package: '../lib/plugins/egg-nextjs',
};

exports.routerPlus = {
  enable: true,
  package: 'egg-router-plus',
};
