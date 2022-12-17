var Student = /** @class */ (function () {
    function Student() {
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._userName;
        },
        set: function (name) {
            if (name == "Uday") {
                this._userName = name;
            }
        },
        enumerable: false,
        configurable: true
    });
    ;
    Student.prototype.display = function () {
        console.log(this._userName);
    };
    return Student;
}());
var objStudent = new Student();
objStudent.name = "Uday";
console.log(objStudent.name);
// using private we can easily achieve encapsulation 
// here we did encapsulation, hide information 
