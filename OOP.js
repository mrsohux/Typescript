//Object Oriented Programming (OOP)
var arithematic = /** @class */ (function () {
    function arithematic(a, b) {
        this.no1 = a;
        this.no2 = b;
    }
    arithematic.prototype.Addition = function () {
        var Ans = 0; // local variable
        Ans = this.no1 + this.no2;
        return Ans;
    };
    arithematic.prototype.Subtraction = function () {
        var Ans = 0; //local variable
        Ans = this.no1 - this.no2;
        return Ans;
    };
    return arithematic;
}());
var obj1 = new arithematic(10, 12);
var obj2 = new arithematic(10, 12);
var ret = 0;
ret = obj1.Addition();
console.log("Addition is :" + ret);
ret = obj1.Subtraction();
console.log("substraction is :" + ret);
