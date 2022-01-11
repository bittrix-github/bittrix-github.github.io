var adjustments = document.getElementById('adjustments');

var menu = document.getElementById('activatorO');

var esc = document.getElementById('activatorX');

var playb = document.getElementById('play-btn');

var pauseb = document.getElementById('pause-btn');

var stopb = document.getElementById('stop-btn');

var volumex = document.getElementById('volumeX-btn');

var volume = document.getElementById('volume-btn');




var timeline1 = gsap.timeline({defaults: {ease: "power2.inOut"}});

var toggle = false;





timeline1.to('.adjustments', {
    display: 'none'
}, "=-0.001");

timeline1.to('.activatorO', {
    display: 'none'
}, "-=0.001");

timeline1.to('.activatorX', {
    background: '#2073D1',
    'borderRadius': '6rem 0 0 6rem',
    display: 'block'
}, "-=0.001");

timeline1.to('.musica__botoes', {
    'clipPath': 'ellipse(100% 100% at 50% 50%)',
    'max-width': 'none'
}, "-=0.5");

timeline1.to('.musica__botoes svg', {
    opacity: 1,
    transform: 'translateX(0)'
}, "-=0.5");

timeline1.pause();


let clicaFora = 0;

let playOn = 0;

let soundOn = 1;



adjustments.addEventListener('click', () => {

    toggle = !toggle;

    if (toggle ? timeline1.play() : timeline1.reverse());

    clicaFora = 1;

})

esc.addEventListener('click', () => {

    toggle = !toggle;

    if (toggle ? timeline1.play() : timeline1.reverse());

    clicaFora = 0;

})

playb.addEventListener('click', () => {

    playb.style.display = 'none';

    pauseb.style.display = 'block';

    playOn = 1;

    document.getElementById('audio' + track).volume = 0.5;
    document.getElementById('audio' + track).play()

})

pauseb.addEventListener('click', () => {

    pauseb.style.display = 'none';

    playb.style.display = 'block';

    playOn = 0;

    document.getElementById('audio' + track).pause()

})

stopb.addEventListener('click', () => {

    pauseb.style.display = 'none';

    playb.style.display = 'block';

    playOn = 0;

    document.getElementById('audio' + track).pause();
    document.getElementById('audio' + track).currentTime = 0;

})

volume.addEventListener('click', () => {

    volume.style.display = 'none';

    volumex.style.display = 'block';

    soundOn = 0;

    document.getElementById('audio' + track).volume = 0;

})

volumex.addEventListener('click', () => {

    volumex.style.display = 'none';

    volume.style.display = 'block';

    soundOn = 1;

    document.getElementById('audio' + track).volume = 0.5;

})


document.addEventListener('mouseup', function(e) {

    var container = document.getElementById('musica');

    if (clicaFora == 1) {
        if (!container.contains(e.target)) {
            toggle = !toggle;

            if (toggle ? timeline1.play() : timeline1.reverse());

            clicaFora = 0;
        }
    }
});







$( function() {
    $( ".musica" ).draggable({
        containment: "parent"
    });
} );







let track = 0;




homeBtn.addEventListener('click', () => {

    if (playOn == 0 ) {

        track = 0;

        if (soundOn == 0) {
            document.getElementById('audio' + track).volume = 0;
        }

    }

    if (playOn == 1) {

        if (soundOn == 0) {
            document.getElementById('audio' + track).pause();
            document.getElementById('audio' + track).currentTime = 0;
            track = 0;
            document.getElementById('audio' + track).play();
            document.getElementById('audio' + track).volume = 0;
        }

        if (soundOn == 1) {
            document.getElementById('audio' + track).pause();
            document.getElementById('audio' + track).currentTime = 0;
            track = 0;
            document.getElementById('audio' + track).play();
            document.getElementById('audio' + track).volume = 0.5;
        }

    }

})

halfBtn.addEventListener('click', () => {

    if (playOn == 0 ) {

        track = 1;

        if (soundOn == 0) {
            document.getElementById('audio' + track).volume = 0;
        }

    }

    if (playOn == 1) {

        if (soundOn == 0) {
            document.getElementById('audio' + track).pause();
            document.getElementById('audio' + track).currentTime = 0;
            track = 1;
            document.getElementById('audio' + track).play();
            document.getElementById('audio' + track).volume = 0;
        }

        if (soundOn == 1) {
            document.getElementById('audio' + track).pause();
            document.getElementById('audio' + track).currentTime = 0;
            track = 1;
            document.getElementById('audio' + track).play();
            document.getElementById('audio' + track).volume = 0.5;
        }

    }

})

surfingBtn.addEventListener('click', () => {

    if (playOn == 0 ) {

        track = 2;

        if (soundOn == 0) {
            document.getElementById('audio' + track).volume = 0;
        }

    }

    if (playOn == 1) {

        if (soundOn == 0) {
            document.getElementById('audio' + track).pause();
            document.getElementById('audio' + track).currentTime = 0;
            track = 2;
            document.getElementById('audio' + track).play();
            document.getElementById('audio' + track).volume = 0;
        }

        if (soundOn == 1) {
            document.getElementById('audio' + track).pause();
            document.getElementById('audio' + track).currentTime = 0;
            track = 2;
            document.getElementById('audio' + track).play();
            document.getElementById('audio' + track).volume = 0.5;
        }

    }

})

skatingBtn.addEventListener('click', () => {

    if (playOn == 0 ) {

        track = 3;

        if (soundOn == 0) {
            document.getElementById('audio' + track).volume = 0;
        }

    }

    if (playOn == 1) {

        if (soundOn == 0) {
            document.getElementById('audio' + track).pause();
            document.getElementById('audio' + track).currentTime = 0;
            track = 3;
            document.getElementById('audio' + track).play();
            document.getElementById('audio' + track).volume = 0;
        }

        if (soundOn == 1) {
            document.getElementById('audio' + track).pause();
            document.getElementById('audio' + track).currentTime = 0;
            track = 3;
            document.getElementById('audio' + track).play();
            document.getElementById('audio' + track).volume = 0.5;
        }

    }

})

bmxBtn.addEventListener('click', () => {

    if (playOn == 0 ) {

        track = 4;

        if (soundOn == 0) {
            track = 4;
            document.getElementById('audio' + track).volume = 0;
        }

    }

    if (playOn == 1) {

        if (soundOn == 0) {
            document.getElementById('audio' + track).pause();
            document.getElementById('audio' + track).currentTime = 0;
            track = 4;
            document.getElementById('audio' + track).play();
            document.getElementById('audio' + track).volume = 0;
        }

        if (soundOn == 1) {
            document.getElementById('audio' + track).pause();
            document.getElementById('audio' + track).currentTime = 0;
            track = 4;
            document.getElementById('audio' + track).play();
            document.getElementById('audio' + track).volume = 0.5;
        }

    }

})


aboutBtn.addEventListener('click', () => {

    if (playOn == 0 ) {

        track = 5;

        if (soundOn == 0) {
            track = 5;
            document.getElementById('audio' + track).volume = 0;
        }

    }

    if (playOn == 1) {

        if (soundOn == 0) {
            document.getElementById('audio' + track).pause();
            document.getElementById('audio' + track).currentTime = 0;
            track = 5;
            document.getElementById('audio' + track).play();
            document.getElementById('audio' + track).volume = 0;
        }

        if (soundOn == 1) {
            document.getElementById('audio' + track).pause();
            document.getElementById('audio' + track).currentTime = 0;
            track = 5;
            document.getElementById('audio' + track).play();
            document.getElementById('audio' + track).volume = 0.5;
        }

    }

})