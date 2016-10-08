var mongoose = require('mongoose');
var config  = require('./config')

module.exports = function () {
    mongoose.Promise = global.Promise;
    var db = mongoose.connect(config.mongodb);
    require('../app/models/news.server.model')

    return db;
}
