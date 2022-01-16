


const mHomeBtn = document.getElementsByClassName('menu__item')[0];

const mHalfBtn = document.getElementsByClassName('menu__item')[1];

const mSurfingBtn = document.getElementsByClassName('menu__item')[2];

const mSkatingBtn = document.getElementsByClassName('menu__item')[3];

const mBmxBtn = document.getElementsByClassName('menu__item')[4];

const mAboutBtn = document.getElementsByClassName('menu__item')[5];





var mMenu = document.getElementById('m-activatorO');

var mPlayb = document.getElementById('m-play-btn');

var mPauseb = document.getElementById('m-pause-btn');

var mStopb = document.getElementById('m-stop-btn');

var mVolumex = document.getElementById('m-volumeX-btn');

var mVolume = document.getElementById('m-volume-btn');


let mPlayOn = 0;

let mSoundOn = 1;



mPlayb.addEventListener('click', () => {

    mPlayb.style.display = 'none';

    mPauseb.style.display = 'block';

    mPlayOn = 1;

    document.getElementById('m-audio' + track).volume = 0.5;
    document.getElementById('m-audio' + track).play()

})

mPauseb.addEventListener('click', () => {

    mPauseb.style.display = 'none';

    mPlayb.style.display = 'block';

    mPlayOn = 0;

    document.getElementById('m-audio' + track).pause()

})

mStopb.addEventListener('click', () => {

    mPauseb.style.display = 'none';

    mPlayb.style.display = 'block';

    mPlayOn = 0;

    document.getElementById('m-audio' + track).pause();
    document.getElementById('m-audio' + track).currentTime = 0;

})

mVolume.addEventListener('click', () => {

    mVolume.style.display = 'none';

    mVolumex.style.display = 'block';

    mSoundOn = 0;

    document.getElementById('m-audio' + track).volume = 0;

})

mVolumex.addEventListener('click', () => {

    mVolumex.style.display = 'none';

    mVolume.style.display = 'block';

    mSoundOn = 1;

    document.getElementById('m-audio' + track).volume = 0.5;

})







let track = 0;




mHomeBtn.addEventListener('click', () => {

    if (mPlayOn == 0 ) {

        track = 0;

        if (mSoundOn == 0) {
            document.getElementById('m-audio' + track).volume = 0;
        }

    }

    if (mPlayOn == 1) {

        if (mSoundOn == 0) {
            document.getElementById('m-audio' + track).pause();
            document.getElementById('m-audio' + track).currentTime = 0;
            track = 0;
            document.getElementById('m-audio' + track).play();
            document.getElementById('m-audio' + track).volume = 0;
        }

        if (mSoundOn == 1) {
            document.getElementById('m-audio' + track).pause();
            document.getElementById('m-audio' + track).currentTime = 0;
            track = 0;
            document.getElementById('m-audio' + track).play();
            document.getElementById('m-audio' + track).volume = 0.5;
        }

    }

})

mHalfBtn.addEventListener('click', () => {

    if (mPlayOn == 0 ) {

        track = 1;

        if (mSoundOn == 0) {
            document.getElementById('m-audio' + track).volume = 0;
        }

    }

    if (mPlayOn == 1) {

        if (mSoundOn == 0) {
            document.getElementById('m-audio' + track).pause();
            document.getElementById('m-audio' + track).currentTime = 0;
            track = 1;
            document.getElementById('m-audio' + track).play();
            document.getElementById('m-audio' + track).volume = 0;
        }

        if (mSoundOn == 1) {
            document.getElementById('m-audio' + track).pause();
            document.getElementById('m-audio' + track).currentTime = 0;
            track = 1;
            document.getElementById('m-audio' + track).play();
            document.getElementById('m-audio' + track).volume = 0.5;
        }

    }

})

mSurfingBtn.addEventListener('click', () => {

    if (mPlayOn == 0 ) {

        track = 2;

        if (mSoundOn == 0) {
            document.getElementById('m-audio' + track).volume = 0;
        }

    }

    if (mPlayOn == 1) {

        if (mSoundOn == 0) {
            document.getElementById('m-audio' + track).pause();
            document.getElementById('m-audio' + track).currentTime = 0;
            track = 2;
            document.getElementById('m-audio' + track).play();
            document.getElementById('m-audio' + track).volume = 0;
        }

        if (mSoundOn == 1) {
            document.getElementById('m-audio' + track).pause();
            document.getElementById('m-audio' + track).currentTime = 0;
            track = 2;
            document.getElementById('m-audio' + track).play();
            document.getElementById('m-audio' + track).volume = 0.5;
        }

    }

})

mSkatingBtn.addEventListener('click', () => {

    if (mPlayOn == 0 ) {

        track = 3;

        if (mSoundOn == 0) {
            document.getElementById('m-audio' + track).volume = 0;
        }

    }

    if (mPlayOn == 1) {

        if (mSoundOn == 0) {
            document.getElementById('m-audio' + track).pause();
            document.getElementById('m-audio' + track).currentTime = 0;
            track = 3;
            document.getElementById('m-audio' + track).play();
            document.getElementById('m-audio' + track).volume = 0;
        }

        if (mSoundOn == 1) {
            document.getElementById('m-audio' + track).pause();
            document.getElementById('m-audio' + track).currentTime = 0;
            track = 3;
            document.getElementById('m-audio' + track).play();
            document.getElementById('m-audio' + track).volume = 0.5;
        }

    }

})

mBmxBtn.addEventListener('click', () => {

    if (mPlayOn == 0 ) {

        track = 4;

        if (mSoundOn == 0) {
            track = 4;
            document.getElementById('m-audio' + track).volume = 0;
        }

    }

    if (mPlayOn == 1) {

        if (mSoundOn == 0) {
            document.getElementById('m-audio' + track).pause();
            document.getElementById('m-audio' + track).currentTime = 0;
            track = 4;
            document.getElementById('m-audio' + track).play();
            document.getElementById('m-audio' + track).volume = 0;
        }

        if (mSoundOn == 1) {
            document.getElementById('m-audio' + track).pause();
            document.getElementById('m-audio' + track).currentTime = 0;
            track = 4;
            document.getElementById('m-audio' + track).play();
            document.getElementById('m-audio' + track).volume = 0.5;
        }

    }

})


mAboutBtn.addEventListener('click', () => {

    if (mPlayOn == 0 ) {

        track = 5;

        if (mSoundOn == 0) {
            track = 5;
            document.getElementById('m-audio' + track).volume = 0;
        }

    }

    if (mPlayOn == 1) {

        if (mSoundOn == 0) {
            document.getElementById('m-audio' + track).pause();
            document.getElementById('m-audio' + track).currentTime = 0;
            track = 5;
            document.getElementById('m-audio' + track).play();
            document.getElementById('m-audio' + track).volume = 0;
        }

        if (mSoundOn == 1) {
            document.getElementById('m-audio' + track).pause();
            document.getElementById('m-audio' + track).currentTime = 0;
            track = 5;
            document.getElementById('m-audio' + track).play();
            document.getElementById('m-audio' + track).volume = 0.5;
        }

    }

})