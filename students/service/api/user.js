var pool = require('../db/pool');
var express = require('express');
var router = express.Router();
//登录
router.post("/all/in",(req,res)=>{
     var json=req.body.params;
     pool.conn({
          sql:"select * from login where user=? and pwd=?",
          arr:[json.xuehao,json.mima],
          success(data){
               if(data.length){
                    var result=data[0];
                    result["tip"]="登录成功";
                    result.pwd="";
                    res.send(result);
               }else{
                    res.send("学号,工号或密码错误!!!");
               }
          },
          error(err){
               res.send(err);
          }
     })
})
//注册
router.post('/all/up', (req, res) => {
     var json=req.body.params;
     pool.conn({
          sql:"select user from login where user=?",
          arr:[json.xuehao],
          success(data){
               if(data.length){   
                    res.send("学号或工号已存在!");
               }else{
                    pool.conn({
                         sql:"insert into login(user,pwd,logintype) values(?,?,?)",
                         arr:[json.xuehao,json.mima,json.logintype],
                         success(data){
                              res.send("注册成功!!");
                         },
                         error(err){
                              res.send(err);
                         }
                    })
               }
          },
          error(err){
               res.send(err);
          }
     })
});

module.exports = router;