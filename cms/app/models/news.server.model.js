var mongoose = require('mongoose');

var NewsSchema = new mongoose.Schema({
    title: {type : String},
    content: {type : String},
    creatTime: {type: Date, default: Date.now}
});

mongoose.model('News', NewsSchema);
