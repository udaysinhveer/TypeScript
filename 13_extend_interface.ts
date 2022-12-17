
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


// interface assignment

interface IMen {
    height: number;
    weight : number
};

interface IWomen {
    color : string;
    education : string
};

interface IPerson extends IMen, IWomen{
    country: string;
    state : string;
    mobileNO : number
    
}

var person: IPerson = {
    country:"india",
    state : "Maharashtra",
    mobileNO : 1234567890,
    height : 165,
    weight : 50,
    color : "Fair",
    education : "BA Political Sciences"
}


