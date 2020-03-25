'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
    async index() {
        const { ctx } = this;
        const res = await ctx.service.user.getUserMsg();
        ctx.body = res; // 返回值显示
    }
}
module.exports = UserController;