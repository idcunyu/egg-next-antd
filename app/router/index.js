'use strict'

module.exports = app => {
  const { router, controller, middleware } = app
  // 获取中间件实例
  const pageHandle = middleware.pageHandle();
  const dataHandle = middleware.dataHandle();

  // PAGE
  router.get(['/'], pageHandle, dataHandle, controller.page.index.all)

}
