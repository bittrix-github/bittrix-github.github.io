

const card = document.querySelector(".card");

const container = document.querySelector(".container");




const circle1 = document.querySelector("#c1");

const circle2 = document.querySelector("#c2");

const circle3 = document.querySelector("#c3");

const circle4 = document.querySelector("#c4");


const afs1 = document.querySelector("#afs1");

const afs2 = document.querySelector("#afs2");

const afs3 = document.querySelector("#afs3");

const afs4 = document.querySelector("#afs4");




const title = document.querySelector(".title");

const description = document.querySelector(".description");

const colors = document.querySelector(".colors");

const sizes = document.querySelector(".sizes");

const p1 = document.querySelector(".-price-");

const p2 = document.querySelector(".price");

const purchase = document.querySelector(".purchase");






container.addEventListener("mousemove", (e) => {

    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;

    let yAxis = (window.innerHeight / 2 - e.pageY) / -25;

    card.style.transform = 'perspective(1000px) rotateY(' + xAxis + 'deg) rotateX(' + yAxis +'deg)';

});





container.addEventListener("mouseenter", (e) => {

    card.style.transition = "none";


    circle1.style.transform = 'perspective(1000px) translateZ(40px)';
    circle2.style.transform = 'perspective(1000px) translateZ(40px)';
    circle3.style.transform = 'perspective(1000px) translateZ(40px)';
    circle4.style.transform = 'perspective(1000px) translateZ(40px)';


    afs1.style.transform = 'perspective(1000px) translateZ(100px) rotateZ(-20deg)';
    afs2.style.transform = 'perspective(1000px) translateZ(100px) rotateZ(-20deg)';
    afs3.style.transform = 'perspective(1000px) translateZ(100px) rotateZ(-20deg)';
    afs4.style.transform = 'perspective(1000px) translateZ(100px) rotateZ(-20deg)';


    title.style.transform = 'perspective(1000px) translateZ(120px)';

    description.style.transform = 'perspective(1000px) translateZ(100px)';

    colors.style.transform = 'perspective(1000px) translateZ(50px)';

    sizes.style.transform = 'perspective(1000px) translateZ(40px)';

    p1.style.transform = 'perspective(1000px) translateY(-10px) translateZ(70px)';

    p2.style.transform = 'perspective(1000px) translateY(-10px) translateZ(70px)';

    purchase.style.transform = 'perspective(1000px) translateY(-15px) translateZ(80px)';

});


container.addEventListener("mouseleave", (e) => {

    card.style.transition = "all 0.5s ease";

    card.style.transform = 'rotateY(0deg) rotateX(0deg)';

    circle1.style.transform = 'translateZ(0)';
    circle2.style.transform = 'translateZ(0)';
    circle3.style.transform = 'translateZ(0)';
    circle4.style.transform = 'translateZ(0)';

    afs1.style.transform = 'translateZ(0px)';
    afs2.style.transform = 'translateZ(0px)';
    afs3.style.transform = 'translateZ(0px)';
    afs4.style.transform = 'translateZ(0px)';

    title.style.transform = 'translateZ(0px)';

    description.style.transform = 'translateZ(0px)';

    colors.style.transform = 'translateZ(0px)';

    sizes.style.transform = 'translateZ(0px)';

    p1.style.transform = 'translateY(0) translateZ(0px)';

    p2.style.transform = 'translateY(0) translateZ(0px)';

    purchase.style.transform = 'translateY(0) translateZ(0)';


});

















const c1 = document.querySelector("#c1");

const c2 = document.querySelector("#c2");

const c3 = document.querySelector("#c3");

const c4 = document.querySelector("#c4");



const cl1 = document.querySelector("#cl1");

const cl2 = document.querySelector("#cl2");

const cl3 = document.querySelector("#cl3");

const cl4 = document.querySelector("#cl4");



const s1 = document.querySelector("#s1");

const s2 = document.querySelector("#s2");

const s3 = document.querySelector("#s3");

const s4 = document.querySelector("#s4");

const s5 = document.querySelector("#s5");

const s6 = document.querySelector("#s6");





