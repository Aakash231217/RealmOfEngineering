const {kafka} = require('./client');

async function init(){
     const producer = kafka.producer();
     console.log('Connecting producer');
     await producer.connect();
     console.log("producer connected successful");

     await producer.send({
        topic:'rider-updates',
        messages:[
            {   
                partition:0,
                key:'location-update',
                value:JSON.stringify({name:'Tony Stark',loc:"South"}),
            },
        ],
     });
   await producer.disconnect();
}

init();
