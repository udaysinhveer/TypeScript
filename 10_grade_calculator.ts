alert("Welcome To grade Calculator")

var mathMarks:any  = prompt("Please enter your Mathematics Marks");
var phyMarks:any  = prompt("Enter Physics Marks");
var chemMarks:any = prompt("Enter Chemistry Marks");

var totalMarks : any = +(mathMarks) + +(phyMarks) + +(chemMarks);


var averageMarks = totalMarks/3

console.log(`Your Marks Of Mathematics are : ${mathMarks}`);
console.log(`Your Marks Of Physics are : ${phyMarks}`);
console.log(`Your Marks Of Chemistry are : ${chemMarks}`);

console.log(`Your Total Marks are : ${totalMarks}`);
console.log(`Your average marks are: ${averageMarks}`);


if (averageMarks>90) {
    console.log(`Your Grade is "A"`);
};

if (averageMarks>=70 && averageMarks<=90){
    console.log(`Your Grade is "B"`);
};

 if  (averageMarks<70) {
    console.log(`Your Grade is "C"`);
};