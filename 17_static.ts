class Check{
    static bankName:string = "State Bank Of India";
    accountNo : number;
    accountHolderName : string
    display(){
        Check.bankName = "SBI";
        console.log(Check.bankName);
    }
}

var objCheck = new Check();

Check.bankName = "BOB"
console.log(Check.bankName);  // we can access property directly using class name

objCheck.display();

