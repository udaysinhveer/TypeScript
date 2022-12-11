
class Passenger {
    firstName : string;
    lastName : string;
    frequentFlyerNo : number
    constructor(firstName:string, lastName: string, flightNo : number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = flightNo
    }
};

var passenger = new Passenger("Uday", "Veer", 12);

console.log(passenger.firstName + " " + passenger.lastName + " " + passenger.frequentFlyerNo);
