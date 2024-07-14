const {kafka} = require("./client"); 


async function init(){
    const admin = kafka.admin();
    console.log('Admin connection');
    admin.connect();
    console.log("Admin connected");



await admin.createTopics({
    topics:[{
        topic:'rider-updates',
        numPartitions:2,


    }]
});
console.log("Topic created success");
console.log("Disconnecting admin");
await admin.disconnect();
}

init();