var express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const models = require('./model')
const Chat = models.getModel('chat')
const path = require('path')
var app = express();

// work width express
const server = require('http').Server(app)

const io = require('socket.io')(server)
io.on('connection', function(socket){
    socket.on('sendmsg', function(data){
        const {from,to,msg} = data
        const chatid = [from,to].sort().join('_')
        Chat.create({chatid,from,to,content:msg},function(err,doc){
            io.emit('recvmsg', Object.assign({},doc._doc))
        })
        // console.log(data)
        // io.emit('recvmsg', data)
    })
})

const userRouter = require('./user')

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)
// 1.购买域名
// 2.DNS解析到你的服务器IP
// 3.安装nginx
// 4.使用pm2管理node进程
app.use(function(req,res,next){
    if(req.url.startsWith('/user/') || req.url.startsWith('/static/')){
        return next()
    }
    console.log('path resolve',path.resolve('build/index.html'))
    return res.sendFile(path.resolve('build/index.html'))
})
app.use('/',express.static(path.resolve('build')))

server.listen(9093, function () {
    console.log('Node app start at port 9093!');
});