var courses: any = ["Angular", "Python", ".Net"]
courses.push("Java");
courses.push(225)

for (let index = 0; index < courses.length; index++) {
    console.log(courses[index]);   
}

var [a, b, c, d]=courses;
console.log(a);
console.log(b);
console.log(c);
console.log(d);


var std = {
    firstName: "Jack",
    lastName: "Sparrow"
}

var {firstName: userFirstname, lastName: userLastName} = std;
console.log(userFirstname);
console.log(userLastName);


