const net = require('net');
const server = net.createServer(connection=>{
   console.log('Client connected....');
   connection.on('data',data=>{
    console.log('=>',data.toString())
   })
})

server.listen(8000,()=>console.log(`Custom Redis server running on port 8080`));