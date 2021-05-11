function sum (numb, numb2) {
let num = document.getElementById("numb").value;
let num2 = document.getElementById("numb2").value;
document.getElementById("result").innerHTML = Number(num) + Number(num2);
}
function sub (numb, numb2) {
    let num = document.getElementById("numb").value;
    let num2 = document.getElementById("numb2").value;
    document.getElementById("result").innerHTML = Number(num) - Number(num2);
}

function mul (numb, numb2) {
    let num = document.getElementById("numb").value;
    let num2 = document.getElementById("numb2").value;
    document.getElementById("result").innerHTML = Number(num) * Number(num2);
}

function div (numb, numb2) {
    let num = document.getElementById("numb").value;
    let num2 = document.getElementById("numb2").value;
    document.getElementById("result").innerHTML = Number(num) / Number(num2); 
}

// added