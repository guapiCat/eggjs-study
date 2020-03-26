'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
    async index() {
        const { ctx } = this;
        const query = ctx.request.query;
        const res = await ctx.service.user.getUserMsg(query);

        // const hashName = await ctx.genHash(query.name);          // 使用hash加密一下

        // ctx.logger.error('======================日志========================')

        ctx.helper.success({
            ctx,
            res
        })
    }
    async addUser() {
        const { ctx } = this;
        const query = ctx.request.body;
        const res = await ctx.service.user.addUser(query);
        ctx.helper.success({ctx, res})
    }
}
module.exports = UserController;