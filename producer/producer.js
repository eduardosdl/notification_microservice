const { Kafka } = require('kafkajs');
const { randomUUID } =  require('node:crypto');

async function bootstrap() {
  const kafka = new Kafka({
    clientId: 'producer-message',
    brokers: ['localhost:9092'],
  });

  const producer = kafka.producer();

  await producer.connect();
  await producer.send({
    topic: 'notification',
    messages: [
      {
        value: JSON.stringify({
          content: 'Nova solicitação de amizade!',
          category: 'social',
          recipientId: randomUUID(),
        })
      },
    ],
  });

  await producer.disconnect();
}

bootstrap();