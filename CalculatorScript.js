

// result button
let display = document.getElementById("result");
let resultBtn = document.getElementById("equationResult");



// Equation
let Equation = "";

function appendDisplay(input)
{
    if (display.textContent == 0)
    
        display.textContent = input;

    else
        display.textContent += input;

    
    Equation += input;
    

}



// Result of equation

resultBtn.onclick = function()
{
    try{
    result.textContent = eval(Equation);
    }
    catch(error){
        result.textContent = "Syntax Error";
    }

}


function Clear()
{
    display.textContent = 0;
    Equation = "";

}