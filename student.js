/////////////////////MODAL BOX/////////////////////////
let openRegister = document.getElementById('btnOpenRegister');
let RegisterModalContainer = document.getElementById('register-modal-container');
let closeRegister = document.getElementById('btnCloseRegister');
let openLogin = document.getElementById('btnOpenLogin');
let LoginModalContainer = document.getElementById('login-modal-container');
let closeLogin = document.getElementById('btnCloseLogin');

///////////////////RADIO BUTTONS///////////////////////
let BtnRadioEnglish = document.getElementById('btnEnglish');
let BtnRadioCareer = document.getElementById('btnCareer');
let englishOption = document.getElementById('englishOption')
let careerOption = document.getElementById('careerOption');

//////////////REGISTER FORM/////////////////
let RegisterForm = document.getElementById('form-register');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let password1 = document.getElementById('password');
let password2 = document.getElementById('password2');
let RegisterBtn = document.getElementById('btnRegister');
let warningMsg = document.getElementById('warnings');


///////////////////LOGIN FORM/////////////////////////
let LoginForm = document.getElementById('login-form');
let LoginBtn = document.getElementById('btnLogin');
let nameLogin = document.getElementById('login-name');
let passLogin = document.getElementById('login-pass');
let warningMsg2 = document.getElementById('warnings2');


openRegister.addEventListener('click', ()=>{
    RegisterModalContainer.classList.add('show');
});

closeRegister.addEventListener('click', ()=>{
    RegisterModalContainer.classList.remove('show')
});

openLogin.addEventListener('click',()=>{
    LoginModalContainer.classList.add('show');
});

closeLogin.addEventListener('click',()=>{
    LoginModalContainer.classList.remove('show');
});


BtnRadioEnglish.addEventListener('click',(event)=>{
    if(event.target){
        careerOption.classList.remove('show-career-option');
        englishOption.classList.add('show-english-option');
    }else{
        englishOption.classList.remove('show-english-option');
    }
});

BtnRadioCareer.addEventListener('click',(event)=>{
    if(event.target){
        englishOption.classList.remove('show-english-option');
        careerOption.classList.add('show-career-option');
    }else{
        careerOption.classList.remove('show-career-option');
    }
});


RegisterForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    let warnings = "";
    let join = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/   ///////////////////Regular expression that checks to contain: name@name.com
    let regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/    ///////////////////Regular expression: The password must be between 8 and 16 characters long,
                                                                       ////// with at least one digit, at least one lowercase letter, and at least one uppercase letter. It may have other symbols.
    warningMsg.innerHTML = ""
    if(fname.value == ""){
        warnings += '*The first name is not valid <br>'
        join = true;
    }
    if(lname.value == ""){
        warnings += '*The last name is not valid <br>'
        join = true;
    }
    if(!regexEmail.test(email.value) && email.value==""){
        warnings += '*The email is not valid <br>'
        entrar = true
    }
    if(!regexPassword.test((password1.value == password2.value))){
        warnings += '*The password is not valid <br>'
        entrar = true
    }
    if(join){
        warningMsg.innerHTML = warnings
    }else{
        warningMsg.innerHTML = 'You have successfully registered'
    }
});

LoginForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    let warnings2 = "";
    let join = false;
    warningMsg.innerHTML = ""
    if((nameLogin.value == "") || (passLogin.value =="")){
        warnings2 += '*Both fields must be complete <br>'
        join = true;
    }
    if(nameLogin.value == ""){
        warnings2 += '*You are missing the username <br>'
        entrar = true
    }
    if(passLogin.value == ""){
        warnings2 += '*You are missing the password <br>'
        entrar = true
    }
    if(join){
        warningMsg2.innerHTML = warnings2
    }else{
        warningMsg2.innerHTML = 'you have entered'
    }
})


// class Student{
//     constructor(fname,lname,username,password,newpassword,course){
//         this.fname = fname;
//         this.lname = lname;
//         this.username = username;
//         this.password = password;
//         this.newpassword = newpassword;
//         this.course = course;
//     }
// }

// class EnglishClass extends Student{
//     constructor(fname,lname,username,course){
//         super(fname,lname,username,course);

//         this.course = englishcourselist;
//     }
// }

// const englishcourselist = {
//     ESL: "ESL",
//     Tofel: "Tofel",
//     IELS: "IELS"
// };