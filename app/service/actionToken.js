const { Service } = require('egg')
const JWT = require('jsonwebtoken');

class ActionToken extends Service {
  async apply(data) {
    console.log('获取到data', data);
    const { ctx } = this;
    return JWT.sign({
      data,                                         // 加密数据
      exp: Math.floor(Date.now() / 1000 + (60 * 60))      // 过期实践
    }, ctx.app.config.jwt.secret)                         // 加密密钥
  }  
}
module.exports = ActionToken