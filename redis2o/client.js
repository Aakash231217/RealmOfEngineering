const net = require('net');
const client = new net.Socket();

client.connect(8000, 'localhost', () => {
  console.log('Connected to server');
  client.write('Hello, server!');
});

client.on('data', (data) => {
  console.log('Received:', data.toString());
});

client.on('close', () => {
  console.log('Connection closed');
});