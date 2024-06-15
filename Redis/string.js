const client = require('./client');

async function init(){
   // if you wanna expire some key after a particular time
    //await client.expire("msg:6",10);
   {/* await client.lpush("messages",1);
    await client.lpush("messages",2);
    await client.lpush("messages",3);
    await client.lpush("messages",4); */}
    const result =  await client.xadd('msg:6');
    console.log("Result->",result);
}
init();
