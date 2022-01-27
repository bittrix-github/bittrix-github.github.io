

const plus31 = document.querySelector("#s3-h61");
const plus32 = document.querySelector("#s3-h62");
const plus33 = document.querySelector("#s3-h63");
const plus34 = document.querySelector("#s3-h64");
const plus35 = document.querySelector("#s3-h65");



const s3p1 = document.querySelector(".s3__p1");
const s3p2 = document.querySelector(".s3__p2");
const s3p3 = document.querySelector(".s3__p3");
const s3p4 = document.querySelector(".s3__p4");
const s3p5 = document.querySelector(".s3__p5");

const p1X = document.querySelector("#s3-p1X");
const p2X = document.querySelector("#s3-p2X");
const p3X = document.querySelector("#s3-p3X");
const p4X = document.querySelector("#s3-p4X");
const p5X = document.querySelector("#s3-p5X");



const plus41 = document.querySelector("#s4-h61");
const plus42 = document.querySelector("#s4-h62");
const plus43 = document.querySelector("#s4-h63");

const s4l1 = document.querySelector(".s4__materials");
const s4l2 = document.querySelector(".s4__physical");
const s4l3 = document.querySelector(".s4__other");

const p4X1 = document.querySelector("#s4-1X");
const p4X2 = document.querySelector("#s4-2X");
const p4X3 = document.querySelector("#s4-3X");




plus31.addEventListener('click', () => {

    s3p1.classList.toggle('active');

    s3p2.classList.remove('active');
    s3p3.classList.remove('active');
    s3p4.classList.remove('active');
    s3p5.classList.remove('active');

})

plus32.addEventListener('click', () => {

    s3p2.classList.toggle('active');

    s3p1.classList.remove('active');
    s3p3.classList.remove('active');
    s3p4.classList.remove('active');
    s3p5.classList.remove('active');

})

plus33.addEventListener('click', () => {

    s3p3.classList.toggle('active');

    s3p1.classList.remove('active');
    s3p2.classList.remove('active');
    s3p4.classList.remove('active');
    s3p5.classList.remove('active');

})

plus34.addEventListener('click', () => {

    s3p4.classList.toggle('active');

    s3p1.classList.remove('active');
    s3p2.classList.remove('active');
    s3p3.classList.remove('active');
    s3p5.classList.remove('active');

})

plus35.addEventListener('click', () => {

    s3p5.classList.toggle('active');

    s3p1.classList.remove('active');
    s3p2.classList.remove('active');
    s3p3.classList.remove('active');
    s3p4.classList.remove('active');

})


p1X.addEventListener('click', () => {

    s3p1.classList.remove('active');

})

p2X.addEventListener('click', () => {

    s3p2.classList.remove('active');

})

p3X.addEventListener('click', () => {

    s3p3.classList.remove('active');

})

p4X.addEventListener('click', () => {

    s3p4.classList.remove('active');

})

p5X.addEventListener('click', () => {

    s3p5.classList.remove('active');

})








plus41.addEventListener('click', () => {

    s4l1.classList.add('active');

})


plus42.addEventListener('click', () => {

    s4l2.classList.add('active');

})


plus43.addEventListener('click', () => {

    s4l3.classList.add('active');

})



p4X1.addEventListener('click', () => {

    s4l1.classList.remove('active');

})

p4X2.addEventListener('click', () => {

    s4l2.classList.remove('active');

})

p4X3.addEventListener('click', () => {

    s4l3.classList.remove('active');

})











