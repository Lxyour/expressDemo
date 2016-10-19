var mongoose = require('mongoose');

//定义数据结构
var NewsSchema = new mongoose.Schema({
    title: {type : String},
    content: {type : String},
    createTime: {type: Date, default: new Date().getTime()}
});

//创建文档模型
var News = mongoose.model('News', NewsSchema);
module.exports = News;
