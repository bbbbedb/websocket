var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    client = new kafka.Client('59.127.187.54:2181'),
    producer = new Producer(client),
    payloads = [
        { topic: 'test1',partition:0, messages: ['this is a test'] }
    ];

producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
        console.log(err || data);
        client.close();
    });
});

producer.on('error', function (err) {})