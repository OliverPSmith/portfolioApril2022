

/************* Menu Toggle */

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const navLinks = Array.from(document.querySelectorAll('.nav-container a'));
const body = document.querySelector('.body');
const rTBtns = document.querySelector('.right-text-buttons');
const lTBtn = document.querySelector('.left-text-button');
const main = document.querySelector('.main');

const logo = document.querySelector('.logo-text');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('active');

    main.classList.toggle('active');
    logo.classList.toggle('active');
    rTBtns.classList.toggle('active');
    lTBtn.classList.toggle('active');

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('active');
           
            main.classList.remove('active');
            logo.classList.remove('active');
            rTBtns.classList.remove('active');
            lTBtn.classList.remove('active');
        })
    }
});



/************* Open Modals */
/*
const modals = document.getElementsByClassName('modal');
const openModals = document.getElementsByClassName('quick-view');
const closeModals = document.getElementsByClassName('close-modal-button');

for (let i=0; i < openModals.length; i++) {
    openModals[i].addEventListener('click', () => {
        modals[i].style.display = "flex";
        body.classList.add('active');
    });
};

for (let i= 0; i < closeModals.length; i++) {
    closeModals[i].addEventListener('click', () => {
        modals[i].style.display = "none";
        body.classList.remove('active');
    });
    window.addEventListener('click', e => {
        if (e.target == modals[i]) {
            modals[i].style.display = "none";
            body.classList.remove('active');
        }
    })
};          */

