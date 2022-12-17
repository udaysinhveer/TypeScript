var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, flightNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = flightNo;
    }
    Passenger.prototype.display = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyerNo);
    };
    return Passenger;
}());
;
var passenger = new Passenger("Uday", "Veer", 12);
var passenger2 = new Passenger("Yash", "Veer", 20);
passenger.display();
passenger2.display();
for (var item in passenger) {
    if (item !== "display") {
        console.log(item);
        console.log(passenger[item]);
    }
}
