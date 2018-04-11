var express = require('express');
const mongoose = require('mongoose');

// 链接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/imooc';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function(){
    console.log('mongo connect success');
});

const User = mongoose.model('user', new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
}))
// 新增数据
// User.create({
//     user: 'xiaohua',
//     age: 12
// }, function(err, doc){
//     if(!err){
//         console.log(doc);
//     }else{
//         console.log(err);
//     }
// })

// 新建app
// User.remove({age: 18}, function(err, doc){
//     console.log(doc);
// })
// User.update({user: 'xiaoming'},{'$set': {age:26}},function(err, doc){
//     console.log(doc)
// })
var app = express();
app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>');
});  

app.get('/data', function (req, res) {
    User.findOne({user: 'xiaoming'}, function(err,doc){
        res.json(doc);
    })
    // res.json({ name: 'imooc React app!!!', type: 'IT' });
});

app.listen(9093, function () {
    console.log('Example app listening on port 9093!');
});