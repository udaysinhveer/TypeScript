
let courses = ["Angular", "Java", "React", "NodeJS"];
console.log(courses.toString());

interface IEmployee {
    id : number;
}

let e1: IEmployee;
let e2 = {id:123, name: "John"}

e1 = e2; // type casting, here we can assign e1 to e2, because e2 has all value which required to e1

//e2 = e1 // here we cannot assign e2 to e1, because e1 has not all values which required to e2
