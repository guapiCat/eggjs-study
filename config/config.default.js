/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1585119297235_1331';

  // add your middleware config here
  config.middleware = [];

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
