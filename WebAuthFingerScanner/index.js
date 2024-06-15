const express  = require('express')
const cors = require('cors');
const crypto = require('node:crypto');
const {generateRegistrationOptions, verifyRegistrationResponse, generateAuthenticationOptions} = require('@simplewebauthn/server');

if(!globalThis.crypto) {
    globalThis.crypto = crypto;
}
const PORT = 5000
const app = express();
app.use(cors());
app.use(express.static('./public'))

app.use(express.json())

const userStore={}
const challengeStore = {};

app.post('/register',(req,res)=>{
    const {username,password} = req.body;
    const id = `user_${Date.now()}`
    const user = {
        id,
        username,
        password,

    }
    userStore[id] = user
    console.log(`Register Successful`, userStore[id])
    return res.json({id})
})

app.post('/register-challenge',async(req,res)=>{
   const { userId } = req.body
   if(!userStore[userId]) return res.status(404).json({error:'user not found'})
   const user = userStore[userId]
const challengePayload = await generateRegistrationOptions({
    rpID:'localhost',
    rpName:'My Localhost Machine',
    userName: user.username,

})
   challengeStore[userId] = challengePayload.challenge;
   return res.json({options:challengePayload})
})
app.post('/register-verify',async(req,res)=>{
    const {userId, cred} = req.body
    if(!userStore[userId]) return res.status(404).json({error:'user not found!'})
    const user = userStore[userId];
    const challenge = challengeStore[userId];
    const verificationResult = await verifyRegistrationResponse({
        expectedChallenge:challenge,
        expectedOrigin:'http://localhost:5000',
        expectedRPID:'localhost',
        response: cred,

    })
    if(!verificationResult.verified) return res.json({error:'could not verify'})
    userStore[userId].passkey = verificationResult.registrationInfo
    return res.json({verfiied:true});
    
})

app.post('/login-challenge',async(req,res)=>{
    const {username} = req.body;
    if(!userStore[userId]) return res.status(404).json({error:'user not verfied'})
    const opts = await generateAuthenticationOptions({
    rpID:'localhost',

    })
    challengeStore[userId] = opts.challenge
    return res.json({options:opts})
})
app.listen(PORT,()=>console.log(`Server started on PORT ${PORT}`))