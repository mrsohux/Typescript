function fun() {
    console.log("Inside fun");
}
fun();
/////////////////////////////////////////////////////////////////////////
function parameter(value) {
    console.log("Parameter is " + value);
}
var no = 11;
parameter(no);
/////////////////////////////////////////////////////////////////////////
var no1 = 10;
var no2 = 11;
var ret = 0;
ret = Addition(no1, no2);
console.log("Addition is " + ret);
function Addition(value1, value2) {
    var ans = 0;
    ans = value1 + value2;
    return ans;
}
