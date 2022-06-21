forLoop(5);
function forLoop(value) {
    for (var i = 0; i < value; i++) {
        console.log("Inside For loop");
    }
}
WhileLoop(5);
function WhileLoop(value) {
    var i = 0;
    while (i < value) {
        console.log("Inside While loop");
        i++;
    }
}
DoWhileLoop(5);
function DoWhileLoop(value) {
    var i = 0;
    do {
        console.log("Inside Do While loop");
        i++;
    } while (i < value);
}
