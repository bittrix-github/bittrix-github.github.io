


const homeBtn = document.getElementsByClassName('menu__item')[0];

const halfBtn = document.getElementsByClassName('menu__item')[1];

const surfingBtn = document.getElementsByClassName('menu__item')[2];

const skatingBtn = document.getElementsByClassName('menu__item')[3];

const bmxBtn = document.getElementsByClassName('menu__item')[4];

const aboutBtn = document.getElementsByClassName('menu__item')[5];





const titleBg = document.getElementsByClassName('title')[0];

const halfSvg = document.getElementsByClassName('half__pipe')[0];

const surfingSvg = document.getElementsByClassName('surfing')[0];

const skatingSvg = document.getElementsByClassName('skating')[0];

const bmxSvg = document.getElementsByClassName('bmx')[0];

const aboutDiv = document.getElementsByClassName('about')[0];




let i = 0;
let j = 0;
let k = 0;
let l = 0;
let m = 0;
let n = 0;




homeBtn.addEventListener('click', () => {

    i = 0;
    j = 0;
    k = 0;
    l = 0;
    m = 0;
    n = 0;

    if ( i < 1) {


        titleBg.classList.remove('inactive');
        halfSvg.classList.remove('active');
        surfingSvg.classList.remove('active');
        skatingSvg.classList.remove('active');
        bmxSvg.classList.remove('active');
        aboutDiv.classList.remove('active');        

    }

});

halfBtn.addEventListener('click', () => {


    k = 0;
    l = 0;
    m = 0;
    n = 0;

    if ( j < 1) {

        j += 1;

        halfSvg.classList.toggle('active');
        surfingSvg.classList.remove('active');
        skatingSvg.classList.remove('active');
        bmxSvg.classList.remove('active');
        aboutDiv.classList.remove('active'); 

        if ( i < 1) {

        titleBg.classList.toggle('inactive');

        i += 1;

        }

    }

});

surfingBtn.addEventListener('click', () => {


    j = 0;
    l = 0;
    m = 0;
    n = 0;

    if ( k < 1) {

        k += 1;

        halfSvg.classList.remove('active');
        surfingSvg.classList.toggle('active');
        skatingSvg.classList.remove('active');
        bmxSvg.classList.remove('active');
        aboutDiv.classList.remove('active'); 

        if ( i < 1) {

            titleBg.classList.toggle('inactive');

            i += 1;
    
            }
    
    }

});

skatingBtn.addEventListener('click', () => {


    j = 0;
    k = 0;
    m = 0;
    n = 0;

    if ( l < 1) {

        l += 1;

        halfSvg.classList.remove('active');
        surfingSvg.classList.remove('active');
        skatingSvg.classList.toggle('active');
        bmxSvg.classList.remove('active');
        aboutDiv.classList.remove('active'); 

        if ( i < 1) {

        titleBg.classList.toggle('inactive');

        i += 1;

        }

    }

});

bmxBtn.addEventListener('click', () => {


    j = 0;
    k = 0;
    l = 0;
    n = 0;

    if ( m < 1) {

        m += 1;

        halfSvg.classList.remove('active');
        surfingSvg.classList.remove('active');
        skatingSvg.classList.remove('active');
        bmxSvg.classList.toggle('active');
        aboutDiv.classList.remove('active'); 

        if ( i < 1) {

        titleBg.classList.toggle('inactive');

        i += 1;

        }

    }

});

aboutBtn.addEventListener('click', () => {


    j = 0;
    k = 0;
    l = 0;
    m = 0;

    if ( n < 1) {

        n += 1;

        halfSvg.classList.remove('active');
        surfingSvg.classList.remove('active');
        skatingSvg.classList.remove('active');
        bmxSvg.classList.remove('active');
        aboutDiv.classList.toggle('active'); 

        if ( i < 1) {

        titleBg.classList.toggle('inactive');

        i += 1;

        }

    }

});