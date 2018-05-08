const express = require('express')
const Router = express.Router()
const utils = require('utility');
const models = require('./model')
const User = models.getModel('user')
const Chat = models.getModel('chat')
const _filter = {'pwd':0, '__v':0}
// Chat.remove({},function(e,d){})

Router.get('/list', function(req,res){
    // User.remove({},function(e,d){})
    const {type} = req.query
    User.find({type},function(err,doc){
        return res.json({code:0,data:doc})
    })
})

Router.get('/getmsglist', function(req,res){
    const user = req.cookies.userid
    // '$or:[{from:user,to:user}]'
    User.find({},function(e,userDoc){
        let users = {}
        userDoc.forEach(v=>{
            users[v._id] = {name:v.user,avatar:v.avatar}
        })
        Chat.find({'$or':[{from:user},{to:user}]},function(err,doc){
            if(!err){
                return res.json({code:0,msgs:doc,users:users})
            }
        })
    })
})

// 测试jsonp
Router.get('/getmsglist2', function(req,res){
    const user = req.cookies.userid
    // '$or:[{from:user,to:user}]'
    User.find({},function(e,userDoc){
        let users = {}
        userDoc.forEach(v=>{
            users[v._id] = {name:v.user,avatar:v.avatar}
        })
        Chat.find({'$or':[{from:user},{to:user}]},function(err,doc){
            if(!err){
                // return (callback + "(" + res.json({code:0,msgs:doc,users:users}) + ")")
                return res.jsonp({code:0,msgs:doc,users:users})
            }
        })
    })
})

Router.post('/readmsg', function(req,res){
    const userid = req.cookies.userid
    const {from} = req.body
    console.log(userid,from)
    Chat.update(
        {from,to:userid},
        {'$set':{read:true}},
        {'multi':true},
        function(err,doc){
        console.log(doc)
        if(!err){
            return res.json({code:0,num:doc.nModified})
        }
        return res.json({code:1,msg:'修改失败'})
    })
})

Router.post('/update',function(req,res){
	const userid = req.cookies.userid
	if (!userid) {
		return json.dumps({code:1})
	}
	const body = req.body
	User.findByIdAndUpdate(userid,body,function(err,doc){
		const data = Object.assign({},{
			user:doc.user,
			type:doc.type
		},body)
		return res.json({code:0,data})
	})
})

Router.post('/login', function(req,res){
    const {user, pwd} = req.body
    User.findOne({user,pwd:md5Pwd(pwd)},_filter, function(err, doc){
        if(!doc){
            return res.json({code:1,msg:'用户名或密码错误'})
        }
        console.log(doc._id)
        res.cookie('userid', doc._id)
        return res.json({code:0,data:doc})
    })
})
Router.post('/register', function(req,res){
    const {user,pwd,type} = req.body
    User.findOne({user},function(err,doc){
        if(doc){
            return res.json({code:1,msg:'用户名重复'})
        }
        const userModel = new User({user,type,pwd:md5Pwd(pwd)})
        userModel.save(function(e,d){
            if(e){
                return res.json({code:1,msg:'后端出错了'})
            }
            const {user,type,_id} = d;
            res.cookie('userid',_id)
            return res.json({code:0,data:{user,type,_id}})
        })
    })
})
Router.get('/info', function(req,res){
    // return res.json({code: 1})
    const {userid} = req.cookies
    if(!userid){
        // 用户有没有cookie
        return res.json({code: 1})
    }
    User.findOne({_id:userid}, _filter, function(err,doc){
        if(err){
            return res.json({code:1, msg:'后端出错了'})
        }
        if(doc){
            res.json({code: 0, data: doc})
        }
    })
})

function md5Pwd(pwd){
    const salt = 'imooc_is_good_3957x8yza6!@#IUHJh~~~'
    return utils.md5(utils.md5(pwd+salt))
}

module.exports = Router