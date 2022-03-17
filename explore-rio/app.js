

let controller1 = new ScrollMagic.Controller();

let controller2 = new ScrollMagic.Controller();

let controller3 = new ScrollMagic.Controller();

let controller4 = new ScrollMagic.Controller();

let timeLine1 = new TimelineMax();

let timeLine2 = new TimelineMax();

let timeLine3 = new TimelineMax();

let timeLine4 = new TimelineMax();













function parallax1(vh1) {

    if (vh1.matches) {
      
        

        timeLine1
            .fromTo(".bg1", {y: 0}, {y: -110, duration: 3})
            .fromTo(".bg2", {y: 0}, {y: -30, duration: 3}, "-= 3")
            .fromTo(".bg3",{y: 0}, {y: 50, duration: 3}, "-= 3")
            .fromTo(".bg4", {y: 0}, {y: 170, duration: 3}, "-= 3")
            .to(".conteudo__container", 3, {top: '0%'}, "-= 3");

        var scene1 = new ScrollMagic.Scene({

            triggerElement: '.container',
            duration: "150%",
            triggerHook: 0,

        })

        .setTween(timeLine1)
        .addTo(controller1);



    }
    
}



var vh1 = window.matchMedia("(max-height: 1000px)");

parallax1(vh1);

vh1.addListener(parallax1);






function parallax2(vh2) {

    if (vh2.matches) {
      
        

        timeLine1
            .fromTo(".bg1", {y: 0}, {y: -70, duration: 3})
            .fromTo(".bg2", {y: 0}, {y: -30, duration: 3}, "-= 3")
            .fromTo(".bg3",{y: 0}, {y: 70, duration: 3}, "-= 3")
            .fromTo(".bg4", {y: 0}, {y: 170, duration: 3}, "-= 3")
            .to(".conteudo__container", 3, {top: '0%'}, "-= 3");

        var scene1 = new ScrollMagic.Scene({

            triggerElement: '.container',
            duration: "300%",
            triggerHook: 0,

        })

        .setTween(timeLine1)
        .addTo(controller1);



    }
    
}



var vh2 = window.matchMedia("(max-height: 800px)");

parallax2(vh2);

vh2.addListener(parallax2);










function parallax3(vh3) {

    if (vh3.matches) {
      
        

        timeLine1
            .fromTo(".bg1", {y: 0}, {y: -50, duration: 3})
            .fromTo(".bg2", {y: 0}, {y: -30, duration: 3}, "-= 3")
            .fromTo(".bg3",{y: 0}, {y: 70, duration: 3}, "-= 3")
            .fromTo(".bg4", {y: 0}, {y: 170, duration: 3}, "-= 3")
            .to(".conteudo__container", 3, {top: '0%'}, "-= 3");

        var scene1 = new ScrollMagic.Scene({

            triggerElement: '.container',
            duration: "620%",
            triggerHook: 0,

        })

        .setTween(timeLine1)
        .addTo(controller1);



    }
    
}



var vh3 = window.matchMedia("(max-height: 640px)");

parallax3(vh3);

vh3.addListener(parallax3);








timeLine2.fromTo(".conteudo__item1", {opacity: 0}, {opacity: 1, duration: 3});


var scene2 = new ScrollMagic.Scene({

    triggerElement: '#trigger', 
    duration: "100%",
    triggerHook: 0.7,

})

.setTween(timeLine2)
// .setPin("conteudo")
.addTo(controller2);





timeLine3.fromTo(".conteudo__item2", {opacity: 0}, {opacity: 1, duration: 3});


var scene3 = new ScrollMagic.Scene({

    triggerElement: '#trigger2', 
    duration: "100%",
    triggerHook: 0.2,

})

.setTween(timeLine3)
// .setPin("conteudo")
.addTo(controller3);




timeLine4.fromTo(".conteudo__texo--p", {opacity: 0}, {opacity: 1, duration: 5});


var scene4 = new ScrollMagic.Scene({

    triggerElement: '#trigger3', 
    duration: "80%",
    triggerHook: 0.35,

})

.setTween(timeLine4)
// .setPin("conteudo__texto")
.addTo(controller4);