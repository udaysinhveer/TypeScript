var Check = /** @class */ (function () {
    function Check() {
    }
    Check.prototype.display = function () {
        Check.bankName = "SBI";
        console.log(Check.bankName);
    };
    Check.bankName = "State Bank Of India";
    return Check;
}());
var objCheck = new Check();
Check.bankName = "BOB";
console.log(Check.bankName);
objCheck.display();