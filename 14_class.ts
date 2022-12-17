
class Passenger {
    firstName: string;
    lastName: string;
    frequentFlyerNo: number
    constructor(firstName: string, lastName: string, flightNo: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = flightNo
    }

    display() {
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyerNo);
    }
};

var passenger = new Passenger("Uday", "Veer", 12);
var passenger2 = new Passenger("Yash", "Veer", 20)
passenger.display();
passenger2.display();

for (let item in passenger) {

    if (item !== "display") {
        console.log(item);
        console.log(passenger[item]);
    }
}


