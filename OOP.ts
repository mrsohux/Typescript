//Object Oriented Programming (OOP)

class arithematic
{
    //characteristics
    no1 : number;
    no2 : number;

    constructor(a : number,b : number)
    {
        this.no1 = a;
        this.no2 = b;
    }
    Addition()   //behaviour
    {
        var Ans : number = 0;  // local variable
        Ans = this.no1 + this.no2;
        return Ans;
    }

    Subtraction()  //behaviour
    {
        var Ans : number = 0; //local variable
        Ans = this.no1 - this.no2;
        return Ans;
    }
    
}
var obj1 = new arithematic(10,12);
var obj2 = new arithematic(10,12);
var ret : number =0;

ret = obj1.Addition();
console.log("Addition is :" +ret)

ret = obj1.Subtraction();
console.log("substraction is :" +ret)