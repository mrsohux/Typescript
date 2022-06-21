
forLoop(5);

function forLoop(value : number) : void
{
    for(var i : number =0;i< value;i++)
    {
        console.log("Inside For loop");
    }
}

WhileLoop(5);
function WhileLoop(value : number) : void
{
    var i : number = 0;
    while(i < value)
    {
        console.log("Inside While loop");
        i++;
    }
}

DoWhileLoop(5);
function DoWhileLoop(value : number) : void
{
    var i : number = 0;
    do{
        console.log("Inside Do While loop");
        i++; 
    }
    while(i < value)
   
}