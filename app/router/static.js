'use strict'

module.exports = app => {
  const { router, controller } = app

  // strapi资源(图片等)
  router.get(/^\/uploads\/*/, controller.source.image)

  // 生成sitemap
  router.get('/sitemap.txt', controller.sitemap.all)
}
