document.addEventListener("DOMContentLoaded", init);

let results; //var for div #results
let numberStr = "";
let equationArray = [];
const calculator = document.querySelector('.calculator');

function createButtons()
{
    //create buttons 0 through 9
    for (let i = 0; i < 10; i ++)
    {
        let button = document.createElement("button");
        button.innerHTML = i;
        button.id = "num" + i;
        button.addEventListener("click", numClicked)

        calculator.appendChild(button);
    }
}

function init() 
{
    results = document.createElement("div");
    results.className = "result"
    calculator.appendChild(results)
    //initialize
    createButtons()
    //CSS
    // createSymbols();
    
    document.addEventListener("keydown", keydown)

}

//displays the element on console dynamically
function numClicked()
{
    console.log(this)
    numberStr = this.innerHTML; //add str 
    results.innerHTML = numberStr;
    
    console.log(numberStr);
    equationArray.push(parseInt(numberStr));

    console.log(equationArray);

}

//more buttons
let ids = ["plus","minus", "equals", "multiplication", "division", "modulo"]
let operations = ["+", "-", "=", "*", "/", "%"];

    for (let i = 0; i < ids.length; i++)
{
    let button = document.createElement("button");
    button.innerHTML = operations[i];
    button.id = ids[i];
    document.body.appendChild(button);

    calculator.appendChild(button);
    
}

function keydown(event)
{
    // enter key to generate results for keydown numbers
    if(event.keyCode === 13 || event.keyCode === 'Enter') 
    {
        getResults();
    }

    else if ((event.code).includes("Digit"))
    {
        numKey(event.key)
    }

    else if (event.key == "+")
    {
        operator("+")
    }

    else if (event.key == "-")
    {
        operator("-")
    }

    else if (event.key == "*")
    {
        operator("*")
    }

    else if (event.key == "/")
    {
        operator("/")
    }

    else if (event.key == "%")
    {
        operator("%")
    }
}

document.getElementById("plus").addEventListener("click", function()
{
    operator("+");
})

document.getElementById("minus").addEventListener("click", function()
{
    operator("-");
})

document.getElementById("multiplication").addEventListener("click", function()
{
    operator("*");
})

document.getElementById("division").addEventListener("click", function()
{
    operator("/");
})

document.getElementById("modulo").addEventListener("click", function()
{
    operator("%");
})
3
document.getElementById("equals").addEventListener("click", getResults)

function numKey(num)
{
    results.innerHTML = num;
    equationArray.push(parseInt(num));
    
}

function operator(operation) 
{
    results.innerHTML = operation;

    if (operation == "+")
    {
        equationArray.push("+");8
    }

    else if (operation == "-")
    {
        equationArray.push("-");
    }

    else if (operation == "*")
    {
        equationArray.push("*");
    }

    else if (operation == "/")
    {
        equationArray.push("/");
    }

    else if (operation == "%")
    {
        equationArray.push("%");
    }

}        

function getResults()
{
    let solution;
    if (equationArray[1] == "+")
    {
        solution = equationArray[0] + equationArray[2]
    }

    else if (equationArray[1] == "-")
    {
        solution = equationArray[0] - equationArray[2]
    }

    else if (equationArray[1] == "*")
    {
        solution = equationArray[0] * equationArray[2]
    }

    else if (equationArray[1] == "/")
    {
        solution = equationArray[0] / equationArray[2]
    }

    else if (equationArray[1] == "%")
    {
        solution = equationArray[0] % equationArray[2]
    }
    
    results.innerHTML = solution
}

// clear box data function
function Clear()
{
    results.innerHTML = "";
    equationArray.length = 0;
}

//delete number in box function
function del()
{
    results.innerHTML = "";
    equationArray.pop();
}
    



