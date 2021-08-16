/*
 * @Author: your name
 * @Date: 2021-08-16 15:14:46
 * @LastEditTime: 2021-08-16 15:28:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\isearch\src\mqtt\index.js
 */
var mqtt  = require('mqtt');
//var client  = mqtt.connect('mqtt://test.mosca.io');
//var client  = mqtt.connect('mqtt://192.168.103.237');
//var client  = mqtt.connect('mqtt://m2m.vicbang.com',{
//    username:'13800000000',
//    password:'123456',
//    clientId:'app_13800000000'
//});

  var client  = mqtt.connect('mqtt://localhost',{
    username:'username',
    password:'password',
    clientId:'app_13800000000_0'
  });

  client.on('connect', function () {
    console.log('connected.....');
    client.subscribe('mqtt/demo');
    client.publish('mqtt/demo', 'Hello mqtt');
  });

  client.on('message', function (topic, message) {
    // message is Buffer
    console.log('==topic==',topic);
    console.log('==message==',message.toString());
    //client.end();
  });