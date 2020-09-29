'use strict';

const Controller = require('egg').Controller;
const Axios = require('axios');

class IndexController extends Controller {
  // 首页
  async all() {
    const { ctx, app, service, config, logger } = this
    const { req, res } = ctx

    await Axios.all([
      Axios.get(config.strapiPath + '/frags', {params: {
        'category.code': 'numberIndexCxrs',
        _sort: 'sort:asc',
        _limit: 1,
      }}),
      Axios.get(config.strapiPath + '/frags', {params: {
        'category.code': 'indexFaq',
        _sort: 'sort:asc',
        _limit: 4,
      }}),
      Axios.get(config.strapiPath + '/articles', {params: {
        _sort: 'created_at:desc',
        _limit: 7,
      }})
    ]).then(Axios.spread(({data: data1}, {data: data2}, {data: data3}) => {
        res.locals = {
          ...res.locals,
          searchNum: data1[0] ? data1[0].description : 0,
          faqList: data2 || [],
          indexNewsList: data3 || [],
        }
    })).catch(err => {
      ctx.redirect(`/error`);
    })

    ctx.body = await this.app.next.render(req, res, '/')
  }
}

module.exports = IndexController;
