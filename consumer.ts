import { KafkaClient, Producer, Consumer, Message } from 'kafka-node';

const client = new KafkaClient({
  kafkaHost: 'localhost:9092'
});

const consumer = new Consumer(
  client, 
  [ 
    { topic: 'hackathon', partition: 0 } 
  ], 
  {}
);

consumer.on('message', (msg: Message) => {
  console.log(JSON.parse(msg.value as string));
});

consumer.on('error', (err) => console.log(err));