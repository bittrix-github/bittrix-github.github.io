const burguer = document.getElementsByClassName('header__burguer')[0];

const nav = document.getElementsByClassName('header__nav')[0];



burguer.addEventListener('click', () => {

    nav.classList.toggle('active')

});






var aboutButton = document.querySelector('.header__button--button');

var aboutX = document.querySelector('#about-x');

var aboutBox = document.querySelector('.about');



aboutButton.addEventListener('click', () => {

    aboutBox.classList.add('active');

})

aboutX.addEventListener('click', () => {

    aboutBox.classList.remove('active');

})