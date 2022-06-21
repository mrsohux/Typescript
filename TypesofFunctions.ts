var ret : number = 0;

//regular function
function Addtion1(no1 : number , no2 : number) : number
{
    var ans : number =0;
    ans = no1 + no2 ;
    return ans;
}
ret = Addtion1(10,11);
console.log("Addition is : "+ret);

//anonymous function (function without name)

var Addition2 = function(no1 : number , no2 :number) : number
{
    var ans : number =0;
    ans = no1 + no2 ;
    return ans;
}
ret = Addition2(10,11);
console.log("Addition is : "+ret);

//Fat arrow/Lambda/Arrow function

var Addition3 = (no1 : number,no2 : number) : number =>
{
    var ans : number =0;
    ans = no1 + no2 ;
    return ans;
}
ret = Addition3(10,11);
console.log("Addition is : "+ret);