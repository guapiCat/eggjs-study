'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    /**
       * 根据ID获取单个项目
       */
    async getUserMsg() {
        const { ctx, app } = this;
        try {
            const results = await ctx.model.User.find({ // Article为modal/article.js里面命名的名字
                name: 'naruto',
            });
            return results;
        } catch (err) {
            ctx.body = JSON.stringify(err);
        }
    }
}
module.exports = UserService;