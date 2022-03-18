let openRegister = document.getElementById('btnOpenRegister');
let RegisterModalContainer = document.getElementById('register-modal-container');
let closeRegister = document.getElementById('btnCloseRegister');
let openLogin = document.getElementById('btnOpenLogin');
let LoginModalContainer = document.getElementById('login-modal-container');
let closeLogin = document.getElementById('btnCloseLogin');

openRegister.addEventListener('click', ()=>{
    RegisterModalContainer.classList.add('show');
})

closeRegister.addEventListener('click', ()=>{
    RegisterModalContainer.classList.remove('show')
})

openLogin.addEventListener('click',()=>{
    LoginModalContainer.classList.add('show');
})

closeLogin.addEventListener('click',()=>{
    LoginModalContainer.classList.remove('show');
})