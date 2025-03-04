const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const resultS = document.getElementById("sum");
const resultD =  document.getElementById("dif");
const resultP = document.getElementById("prod");
const resultQ = document.getElementById("qou");

let sum = 0;
let dif = 0;
let prod = 0;
let qou = 0;


function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        resultS.innerHTML = sum;

        dif = parseInt(num1Txt.value) - parseInt(num2Txt.value);
        resultD.innerHTML = dif;

        prod = parseInt(num1Txt.value) * parseInt(num2Txt.value);
        resultP.innerHTML = prod;

        qou = parseInt(num1Txt.value) / parseInt(num2Txt.value);
        resultQ.innerHTML = qou;
    }


}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    resultS.innerHTML = "";
    resultD.innerHTML = "";
    resultP.innerHTML = "";
    resultQ.innerHTML = "";
    sum = 0;    
    dif = 0;
    prod = 0;
    qou = 0;

}

