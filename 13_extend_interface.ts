
interface IExterioer {
    color : string;
    numOfDoors : number
};

interface IInterioer {
    seats : number;
    auto : boolean
};

interface ICar extends IExterioer, IInterioer {
    make : string;
    model : string;
    year : number
};

var myCar: ICar ={
    make: "TATA",
    model : "ALtroz",
    year : 2022,
    color : "White",
    numOfDoors : 4,
    seats : 6,
    auto : true
};
