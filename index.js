import OpenAI from "openai";
import readlineSync from "readline-sync";
import dotenv from "dotenv";

dotenv.config();



//tools 

function getWeatherDetails(city=''){
    if(city.toLowerCase()==='patiala')return '10*C';
    if(city.toLowerCase()==='delhi')return '15*C';
    if(city.toLowerCase()==='mumbai')return '20*C';
    if(city.toLowerCase()==='bangalore')return '25*C';
}

const tools = {
    "getWeatherDetails":getWeatherDetails,
}

{/*const user="Hey, What is the weather of Patiala"
client.chat.completions.create({
    model:"gpt-4",
    messages:[{role:'user',content:user}],
}).then(e=>{
    console.log(e.choices[0].message.content)
})*/}


const SYSTEM_PROMPT=`You are an AI Assistany with START, PLAN, ACTION, Observation and Output State.
Wait for the user prompt and first PLAN using available tools.
After planning, Take the action with appropriate tools and wait for Observation based  on the action.
Once you get the observations, Return the AI response based on START prompt and observations.

Strictly follow the JSON output format as in examples
Available Tools:
- function getWeatherDetails(city:string):string
getWeatherDetails is a function that accepts city name as string and returns the weather details

Example:
START
{"type":"user", "user":"What is the sum of weather of patiala and delhi?" }
{"type":"plan", "plan":"I will call the getWeatherDetails for patiala." }
{"type":"action", "function":"getWeatherDetails,"input":"patiala" }
{"type":"observation", "observation":"10*C" }
{"type":"plan", "plan":"I will call getWeatherDetails for Delhi" }
{"type":"action", "function":"getWeatherDetails,"input":"delhi" }
{"type":"observation", "observation":"15*C" }
{"type":"output", "output":"The sum of weather of patiala and delhi is 25*C" }
`

{/*const user="Hey what is the weather of Patiala"


async function chat(){
const result= await client.chat.completions.create({
    model:'gpt-4o',
    messages:[
        {"role":"system",content:SYSTEM_PROMPT},
        {
            role:'developer',
            content:
            '{"type":"plan", "plan":"I will call the getWeatherDetails for patiala." }'
        },
        {
            role:'developer',
            content:
            '{"type":"observation", "observation":"10*C" }' 
        },
        {role:'user', content:user}],
});
 console.log(result.choices[0].message.content);
}

chat();*/}


const messages = [{role:'system',content:SYSTEM_PROMPT}];
while(true){
    const query = readlineSync.question(">>: ");
    const q = {
        type:'user',
        user:query,
    };
    messages.push({"role":"user",content:JSON.stringify(q)});

    while(true){
        const chat = await client.chat.completions.create({
            model:'gpt-4o',
            messages:messages,
            response_format:{type:'json_object'}
        });
        const results  = chat.choices[0].message.content;
        messages.push({role:'assistant',content:results})

        console.log('--------------------AI SAYS-------------------');
        console.log(results);
        console.log('--------------------AI ENDS-------------------');
        const call = JSON.parse(results);

        if(call.type=='output'){
            console.log('Bot says',call.output);
            break;
        }else if(call.type=='action'){
            const fn = tools[call.function];
            const observation =fn(call.input);
            const obs={"type":"observation","observation":observation}; 
            messages.push({role:'developer',content:JSON.stringify(obs)});
        }
    }
}