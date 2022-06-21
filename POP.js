//Procedure Oriented Programming (POP)
function Addition(no1, no2) {
    var Ans = 0;
    Ans = no1 + no2;
    return Ans;
}
function substraction(no1, no2) {
    var Ans = 0;
    Ans = no1 - no2;
    return Ans;
}
var value1 = 10;
var value2 = 21;
var ret = 0;
ret = Addition(value1, value2);
console.log("Addition is :" + ret);
ret = substraction(value1, value2);
console.log("substraction is :" + ret);
