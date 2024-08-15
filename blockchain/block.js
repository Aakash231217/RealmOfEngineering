const crypto = require('crypto');
const readline = require('readline');

function hashGenerator(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
}

class Block {
    constructor(data, hash, prevHash) {
        this.data = data;
        this.hash = hash;
        this.prevHash = prevHash;
    }
}

class Blockchain {
    constructor() {
        const hashLast = hashGenerator('gen_last');
        const hashStart = hashGenerator('gen_hash');
        const genesis = new Block('gen-data', hashStart, hashLast);
        this.chain = [genesis];
    }

    addBlock(data) {
        const prevHash = this.chain[this.chain.length - 1].hash;
        const hash = hashGenerator(data + prevHash);
        const block = new Block(data, hash, prevHash);
        this.chain.push(block);
    }
}


const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question('How many blocks you want to create', (numBlocks)=>{
    const bc = new Blockchain();
    for(let i=1;i<=numBlocks;i++){
        bc.addBlock(`Block ${i}`);
    }
    bc.chain.forEach(block=>{
        console.log(block);
    })
    rl.close();
})

