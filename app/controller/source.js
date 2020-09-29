

const Controller = require('egg').Controller;

class SourceController extends Controller {
  // strapi图片
  async image() {
    const { ctx, app, service, config, logger } = this
    const { req, res } = ctx;

    let imageUrl = config.strapiAssetsPath + ctx.url
    ctx.redirect(imageUrl);
  }
}

module.exports = SourceController;
