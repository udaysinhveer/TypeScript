// below example of run time polymorphism 

class Employee {
    public firstName: string;
    public lastName: string;
    public designation: string;

    public Print(): void{
        console.log("Employee details");
    }
};

class Manager extends Employee{
    constructor(firstName: string, lastName: string, designation:string){

        super(); // using super() we calling parent class constructor
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    public Print(): void {  // overriding parent class print method
        super.Print()
        console.log(`${this.firstName} ${this.lastName} ${this.designation}`);
    }
};

class Lead extends Employee{
    constructor(firstName: string, lastName: string, designation:string){

        super(); 
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    public Print(): void {
        super.Print()
        console.log(`${this.firstName} ${this.lastName} ${this.designation}`);
    }
};

class Developer extends Employee{
    constructor(firstName: string, lastName: string, designation:string){

        super(); 
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    public Print(): void {
        super.Print()
        console.log(`${this.firstName} ${this.lastName} ${this.designation}`);
    }
};

let employee: Employee[] = new Array(new Manager("Jack", "Sparrow", "Manager"),
 new Lead("Uday","Veer", "Lead"), new Developer("Shweta", "Veer", "Developer"))

 for (var emp of employee){
    emp.Print();
 }