class Student {
    private _userName : string;
    get name():string{
        return this._userName;
    };
    set name(name:string){
       if (name == "Uday") {
        this._userName = name;
       }
    }
    display(){
        console.log(this._userName);
        
    }
}

var objStudent = new Student();
objStudent.name = "Uday";
console.log(objStudent.name);

// using private we can easily achieve encapsulation 
// here we did encapsulation, hide information 
