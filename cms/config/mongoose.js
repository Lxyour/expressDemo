var mongoose = require('mongoose');
var config  = require('./config')

//使用mongoose连接数据库
module.exports = function () {
    //mongoose.Promise = global.Promise;
    var db = mongoose.connect(config.mongodb);
    //require('../app/models/news.server.model')

    return db;
}
