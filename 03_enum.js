// enum is a sequence of constant values
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Male);
console.log(Gender.Female);
// another way to access
console.log(Gender[0]);
console.log(Gender[1]);
var Weekends;
(function (Weekends) {
    Weekends[Weekends["saturday"] = 6] = "saturday";
    Weekends[Weekends["sunday"] = 7] = "sunday";
})(Weekends || (Weekends = {}));
console.log(Weekends[6]);
console.log(Weekends[7]);
