const JWT = require('jsonwebtoken');

module.exports = (option, app) => {
  return async function jwt(ctx, next) {
    const token = ctx.request.header.authorization;
    console.log('获取到了token', token);
    if (!token) {
      if (ctx.path === '/user') { // 接口白名单
        await next();
      } else {
        ctx.throw(401, '未登录， 请先登录');
      }
    } else {
      let decode;
      try {
        // 验证当前token
        decode = JWT.verify(token, option.secret);
        console.log('解密decode=====', decode);
        if (!decode || !decode.data.name) { // 找不到用户名时
          ctx.throw(400, '没有权限，请登录');
        }
        if (Date.now() - decode.expire > 0) {
          ctx.throw(400, 'Token已过期');
        }
        await next();
        // const user = await ctx.model.User.find({
        //   userName: decode.userName,
        // });
        // if (user) {
        //   await next();
        // } else {
        //   ctx.throw('401', '用户信息验证失败');
        // }
      } catch (e) {
        console.log(e);
      }
    }
  };
};