new fullpage("#fullpage", {

    autoScrolling: true,
    navigation: true,
    scrollingSpeed: 1000,
    fixedElements: '#header, #grid',
    sectionsColor : ['rgb(0, 0, 0, 0)', 'rgb(0, 0, 0, 0)', 'rgb(0, 0, 0, 0)', 'rgb(0, 0, 0, 0)', 'rgb(190, 190, 190)', 'rgb(0, 0, 0, 0)'],
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
    recordHistory: false,
    scrollOverflow: true,

    afterRender: function(){

        var pluginContainer = this;

        const s1Slide = document.querySelector(".slide");
        const s1ArrowsP = document.querySelector(".fp-prev");
        const s1ArrowsN = document.querySelector(".fp-next");

        const s1h1 = document.querySelector("#s1-h1");
        const s1h3 = document.querySelector("#s1-h3");
        const s1p = document.querySelector("#s1-p");
        const s1h5 = document.querySelector("#s1-h5");
        const s1h4 = document.querySelector("#s1-h4");
        const s1but = document.querySelector("#s1-but");
        const s1h61 = document.querySelector("#s1-h61");
        const s1h62 = document.querySelector("#s1-h62");

        const tl = new TimelineMax({delay: 1});

        tl
            .fromTo(s1h1, 3, {y: "100", opacity: 0}, {y: 0, opacity: 1})
            .fromTo(s1Slide, 2.5, {opacity: 0}, {opacity: 1}, "-=3")        
            .fromTo(s1ArrowsP, 2.5, {opacity: 0}, {opacity: 1}, "-=3")
            .fromTo(s1ArrowsN, 2.5, {opacity: 0}, {opacity: 1}, "-=3")
            .fromTo(s1h3, 0.25, {x: "10", opacity: 0}, {x: 0, opacity: 1}, "-=1")        
            .fromTo(s1p, 0.25, {x: "10", opacity: 0}, {x: 0, opacity: 1}, "-=0.8")        
            .fromTo(s1h5, 0.25, {x: "10", opacity: 0}, {x: 0, opacity: 1}, "-=0.6")        
            .fromTo(s1h4, 0.25, {x: "10", opacity: 0}, {x: 0, opacity: 1}, "-=0.4")        
            .fromTo(s1but, 0.25, {x: "10", opacity: 0}, {x: 0, opacity: 1}, "-=0.2")        
            .fromTo(s1h61, 0.25, {x: "10", opacity: 0}, {x: 0, opacity: 1})        
            .fromTo(s1h62, 0.25, {x: "10", opacity: 0}, {x: 0, opacity: 1});
    },

    onLeave: function(origin, destination, direction){


        const s2h2 = document.querySelector("#s2-h2");
        const s2h3 = document.querySelector("#s2-h3");
        const s2img = document.querySelector("#s2-img");
    

        const s3h2 = document.querySelector("#s3-h2");
    
        const card1 = document.querySelector("#card1");
        const card2 = document.querySelector("#card2");
        const card3 = document.querySelector("#card3");
        const card4 = document.querySelector("#card4");
        const card5 = document.querySelector("#card5");


        const s4h2 = document.querySelector("#s4-h2");
        const s4l1 = document.querySelector("#s4-l1");
        const s4l2 = document.querySelector("#s4-l2");
        const s4l3 = document.querySelector("#s4-l3");


        const s6h2 = document.querySelector("#s6-h2");

        const s6p1 = document.querySelectorAll(".s6__p--1");
        const s6p2 = document.querySelectorAll(".s6__p--2");
        const s6p3 = document.querySelectorAll(".s6__p--3");

        

        if (destination.index === 1 && direction === 'down') {

            const tl = new TimelineMax({delay: 0.5});

            tl
                .fromTo(s2img, 1, {opacity: 0}, {opacity: 1})
                .fromTo(s2h2, 1, {y: "50", opacity: 0}, {y: 0, opacity: 1})
                .fromTo(s2h3, 3, {opacity: 0}, {opacity: 1});


        }

        if (destination.index === 1 && direction === 'up') {

            const tl = new TimelineMax({delay: 0.5});

            tl
                .fromTo(s2img, 1, {opacity: 0}, {opacity: 1})
                .fromTo(s2h2, 1, {y: "-50", opacity: 0}, {y: 0, opacity: 1})
                .fromTo(s2h3, 3, {opacity: 0}, {opacity: 1});


        }







        if (destination.index === 2 && direction === 'down') {

            const tl = new TimelineMax({delay: 1});

            tl.fromTo(s3h2, 1, {y: "50", opacity: 0}, {y: 0, opacity: 1})
            .fromTo(card1, 0.3, {opacity: 0}, {opacity:1})
            .fromTo(card2, 0.3, {opacity: 0}, {opacity:1})
            .fromTo(card3, 0.3, {opacity: 0}, {opacity:1})
            .fromTo(card4, 0.3, {opacity: 0}, {opacity:1})
            .fromTo(card5, 0.3, {opacity: 0}, {opacity:1});
        
    
        }


        if (destination.index === 2 && direction === 'up') {

            const tl = new TimelineMax({delay: 1});

            tl.fromTo(s3h2, 1, {y: "-50", opacity: 0}, {y: 0, opacity: 1})
            .fromTo(card1, 0.3, {opacity: 0}, {opacity:1})
            .fromTo(card2, 0.3, {opacity: 0}, {opacity:1})
            .fromTo(card3, 0.3, {opacity: 0}, {opacity:1})
            .fromTo(card4, 0.3, {opacity: 0}, {opacity:1})
            .fromTo(card5, 0.3, {opacity: 0}, {opacity:1});
        
    
        }







        if (destination.index === 3 && direction === 'down') {

            const tl = new TimelineMax({delay: 1});

            tl.fromTo(s4h2, 1, {y: "50", opacity: 0}, {y: 0, opacity: 1})
            .fromTo(s4l1, 0.5, {opacity: 0}, {opacity:1})
            .fromTo(s4l2, 0.5, {opacity: 0}, {opacity:1})
            .fromTo(s4l3, 0.5, {opacity: 0}, {opacity:1});
        
    
        }


        if (destination.index === 3 && direction === 'up') {

            const tl = new TimelineMax({delay: 1});

            tl.fromTo(s4h2, 1, {y: "-50", opacity: 0}, {y: 0, opacity: 1})
            .fromTo(s4l1, 0.5, {opacity: 0}, {opacity:1})
            .fromTo(s4l2, 0.5, {opacity: 0}, {opacity:1})
            .fromTo(s4l3, 0.5, {opacity: 0}, {opacity:1});
        
    
        }







        if (destination.index === 5 && direction === 'down') {

            const tl = new TimelineMax({delay: 1});

            tl.fromTo(s6h2, 1, {y: "50", opacity: 0}, {y: 0, opacity: 1})
            .fromTo(s6p1, 0.7, {opacity: 0}, {opacity:1})
            .fromTo(s6p2, 0.7, {opacity: 0}, {opacity:1})
            .fromTo(s6p3, 0.7, {opacity: 0}, {opacity:1});
        
    
        }





    }


});