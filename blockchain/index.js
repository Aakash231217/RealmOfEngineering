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


function callbackFunction(res){
    dnfejnfejfnef
}
mainFunc(callbackFunction);
