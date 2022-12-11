var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, flightNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = flightNo;
    }
    return Passenger;
}());
;
var passenger = new Passenger("Uday", "Veer", 12);
console.log(passenger.firstName + " " + passenger.lastName + " " + passenger.frequentFlyerNo);
