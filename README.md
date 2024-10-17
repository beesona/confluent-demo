# Kafka Producer and Consumers for Confluent Cloud

This is a simple producer and a consumer for connecting to Kafka Topics in Confluent Cloud.

## Prerequisites

- Node 20+
- Confluent Cloud Access

## Let's Go!

1. Log into Confluent Cloud and Create a new cluster.
2. Create a topic and add it to the KAFKA_TOPIC variable in the .env file.
3. Create an API Key and add it to the KAFKA_APIKEY and KAFKA_SECRET vars in the .env file.
4. Navigate to Cluster Settings and copy the Bootstrap URL to the KAFKA_BROKER_URL variable in the .env file.

- To start the consumer, run `node --env-file=.env consumer` in a terminal window.
- To send a message, run `node --env-file=.env producer` in a separate terminal window.
- watch the consumer terminal for the message to appear or check it out in the Confluent Cloud console.
