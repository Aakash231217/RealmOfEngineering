
const { Worker } = require('bullmq');
const IORedis = require('ioredis');

// Setting up the Redis connection
const connection = new IORedis({
  host: '127.0.0.1', // Default host for Redis
  port: 6379,        // Default port for Redis
  maxRetriesPerRequest: null, // Important for blocking operations in BullMQ
  retryStrategy: times => Math.max(times * 100, 3000)
});

const sendEmail = () => new Promise((resolve) => setTimeout(resolve, 5000));

// Make sure to pass the connection option to the Worker
const worker = new Worker("email-queue", async (job) => {
    console.log(`Message Received ${job.id}`);
    console.log('Processing Message');
    console.log(`Sending Email to ${job.data.email}`);
    await sendEmail();
    console.log("Email Sent");
}, { connection });
