

new fullpage("#fullpage", {

    autoScrolling: true,
    navigation: true,
    scrollingSpeed: 1000,
    fixedElements: '#header',
    sectionsColor : ['rgb(0, 0, 0, 0)', 'rgb(0, 0, 0, 0)', 'rgb(0, 0, 0, 0)', 'rgb(0, 0, 0, 0)', 'rgb(190, 190, 190)', 'rgb(0, 0, 0, 0)'],
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],

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





    }


});