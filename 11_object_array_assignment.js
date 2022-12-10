var employee = {
    empname: "Uday veer",
    salary: 45000,
    technology: "Angular"
};
// object destructuring
var empname = employee.empname, salary = employee.salary, technology = employee.technology;
console.log(empname);
console.log(salary);
console.log(technology);
// use loop
for (var emp in employee) {
    console.log(emp);
}
// array assignment 
var vaccines = ["Johnson & Johnson", "Pfizer", "sputnik"];
vaccines.splice(0, 0, "Covaxin");
console.log(vaccines);
// array destructuring
var vaccines1 = vaccines[0], vaccines2 = vaccines[1], vaccines3 = vaccines[2], vaccines4 = vaccines[3], vaccines5 = vaccines[4];
console.log(vaccines1);
console.log(vaccines2);
console.log(vaccines3);
console.log(vaccines4);
console.log(vaccines5); //it will return undefined because vaccines5 variable have not value to assign
console.log("================ For loop on array ==================");
for (var index = 0; index < vaccines.length; index++) {
    var element = vaccines[index];
    console.log(element);
}
