const btnHome = document.querySelector('#btn-home');
const btnWhatzapp = document.querySelector('#btn-whatzapp');
const btnZpotify = document.querySelector('#btn-zpotify');

btnHome.addEventListener('click', cargarHome);
btnWhatzapp.addEventListener('click', cargarWhatzApp);
btnZpotify.addEventListener('click', cargarZpotify);

function cargarHome(){
const contDinamico = document.querySelector('#iframe-layout');
contDinamico.setAttribute('src', '../Home/index.html');
}

function cargarWhatzApp(){
    const contDinamico = document.querySelector('#iframe-layout');
    contDinamico.setAttribute('src', '../WhatZapp/index.html');
}

function cargarZpotify(){
    const contDinamico = document.querySelector('#iframe-layout');
    contDinamico.setAttribute('src', '../Zpotify/index.html');
}    