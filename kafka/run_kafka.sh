#!/bin/bash

# Replace <PRIVATE_IP> with your actual private IP address
PRIVATE_IP="192.168.43.20"

docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=${PRIVATE_IP}:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://${PRIVATE_IP}:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
