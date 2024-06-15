const {Queue} = require ('bullmq');
const notificationQueue = new Queue('email-queue');

async function init(){
   const res = await notificationQueue.add("email to Aakash",{
        email:"aakash.singh",
        subject: "Welcome Mess",
        body: "Hey Aakash, Welcome"
    });
    console.log("Job added to queue", res.id);
}
init();
