var express = require('express');
const userRouter = require('./user')

var app = express();
app.use('/user', userRouter)

app.listen(9093, function () {
    console.log('Example app listening on port 9093!');
});