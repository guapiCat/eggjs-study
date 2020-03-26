'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    /**
     * 查询个人信息
     */
    async getUserMsg(query) {
        const {
            ctx,
            service
        } = this;
        try {
            const results = await ctx.model.User.find({
                name: query.name,
            });
            let token = await service.actionToken.apply(results[0]) // 根据_id生成一个token
            return {
                token: token
            }
        } catch (err) {
            ctx.body = JSON.stringify(err);
        }
    }

    async addUser(query) {
        const {
            ctx,
            app
        } = this;
        console.log('添加query', query, typeof query);
        const results = new ctx.model.User(query);
        results.save();
        return results;
    }


}
module.exports = UserService;