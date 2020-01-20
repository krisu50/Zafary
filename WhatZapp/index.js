const btnCto1 = document.querySelector('#btn-cto1');
const btnCto2 = document.querySelector('#btn-cto2');
const btnCto3 = document.querySelector('#btn-cto3');
const btnCto4 = document.querySelector('#btn-cto4');
const btnCto5 = document.querySelector('#btn-cto5');

btnCto1.addEventListener('click', cargarCto1);
btnCto2.addEventListener('click', cargarCto2);
btnCto3.addEventListener('click', cargarCto3);
btnCto4.addEventListener('click', cargarCto4);
btnCto5.addEventListener('click', cargarCto5);

function cargarCto1(){
    document.getElementById("nbre").innerHTML = "JUAN PÉREZ PÉREZ";
}

function cargarCto2(){
    document.getElementById("nbre").innerHTML = "PERICO CASANOVA";
}

function cargarCto3(){
    document.getElementById("nbre").innerHTML = "MIRANDA CASAS";
}

function cargarCto4(){
    document.getElementById("nbre").innerHTML = "PAOLA ASENJO";
}

function cargarCto5(){
    document.getElementById("nbre").innerHTML = "MIRIAM HERNANDEZ";
}