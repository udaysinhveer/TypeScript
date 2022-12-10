// function doubleMe (x:number); // function declaration
// function doubleMe (x:string);
// function doubleMe (x:string);
// below example of function overloading
function doubleMe(x) {
    if (x && typeof x === "number") { // checking para is a number or not
        console.log(x * 2);
    }
    else if (x && typeof x === "string") { // checking para is a string or not
        console.log(x + " " + x);
    }
    else if (Array.isArray(x)) {
        return x.map(function (element) { return console.log(element + " " + element); });
    }
}
doubleMe(2); // function calling
doubleMe("Uday");
doubleMe(["Udaysinh", "Nikita", "Anjali", "Rutuja", "Nikhil"]);
// rest parameter 
var product = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 1;
    for (var index = 0; index < nums.length; index++) {
        console.log(nums[index]);
        result *= nums[index];
    }
    return result;
};
console.log(product(2, 3, 4, 5));
var hello = function (name) {
    return "Hello" + name;
};
console.log(hello(" Udaysinh veer"));
var multiply = function (num1, num2) {
    return num1 * num2;
};
console.log(multiply(2, 7));
