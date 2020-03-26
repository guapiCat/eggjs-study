'use strict';

module.exports = {
  authorize_login: {
    login: {
      type: 'string',
      required: true,
      description: '登录账号',
      example: 'yaozihao'
    },
    password: {
      type: 'string',
      required: true,
      description: '登录密码',
      example: '123456'
    },
  },
};