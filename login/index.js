const input1 = document.querySelector('#email');
const input2 = document.querySelector('#password');
const btnLogin = document.querySelector('#btn-login');
const msgError = document.querySelector('#msg-error');

const credenciales = {
    usuario: 'ejemplo@gmail.com',
    password: '123456'
}

btnLogin.addEventListener('click', login)

function login() {
    if(!input1.value || !input2.value) return;

    /*const input1 = document.querySelector('#email');
    const input2 = document.querySelector('#password');
    const textoInput = input1.value;
    input1.value = ' ';
    const passInput = input2.value;
    input2.value = ' ';*/

    if (input1.value === credenciales.usuario && input2.value === credenciales.password){
        msgError.classList.add('hide');
        document.location.assign('../Layout/index.html')
        }
    else{
        msgError.classList.remove('hide');
    }
}