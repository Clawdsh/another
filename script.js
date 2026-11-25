let text;

document.getElementById("submit").onclick = function(){
    text = document.getElementById("text").value;
    document.getElementById("output").textContent = text;
}


let num1;
let num2;
let add;
let minus;
let divide;
let multiply;

document.getElementById("sub").onclick = function(){
    num1 = document.getElementById("num1").value;
    num1 = Number(num1);
    num2 = document.getElementById("num2").value;
    num2 = Number(num2);

    add = num1 + num2;
    minus = num1 - num2;
    multiply = num1 * num2;
    divide = num1 / num2;

    document.getElementById("out").textContent = `The answer are 
    Addition: ${add}
    Subtraction: ${minus}
    Multiplication: ${multiply}
    Division ${divide}`;
}
                     


const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const result = document.getElementById("countresult")
let count = 0;

increase.onclick = function(){
    count++;
    result.textContent =count;
}

decrease.onclick = function(){
    count--;
    result.textContent =count;
}

reset.onclick = function(){
    count = 0;
    result.textContent =count;
}



const random = document.getElementById("rannum");
const resulta = document.getElementById("resulta");
let randomnum;
const min = 10;
const max = 50;

random.onclick = function(){
    randomnum = Math.floor(Math.random() * (max - min + 1)) + min;

    resulta.textContent = randomnum;
}
