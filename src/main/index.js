'use strict';

const { app, hideInternalModules } = require('electron');
hideInternalModules(); // 禁用旧版的API


// 全局配置选项
const options = require('./config');

// 日志记录模块
Object.assign(options, {
  logger: require('./log')
});

global.OPTIONS = options;

// 创建窗口
require('./window');
