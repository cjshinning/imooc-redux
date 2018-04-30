const mongoose = require('mongoose');
// 链接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/imooc-chart';
mongoose.connect(DB_URL);
// mongoose.connection.on('connected', function(){
//     console.log('mongo connect success');
// });

const models = {
    user: {
        'user': {type: String, require: true},
        'pwd': {type: String, require: true},
        'type': {type: String, require: true},
        // 头像
        'avatar': {type: String},
        // 个人简介或职位简介
        'desc': {type: String},
        // 职位名
        'title': {type: String},
        // 如果是boss，还有两个字段
        'money': {type: String},
        'company': {type: String}
    },
    chart: {

    }
}

for(let m in models){
    // console.log(m);
    // console.log(models[m]);
    mongoose.model(m,new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: function(name){
        return mongoose.model(name)
    }
}