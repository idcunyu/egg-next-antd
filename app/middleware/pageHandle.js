module.exports = () => {
  // 若使用该中间件，须放在第一位
  return async function pageHandle(ctx, next) {
    const { req, res, app } = ctx;

    init(ctx, next);

    // redirectToWap(ctx, next);
    
    handleQuery(ctx, next);

    await next();
  };
};

// 必须
const init = (ctx, next) => {
  const { req, res, app } = ctx;
  res.statusCode = 200 // 必须
  res.userConfig = app.config // 获取配置
}

// 处理query
const handleQuery = (ctx, next) => {
  const { req, res, app } = ctx;
  // 处理query
  res.query = ctx.query
}

// 重定向到wap
// const redirectToWap = (ctx, next) => {
//   const { req, res, app } = ctx;
//   let ctxUrl = String(ctx.url || '')

//   if (ctxUrl.length > 1 && ctxUrl.substr(ctxUrl.length - 1, 1) == '/') {
//     ctx.url = ctxUrl.substring(0, ctxUrl.length - 1)
//   }

//   const userAgent = (req.headers['user-agent'] || '').toLowerCase();
//   const isWap = userAgent.match(/(iphone|ipod|ipad|android|windows phone|iemobile|wpdesktop)/);

//   if (isWap) {
//     ctx.redirect(`${app.config.wapDomain}${ctx.url}`)
//   }
// }
