const input1 = window.document.querySelector('#email') //llamar al id se usa #
const input2 = window.document.querySelector('#password')

const boton = window.document.querySelector('#boton')

boton.addEventListener('click', mostrarDato)

function mostrarDato() {
    const input1 = window.document.querySelector('#email');
    const input2 = window.document.querySelector('#password');
    const textoInput = input1.value;
    input1.value = '';
    const passInput = input2.value;
    input2.value = '';

    if (textoInput === 'chris.sautejeau@gmail.com' && passInput === '12345'){
        console.log('PUEDES INGRESAR AL SISTEMA :D')
    }else{
        console.log('NO PUEDES INGRESAR AL SISTEMA :c')
    }
}