cl1.addEventListener('click', () => {

    cl1.classList.add('active');

    cl2.classList.remove('active');
    cl3.classList.remove('active');
    cl4.classList.remove('active');



    c1.style.display = 'block';
    
    c2.style.display = 'none';
    c3.style.display = 'none';
    c4.style.display = 'none';



    afs1.style.display = 'block';
    
    afs2.style.display = 'none';
    afs3.style.display = 'none';
    afs4.style.display = 'none';

});

cl2.addEventListener('click', () => {

    cl2.classList.add('active');

    cl1.classList.remove('active');
    cl3.classList.remove('active');
    cl4.classList.remove('active');
    


    c2.style.display = 'block';
    
    c1.style.display = 'none';
    c3.style.display = 'none';
    c4.style.display = 'none';



    afs2.style.display = 'block';
    
    afs1.style.display = 'none';
    afs3.style.display = 'none';
    afs4.style.display = 'none';

});

cl3.addEventListener('click', () => {

    cl3.classList.add('active');

    cl1.classList.remove('active');
    cl2.classList.remove('active');
    cl4.classList.remove('active');



    c3.style.display = 'block';
    
    c1.style.display = 'none';
    c2.style.display = 'none';
    c4.style.display = 'none';



    afs3.style.display = 'block';
    
    afs1.style.display = 'none';
    afs2.style.display = 'none';
    afs4.style.display = 'none';

});

cl4.addEventListener('click', () => {

    cl4.classList.add('active');

    cl1.classList.remove('active');
    cl2.classList.remove('active');
    cl3.classList.remove('active');



    c4.style.display = 'block';
    
    c1.style.display = 'none';
    c2.style.display = 'none';
    c3.style.display = 'none';



    afs4.style.display = 'block';
    
    afs1.style.display = 'none';
    afs2.style.display = 'none';
    afs3.style.display = 'none';

});






s1.addEventListener('click', () => {

    s1.classList.add('active');

    s2.classList.remove('active');
    s3.classList.remove('active');
    s4.classList.remove('active');
    s5.classList.remove('active');
    s6.classList.remove('active');

});

s2.addEventListener('click', () => {

    s2.classList.add('active');

    s1.classList.remove('active');
    s3.classList.remove('active');
    s4.classList.remove('active');
    s5.classList.remove('active');
    s6.classList.remove('active');

});

s3.addEventListener('click', () => {

    s3.classList.add('active');

    s1.classList.remove('active');
    s2.classList.remove('active');
    s4.classList.remove('active');
    s5.classList.remove('active');
    s6.classList.remove('active');

});

s4.addEventListener('click', () => {

    s4.classList.add('active');

    s1.classList.remove('active');
    s2.classList.remove('active');
    s3.classList.remove('active');
    s5.classList.remove('active');
    s6.classList.remove('active');

});

s5.addEventListener('click', () => {

    s5.classList.add('active');

    s1.classList.remove('active');
    s2.classList.remove('active');
    s3.classList.remove('active');
    s4.classList.remove('active');
    s6.classList.remove('active');

});

s6.addEventListener('click', () => {

    s6.classList.add('active');

    s1.classList.remove('active');
    s2.classList.remove('active');
    s3.classList.remove('active');
    s4.classList.remove('active');
    s5.classList.remove('active');

});







const aboutButton = document.querySelector(".about__button");

const aboutX = document.querySelector("#about-x");

const about = document.querySelector(".about");

let aboutOn = false;



aboutButton.addEventListener('mousedown', () => {
    
    aboutButton.classList.add('active');
    

});

aboutButton.addEventListener('mouseup', () => {

    aboutButton.classList.remove('active');

    aboutX.style.pointerEvents = 'all';
    about.style.pointerEvents = 'all';
    about.style.opacity = '1';

    if (aboutOn) {

        aboutX.style.pointerEvents = 'none';
        about.style.pointerEvents = 'none';
        about.style.opacity = '0';

        aboutOn = false;

        return

    }


    aboutOn = true;



})

aboutX.addEventListener('click', () => {
    
    aboutX.style.pointerEvents = 'none';
    about.style.pointerEvents = 'none';
    about.style.opacity = '0';

})