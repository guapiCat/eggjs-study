/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require('path');

module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1585119297235_1331';

  // 添加中间件
  config.middleware = ['errorHandler', 'jwt'];

  // 设置token防止被xss攻击
  config.security = {
    csrf: {
      // headerName: 'x-csrf-token', // 自定义请求头
      enable: false, // 默认关闭
    }
  }

  // 设置hash长度
  config.bcrypt = {
    saltRounds: 10
  }

  // 设置允许跨域、允许请求的类型
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  // jwt密钥
  config.jwt = {
    secret: '123456',
  };

  // 设置swagger
  config.swaggerdoc = {
    dirScanner: './app/controller', // 配置自动扫描的控制器路径
    apiInfo: {
      title: 'EggJs', // 接口文档的标题
      description: 'eggjs的swagger文档', // 接口文档描述
      version: '1.0.0', // 接口文档版本
    },
    schemes: ['http', 'https'], // 配置支持的协议
    consumes: ['application/json'], // 指定处理请求的提交内容类型（Content-Type），例如application/json, text/html
    produces: ['application/json'], // 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回
    securityDefinitions: { // 配置接口安全授权方式
    },
    enableSecurity: false, // 是否启用授权，默认 false（不启用）
    // enableValidate: true,              // 是否启用参数校验，默认 true（启用）
    routerMap: true, // 是否启用自动生成路由，默认 true (启用)
    enable: true, // 默认 true (启用)
  };


  // 数据库配置
  exports.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/test1', // 你的数据库地址，test1是你数据库得名字
      options: {
        useNewUrlParser: true,
      },
    },
  };


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};