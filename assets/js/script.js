const burguer = document.getElementsByClassName('header__burguer')[0];

const nav = document.getElementsByClassName('header__nav')[0];



burguer.addEventListener('click', () => {

    nav.classList.toggle('active')

});