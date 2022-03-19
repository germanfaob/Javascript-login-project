let openRegister = document.getElementById('btnOpenRegister');
let RegisterModalContainer = document.getElementById('register-modal-container');
let closeRegister = document.getElementById('btnCloseRegister');
let openLogin = document.getElementById('btnOpenLogin');
let LoginModalContainer = document.getElementById('login-modal-container');
let closeLogin = document.getElementById('btnCloseLogin');

//////OPTIONS///////
let BtnRadioEnglish = document.getElementById('btnEnglish');
let BtnRadioCareer = document.getElementById('btnCareer');
let englishOption = document.getElementById('englishOption');
let careerOption = document.getElementById('careerOption');

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


class Student{
    constructor(fname,lname,username,password,newpassword,course){
        this.fname = fname;
        this.lname = lname;
        this.username = username;
        this.password = password;
        this.newpassword = newpassword;
        this.course = course;
    }
}

class EnglishClass extends Student{
    constructor(fname,lname,username,course){
        super(fname,lname,username,course);

        this.course = englishcourselist;
    }
}

const englishcourselist = {
    ESL: "ESL",
    Tofel: "Tofel",
    IELS: "IELS"
};



console.log(EnglishClass)