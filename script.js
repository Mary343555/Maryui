const rapp = document.querySelector('.rapp');
const loginlink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
    rapp.classList.add('active');
})

loginlink.addEventListener('click', ()=>{
    rapp.classList.remove('active');
})
btnPopup.addEventListener('click', ()=>{
    rapp.classList.add('active-popup');
})
iconClose.addEventListener('click', ()=>{
    rapp.classList.remove('active-popup');
})


