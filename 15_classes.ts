interface IFlight{
    flightNo: number;
    from : string;
    to : string
    display()
};

class Flight implements IFlight{
    flightNo: number;
    from : string;
    to : string

    constructor(flightNo:number, from: string, to : string){
        this.flightNo = flightNo;
        this.from = from;
        this.to = to
    }
    display(){
        console.log(this.flightNo, this.from, this.to);
        
    }
};

var objFlight = new Flight(102,"Pune", "Mumbai");

objFlight.display();