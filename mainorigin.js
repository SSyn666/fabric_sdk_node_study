var co = require('co'); 
var fabricservice = require('./fabricservice.js') 
var express = require('express');
var app = express();
var cowid = "cow_001";
var machiningid = "machining_001";
var milk_bottle = "milk_bottle_001";
var cow_cc_name = "cc_dairyfarm";
var machining_cc_name = "cc_machining";
var milkbottle_cc_name = "cc_salesterminal";
var channelid = "";
app.get('/init', 
        function (req, res) { 
          co( function ＊ () { 
            var dairyfarminitresult = yield fabricservice.sendTransaction(cow_cc_name, "invoke", ["putvalue", cowid, "food"]); 
            var machinginginitresult = yield fabricservice.sendTransaction(cow_cc_name, "invoke", ["putvalue", machiningid, cowid]); 
            var salesterminalinitresult = yield fabricservice.sendTransaction(cow_cc_name, "invoke", ["putvalue", milk_bottle, machiningid]); 
            for (let i = 0; i ＜ chiancodequeryresutl.length; i++) { 
              res.send( dairyfarminitresult[i].toString( 'utf8' ) ); 
            } 
          }).catch((err) =＞ { res.send(err); }) 
          }
       ); 
// http://localhost:3000/dairyfarm?params=food 记录奶牛喂食物
// http://localhost:3000/dairyfarm?params=takeashower 记录奶牛洗澡
// http://localhost:3000/dairyfarm?params=takeawalk。记录奶牛散步
// 奶牛场的相关操作 
app.get('/dairyfarm', 
        function (req, res) { 
          co( function ＊ () { 
            var parm = req.query.parms; 
            var chiancodequeryresutl = yield fabricservice.sendTransaction(cow_cc_name, "invoke", [ "putvalue" , cowid , parm ]); 
            for (let i = 0; i ＜ chiancodequeryresutl.length; i++) { 
              res.send( chiancodequeryresutl[i].toString( 'utf8' ) ); 
            } 
          }).catch((err) =＞ { res.send(err); }) 
        }
       );
// http://localhost:3000/machinging?params=pasterisation 纪律加工厂消毒
// http://localhost:3000/machinging?params=canned 记录加罐装
// 加工车间的操作 
app.get('/machining', 
        function (req, res) { 
          co( function ＊ () { 
            var parm = req.query.parms; 
            var chiancodequeryresutl = yield fabricservice.sendTransaction(machining_cc_name, "invoke", ["putvalue", machiningid, parm]); 
            for (let i = 0; i ＜ chiancodequeryresutl.length; i++) { 
              res.send( chiancodequeryresutl[i].toString( 'utf8' ) );
            } 
          }).catch((err) =＞ { res.send(err); }) 
        }
       );
// http://localhost:3000/salesterminal?params=factory_time 记录出厂时间
// http://localhost:3000/salesterminal?params=distributton_time  记录发货时间
// http://localhost:3000/salesterminal?params=quality_guarantee_period_2021-10-09 记录有效期

// 销售终端的操作 
app.get('/salesterminal', 
        function (req, res) { 
          co( function ＊ () { 
            var parm = req.query.parms; 
            var chiancodequeryresutl = yield fabricservice.sendTransaction(milkbottle_ cc_name, "invoke", ["putvalue", milk_bottle, parm]); 
            for (let i = 0; i ＜ chiancodequeryresutl.length; i++) { 
              res.send( chiancodequeryresutl[i].toString( 'utf8' ) ); 
            } }).catch((err) =＞ { res.send(err); }) 
        }
       ); 
// http://localhost:3000/getmilhistory
// 客户端查询牛奶的历史 
app.get('/getmilhistory', 
        function (req, res) { 
          co( function ＊ () { 
            var chiancodequeryresutl = yield fabricservice.queryCc(milkbottle_cc_name, "invoke", ["getmilkhistory", milk_bottle, "a"], ) 
            for (let i = 0; i ＜ chiancodequeryresutl.length; i++) { 
              res.send( chiancodequeryresutl[i].toString( 'utf8' ) ); 
            } }).catch((err) =＞ { res.send(err); }) 
        }
       ); 
// 启动http服务 
var server = app.listen(3000, function () { 
  var host = server.address().address; 
  var port = server.address().port; 
  console.log('Example app listening at http://%s:%s', host, port); }); 
// 注册异常处理器 
process.on('unhandledRejection', function (err) { 
  console.error(err.stack); }); 
process.on(`uncaughtException`, console.error);​​
