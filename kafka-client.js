const { Kafka } = require('kafkajs');

const sasl = {
  username: process.env.KAFKA_APIKEY,
  password: process.env.KAFKA_SECRET,
  mechanism: 'plain'
};

module.exports = new Kafka({
  clientId: process.env.KAFKA_CLIENT_ID,
  brokers: [process.env.KAFKA_BROKER_URL],
  ssl: true,
  sasl
});
