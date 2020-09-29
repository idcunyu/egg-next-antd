const Controller = require('egg').Controller;
const Axios = require('axios');

class SitemapController extends Controller {
  // sitemap
  async all() {
    const { ctx, app, service, config, logger } = this
    const { req, res } = ctx

    let sitemap = ''
    const domain = config.pcDomain || 'https://www.xxx.com'

    // 固定页面
    const staticPageList = [
      '/',
    ]
    staticPageList.map((item) => {
      sitemap += `${domain}${item}\n`
    })

    // 动态页面 - 文章列表页

    ctx.body = sitemap
  }
}

module.exports = SitemapController;
