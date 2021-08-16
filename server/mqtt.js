/*
 * @Author: your name
 * @Date: 2021-08-16 15:13:35
 * @LastEditTime: 2021-08-16 15:14:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\isearch\server\mqtt.js
 */
const mosca = require('mosca');
const MqttServer = new mosca.Server({
  port: 1883
});

MqttServer.on('clientConnected', function(client){
    console.log('client connected', client.id);
});

/**
 * 监听MQTT主题消息
 **/
MqttServer.on('published', function(packet, client) {
    var topic = packet.topic;
    console.log('message-arrived--->','topic ='+topic+',message = '+ packet.payload.toString());

});

MqttServer.on('ready', function(){
    console.log('mqtt is running...');
    //MqttServer.authenticate = authenticate;
});