//Procedure Oriented Programming (POP)

function Addition(no1: number ,no2:number)
{
    var Ans : number = 0;
    Ans = no1 + no2;
    return Ans;
}

function substraction(no1: number ,no2:number)
{
    var Ans : number = 0;
    Ans = no1 - no2;
    return Ans;
}

var value1 : number = 10;
var value2 : number= 21;
var ret : number = 0;

ret = Addition(value1,value2);
console.log("Addition is :" +ret)

ret = substraction(value1,value2);
console.log("substraction is :" +ret)