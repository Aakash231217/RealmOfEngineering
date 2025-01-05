let numbers = [14,34,674,4694,3000];
numbers.sort();
console.log(numbers);

const num = ["7C1" , "9B2" , "6C2" , "5C1"];
num.sort((a,b)=>{
    return a-b;
})
console.log(num);

const products = [{
    productID:1, productName:"p1", price:600
}, {
    productID:2,productName:"p2", price:700
}, {
    productID:3, productName:"p3", price:100
}]

//low to High
const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price-b.price;
})
console.log(lowToHigh);



let day=14;
switch(day){
    case 14:console.log("Sunday");
    break;
    case 15:console.log("Monday");
    break;
    case 26:console.log("Tuesday");
    break;

}

const nums = [3,4,6,1,8];
const squareNumbers = nums.map((squares)=>{
    return squares+3;
})
console.log(squareNumbers);

const users = [
    {firstName:"aakasSingh", age:21},
    {firstName:"MayurSingh", age:22},
    {firstName:"Jyoti", age:23},
]

const userNames = users.map((user)=>{
    return user.firstName;
})
console.log(userNames);

const cricket = [11,89,264,56];
const isEven = function(cricket){
    return 
}
const evenNumbers = cricket.filter(isEven);
console.log(evenNumbers);


function mainFunc(callback){
    console.log("Start the operation");
    setTimeout(function(){
        callback("Operation completed");
    },5000);
}




{/*const GITHUB_API = "https://api.github.com/users/Aakash231217";
const user = fetch(GITHUB_API);

user(function(data){
   console.log(data);
})   */}

//const p = new Promise((resolve)=>{
  //  setTimeout(()=>{
    //    resolve("Promise resolved");
    //},10000);
//})

{/*async function getData(){
    console.log("Hello World!");
    const val = await p;
    console.log("Resolve hua");
    console.log(val);

}
getData();
*/}


const myArray = ["value1","value2","value3"];
let myVar1 = myArray[0];
let myVar2 = myArray[1];
console.log("FirstArray",myVar1);
console.log("SEcond Array",myVar2);

const myArray1 = ["value10","value2","value3","value4","value5","value6"];
let [myVar, myVar3,myVar4] = myArray1;
console.log(myVar1,myVar3,myVar4);


let[...newAk2]=myArray1;
console.log(newAk2);


const myArray4 = new Array(10).fill(83);
console.log(myArray4);

let string3 = "17";
let string4 = "10";
let fullname =string3 + +string4;
console.log(typeof fullname);


const numbersss = new Set([1,"2","2",34,5,35,432]);
console.log(numbersss);
numbersss.add(97);
numbersss.add(49);

console.log(numbersss);
if(numbersss.has(35)){
    console.log("PResent");
}else{
    console.log("Not present");
}

const obj1 = {a:1};//743gr3uu23   ---> Javascript compiler-> Memory [743gr3uu23 ];
const obj2 = {a:1};//85t48394r3   ---> Javascript compiler-> Memory[85t......];
const obj3 = obj1;//743gr3uu23   ----> Javscript compiler ---> Memory[743gr.....]'
const setting = new Set();
setting.add(obj1);
setting.add(obj2);
setting.add(obj3);
console.log(setting);
console.log(setting.size);




function myFunc2(name){
   console.log("inside my function");
   console.log(`your name is ${name}`);
}
function myFunc(callback){
    console
}


function foobar(){
    let ak=1;
    function inner(){
        return ak;
    }
    return inner;
}
let get_func = foobar();
console.log(get_func());

const numm = [1,2,3,4,5,6,7];
const sum = numm.reduce((accumulator,current)=>{
    return accumulator+current;
},10);
console.log(sum);

//accumulator, currentValue, return
//1               2           3
//3               3           6
//6              4            10
//10              5           15
//15             6            21
//21             7            28


 const myObject = {
    city:'Bangalore',
    welcome(){
        console.log(`Greetings from ${this.city}`);
    },
 };
 myObject.welcome();


 const user={
    firstName:"Aakash",
    lastName:"Singh",
    email:"rktak@gmail.com",
    age:21,
    address:"House Number B1",
    about:function(){
        return `${this.firstName} is ${this.age}`
    },
    is18:function(){
        return this.age>=18;
    }
 }
 const aboutUser = user.about();
 console.log(aboutUser);

 const obj11={
    key1:"value1",
    key2:"value2",
 }
 const obj22 = {
     key3:"value3",
 }
 console.log(obj22.key3);


 const obj33={
    key4:"value5",
    key5:"value6",
 }
 const obj44 = Object.create(obj33);
 obj44.key7="value8";
 console.log(obj44.key4);
 console.log(obj44.__proto__);


 function createUser(firstName, lastName, email,age,address){
    const user = Object.create(createUser.prototype);
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    return user;
 }

 createUser.prototype.about=function(){
    return `${this.firstName} is ${this.age} years old`;
 }

 createUser.prototype.is18=function() {
    return this.age>=18;
 }

 const user1 = createUser('aakash','singh','rktak@gmail.com',21,'myaddress');
 console.log(user1);
 console.log(user1.is18());

 //dsa in js
 [1,2,34,3,5,3443];
 target = 34;

 function linearSearch(arr,target){
    for(let i in arr){
        if(arr[i]===target)return i;
    }
    return -1;
 }

 console.log(linearSearch([1,2,3,5],5));


 //binary search 

 //[4,5,7,9,10,13,16,17]
 

//target - 16 
//mid - 10<16    --->
//   <----

function binarySearch(arr,target){
    let start = 0;
    let end = arr.length-1;

    while(start<=end){
        let middle = Math.floor((start+end)/2);
        if(arr[middle]<target){
            //search the right half
            start = middle+1;
        }
        else if(arr[middle]>target){
            end=middle-1;
        }
        
        else {
            return middle;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,5,9],9));


function rotateArry(arr, rotateBy){
    const n = arr.length;
    rotateBy%=n;

    return arr.slice(rotateBy).concat(arr.slice(0,rotateBy));
}



function factorial(n){
    if(n==0 || n==1)return 1;
   else return n*factorial(n-1);
}
let num1=7;
let result = factorial(num1);
console.log("The given factorial is",result);








