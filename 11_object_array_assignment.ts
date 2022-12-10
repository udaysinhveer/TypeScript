
var employee ={
    empname: "Uday veer",
    salary : 45000,
    technology : "Angular"
};

// object destructuring

 let  { empname, salary, technology} = employee;

 console.log(empname);
 console.log(salary);
 console.log(technology);
 
 // use loop

 for (const emp in employee) {
  console.log(emp);
 }

 // array assignment 

 var vaccines = ["Johnson & Johnson", "Pfizer", "sputnik"];
 vaccines.splice(0,0,"Covaxin");
 console.log(vaccines);

 // array destructuring
 
 let [vaccines1, vaccines2, vaccines3, vaccines4, vaccines5]=vaccines;
 console.log(vaccines1);
 console.log(vaccines2);
 console.log(vaccines3);
 console.log(vaccines4);
 console.log(vaccines5); //it will return undefined because vaccines5 variable have not value to assign
 
console.log("================ For loop on array ==================");


 for (let index = 0; index < vaccines.length; index++) {
    const element = vaccines[index];
    console.log(element);
 }