const Axios = require('axios');

module.exports = () => {
  return async function dataHandle(ctx, next) {
    const { req, res, app } = ctx;

    // 获取数据
    // await Axios.all([
    //   Axios.get(`${app.config.strapiPath}/frags`, {params: {
    //     'category.code': 'footer-code',
    //     _sort: 'sort:asc',
    //   }}),
    //   Axios.get(`${app.config.strapiPath}/frags`, {params: {
    //     'category.code': 'header-code',
    //     _sort: 'sort:asc',
    //   }}),
    // ]).then(Axios.spread(({data: data1}, {data: data2}) => {
      
    //   res.locals = {
    //     ...res.locals,
    //     footerData: data1 || [],
    //     headerData: data2 || [],
    //   }
    // })).catch((err) => {
    //   console.log(err);
    // })

    await next();
  };
};
