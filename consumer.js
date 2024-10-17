const kafka = require('./kafka-client');
const topic = process.env.KAFKA_TOPIC;

async function receive() {
  const consumer = kafka.consumer({ groupId: process.env.KAFKA_CONSUMER_GROUP_ID });
  await consumer.connect();
  console.log('Connected to Kafka');

  await consumer.subscribe({ topic, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Received message:`, {
        value: message.value.toString(),
        headers: message.headers,
        topic: topic,
        partition: partition,
        offset: message.offset
      });
    }
  });
}

receive().catch(console.error);
