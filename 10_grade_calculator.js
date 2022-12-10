alert("Welcome To grade Calculator");
var mathMarks = prompt("Please enter your Mathematics Marks");
var phyMarks = prompt("Enter Physics Marks");
var chemMarks = prompt("Enter Chemistry Marks");
var totalMarks = +(mathMarks) + +(phyMarks) + +(chemMarks);
var averageMarks = totalMarks / 3;
console.log("Your Marks Of Mathematics are : ".concat(mathMarks));
console.log("Your Marks Of Physics are : ".concat(phyMarks));
console.log("Your Marks Of Chemistry are : ".concat(chemMarks));
console.log("Your Total Marks are : ".concat(totalMarks));
console.log("Your average marks are: ".concat(averageMarks));
if (averageMarks > 90) {
    console.log("Your Grade is \"A\"");
}
;
if (averageMarks >= 70 && averageMarks <= 90) {
    console.log("Your Grade is \"B\"");
}
;
if (averageMarks < 70) {
    console.log("Your Grade is \"C\"");
}
;
