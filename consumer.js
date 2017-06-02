
var kafka = require('kafka-node')














var options = {
    groupId: 'test',
// Auto commit config
    autoCommit: true,
    autoCommitMsgCount: 100,
    autoCommitIntervalMs: 5000,
// Fetch message config
    fetchMaxWaitMs: 100,
    fetchMinBytes: 1,
    fetchMaxBytes: 10000000,
};

// {fromOffset: true, fetchMaxBytes: 10000000,fetchMinBytes :1,encoding:'utf8',fromBeginning: false,fetchMaxBytes :1000000 },

var Consumer = kafka.Consumer
var client = new kafka.Client("59.127.187.54:2181")
var consumer = new Consumer(
  client,
  [{ topic: 'test', partition: 0,offset:1 }],
  options
);
// console.log(consumer);


client.on('ready', function () { console.log('client ready!') })





consumer.on('message', function (message) {

    //   var data=JSON.stringify(message)
  console.log("received message", message);
  
});



consumer.addTopics([
  { topic: 'test', partition: 0, offset: 0,}
], () => console.log("topic added"));



// consumer.on('ready', function () { console.log('consumer ready!') })



