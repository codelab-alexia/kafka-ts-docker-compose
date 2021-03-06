import { KafkaClient, Producer, Consumer, Message } from 'kafka-node';

function newMessage(topic: string, payload: Record<string, any>) {
  return {
    topic,
    messages: JSON.stringify(payload)
  };
}

const client = new KafkaClient({
  kafkaHost: 'localhost:9092'
});

const producer = new Producer(client);

const messages = [
  newMessage('hackathon', {
    name: 'padathon',
    patrocinador: 'leite moça'
  }),
];

producer.on('ready', () => {
  producer.send(messages, (error, data) => {
    console.log(data);
  })
});

producer.on('error', (err) => {
  console.log(err);
});

