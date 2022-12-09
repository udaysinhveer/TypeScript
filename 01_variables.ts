
var num1: number= 10;
console.log(num1);

var s1 : string = "You are a creator of your destiny";
var s2 : string = `Powerful people makes places powerful`;
console.log(s1);
console.log(s2);

var b1: boolean = true;
var b2: boolean = false;
var b3: boolean;

console.log(b1);
console.log(b2);

function checkBoolean() {
    console.log(b3);
}checkBoolean() 


var a1: any = {
    productId: 2873,
    productName : 'iphone',
    productPrice : 90000,
}
console.log(a1);

// homogeneous - all data is a same type 

var arr1 : Array<string> = ['Uday', 'Nikita', 'Nikhil', "Suraj"]

// heterogeneous - we can store different type of data

var arr2 : Array<any> = ["uday", 200, 103, 'veer', 27, true];

console.log(arr2);



