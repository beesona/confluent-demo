const kafka = require('./kafka-client');
const topic = process.env.KAFKA_TOPIC;

async function send() {
  const producer = kafka.producer();
  await producer.connect();

  let resp = await producer.send({
    topic,
    messages: [
      {
        value: 'should error out!'
      }
    ]
  });

  console.log(`Send message:`, resp);

  await producer.disconnect();
}

send().catch(console.error);
