

var cartIcon = document.querySelector("#cart-icon");

var fullCart = document.querySelector(".fullcart");

var cartX = document.querySelector("#cart-x");

var cart = document.querySelector(".cart");

var aboutTheApp = document.querySelector('.header__nav--about');

var aboutX = document.querySelector("#about-x");

var about = document.querySelector(".about");







cartIcon.addEventListener('click', () => {

    cart.classList.toggle('active');

})

fullCart.addEventListener('click', () => {

    cart.classList.toggle('active');

})

cartX.addEventListener('click', () => {

    cart.classList.toggle('active');

})

aboutTheApp.addEventListener('click', () => {

    aboutX.style.pointerEvents = 'all';
    about.style.pointerEvents = 'all';
    about.style.opacity = '1';

})

aboutX.addEventListener('click', () => {
    
    aboutX.style.pointerEvents = 'none';
    about.style.pointerEvents = 'none';
    about.style.opacity = '0';

})







//          color options          //


{

    //     brick 1x1     //

    {

        var ca11a = document.querySelector("#c-a11a");
        var ca11b = document.querySelector("#c-a11b");
        var ca11g = document.querySelector("#c-a11g");
        var ca11k = document.querySelector("#c-a11k");
        var ca11r = document.querySelector("#c-a11r");
        var ca11w = document.querySelector("#c-a11w");

        var sca11A = document.querySelector(".c-a11a");
        var sca11B = document.querySelector(".c-a11b");
        var sca11G = document.querySelector(".c-a11g");
        var sca11K = document.querySelector(".c-a11k");
        var sca11R = document.querySelector(".c-a11r");
        var sca11W = document.querySelector(".c-a11w");

        var ia11 = document.querySelector("#i-a11");
        var ia11a = document.querySelector("#i-a11a");
        var ia11b = document.querySelector("#i-a11b");
        var ia11g = document.querySelector("#i-a11g");
        var ia11k = document.querySelector("#i-a11k");
        var ia11r = document.querySelector("#i-a11r");
        var ia11w = document.querySelector("#i-a11w");


        ca11a.addEventListener('click', () => {

            ia11.style.display = 'none';
            ia11b.style.display = 'none';
            ia11g.style.display = 'none';
            ia11k.style.display = 'none';
            ia11r.style.display = 'none';
            ia11w.style.display = 'none';


            ia11a.style.display = 'block';


            ia11a.classList.add('card--img');

            ia11b.classList.remove('card--img');
            ia11g.classList.remove('card--img');
            ia11k.classList.remove('card--img');
            ia11r.classList.remove('card--img');
            ia11w.classList.remove('card--img');



            sca11A.classList.add('active');

            sca11B.classList.remove('active');
            sca11G.classList.remove('active');
            sca11K.classList.remove('active');
            sca11R.classList.remove('active');
            sca11W.classList.remove('active');

        })

        ca11b.addEventListener('click', () => {

            ia11.style.display = 'none';
            ia11a.style.display = 'none';
            ia11g.style.display = 'none';
            ia11k.style.display = 'none';
            ia11r.style.display = 'none';
            ia11w.style.display = 'none';


            ia11b.style.display = 'block';


            ia11b.classList.add('card--img');

            ia11a.classList.remove('card--img');
            ia11g.classList.remove('card--img');
            ia11k.classList.remove('card--img');
            ia11r.classList.remove('card--img');
            ia11w.classList.remove('card--img');



            sca11B.classList.add('active');

            sca11A.classList.remove('active');
            sca11G.classList.remove('active');
            sca11K.classList.remove('active');
            sca11R.classList.remove('active');
            sca11W.classList.remove('active');

        })

        ca11g.addEventListener('click', () => {

            ia11.style.display = 'none';
            ia11a.style.display = 'none';
            ia11b.style.display = 'none';
            ia11k.style.display = 'none';
            ia11r.style.display = 'none';
            ia11w.style.display = 'none';


            ia11g.style.display = 'block';


            ia11g.classList.add('card--img');

            ia11a.classList.remove('card--img');
            ia11b.classList.remove('card--img');
            ia11k.classList.remove('card--img');
            ia11r.classList.remove('card--img');
            ia11w.classList.remove('card--img');



            sca11G.classList.add('active');

            sca11A.classList.remove('active');
            sca11B.classList.remove('active');
            sca11K.classList.remove('active');
            sca11R.classList.remove('active');
            sca11W.classList.remove('active');

        })

        ca11k.addEventListener('click', () => {

            ia11.style.display = 'none';
            ia11a.style.display = 'none';
            ia11b.style.display = 'none';
            ia11g.style.display = 'none';
            ia11r.style.display = 'none';
            ia11w.style.display = 'none';


            ia11k.style.display = 'block';


            ia11k.classList.add('card--img');

            ia11a.classList.remove('card--img');
            ia11b.classList.remove('card--img');
            ia11g.classList.remove('card--img');
            ia11r.classList.remove('card--img');
            ia11w.classList.remove('card--img');



            sca11K.classList.add('active');

            sca11A.classList.remove('active');
            sca11B.classList.remove('active');
            sca11G.classList.remove('active');
            sca11R.classList.remove('active');
            sca11W.classList.remove('active');

        })

        ca11r.addEventListener('click', () => {

            ia11.style.display = 'none';
            ia11a.style.display = 'none';
            ia11b.style.display = 'none';
            ia11g.style.display = 'none';
            ia11k.style.display = 'none';
            ia11w.style.display = 'none';


            ia11r.style.display = 'block';


            ia11r.classList.add('card--img');

            ia11a.classList.remove('card--img');
            ia11b.classList.remove('card--img');
            ia11g.classList.remove('card--img');
            ia11k.classList.remove('card--img');
            ia11w.classList.remove('card--img');



            sca11R.classList.add('active');

            sca11A.classList.remove('active');
            sca11B.classList.remove('active');
            sca11G.classList.remove('active');
            sca11K.classList.remove('active');
            sca11W.classList.remove('active');

        })

        ca11w.addEventListener('click', () => {

            ia11.style.display = 'none';
            ia11a.style.display = 'none';
            ia11b.style.display = 'none';
            ia11g.style.display = 'none';
            ia11k.style.display = 'none';
            ia11r.style.display = 'none';


            ia11w.style.display = 'block';


            ia11w.classList.add('card--img');

            ia11a.classList.remove('card--img');
            ia11b.classList.remove('card--img');
            ia11g.classList.remove('card--img');
            ia11k.classList.remove('card--img');
            ia11r.classList.remove('card--img');



            sca11W.classList.add('active');

            sca11A.classList.remove('active');
            sca11B.classList.remove('active');
            sca11G.classList.remove('active');
            sca11K.classList.remove('active');
            sca11R.classList.remove('active');

        })

    }



    //     brick 1x2     //

    {

        var ca12a = document.querySelector("#c-a12a");
        var ca12b = document.querySelector("#c-a12b");
        var ca12g = document.querySelector("#c-a12g");
        var ca12k = document.querySelector("#c-a12k");
        var ca12r = document.querySelector("#c-a12r");
        var ca12w = document.querySelector("#c-a12w");

        var sca12A = document.querySelector(".c-a12a");
        var sca12B = document.querySelector(".c-a12b");
        var sca12G = document.querySelector(".c-a12g");
        var sca12K = document.querySelector(".c-a12k");
        var sca12R = document.querySelector(".c-a12r");
        var sca12W = document.querySelector(".c-a12w");

        var ia12 = document.querySelector("#i-a12");
        var ia12a = document.querySelector("#i-a12a");
        var ia12b = document.querySelector("#i-a12b");
        var ia12g = document.querySelector("#i-a12g");
        var ia12k = document.querySelector("#i-a12k");
        var ia12r = document.querySelector("#i-a12r");
        var ia12w = document.querySelector("#i-a12w");


        ca12a.addEventListener('click', () => {

            ia12.style.display = 'none';
            ia12b.style.display = 'none';
            ia12g.style.display = 'none';
            ia12k.style.display = 'none';
            ia12r.style.display = 'none';
            ia12w.style.display = 'none';


            ia12a.style.display = 'block';



            ia12a.classList.add('card--img');

            ia12b.classList.remove('card--img');
            ia12g.classList.remove('card--img');
            ia12k.classList.remove('card--img');
            ia12r.classList.remove('card--img');
            ia12w.classList.remove('card--img');



            sca12A.classList.add('active');

            sca12B.classList.remove('active');
            sca12G.classList.remove('active');
            sca12K.classList.remove('active');
            sca12R.classList.remove('active');
            sca12W.classList.remove('active');

        })

        ca12b.addEventListener('click', () => {

            ia12.style.display = 'none';
            ia12a.style.display = 'none';
            ia12g.style.display = 'none';
            ia12k.style.display = 'none';
            ia12r.style.display = 'none';
            ia12w.style.display = 'none';


            ia12b.style.display = 'block';



            ia12b.classList.add('card--img');

            ia12a.classList.remove('card--img');
            ia12g.classList.remove('card--img');
            ia12k.classList.remove('card--img');
            ia12r.classList.remove('card--img');
            ia12w.classList.remove('card--img');



            sca12B.classList.add('active');

            sca12A.classList.remove('active');
            sca12G.classList.remove('active');
            sca12K.classList.remove('active');
            sca12R.classList.remove('active');
            sca12W.classList.remove('active');

        })

        ca12g.addEventListener('click', () => {

            ia12.style.display = 'none';
            ia12a.style.display = 'none';
            ia12b.style.display = 'none';
            ia12k.style.display = 'none';
            ia12r.style.display = 'none';
            ia12w.style.display = 'none';


            ia12g.style.display = 'block';



            ia12g.classList.add('card--img');

            ia12a.classList.remove('card--img');
            ia12b.classList.remove('card--img');
            ia12k.classList.remove('card--img');
            ia12r.classList.remove('card--img');
            ia12w.classList.remove('card--img');



            sca12G.classList.add('active');

            sca12A.classList.remove('active');
            sca12B.classList.remove('active');
            sca12K.classList.remove('active');
            sca12R.classList.remove('active');
            sca12W.classList.remove('active');

        })

        ca12k.addEventListener('click', () => {

            ia12.style.display = 'none';
            ia12a.style.display = 'none';
            ia12b.style.display = 'none';
            ia12g.style.display = 'none';
            ia12r.style.display = 'none';
            ia12w.style.display = 'none';


            ia12k.style.display = 'block';



            ia12k.classList.add('card--img');

            ia12a.classList.remove('card--img');
            ia12b.classList.remove('card--img');
            ia12g.classList.remove('card--img');
            ia12r.classList.remove('card--img');
            ia12w.classList.remove('card--img');



            sca12K.classList.add('active');

            sca12A.classList.remove('active');
            sca12B.classList.remove('active');
            sca12G.classList.remove('active');
            sca12R.classList.remove('active');
            sca12W.classList.remove('active');

        })

        ca12r.addEventListener('click', () => {

            ia12.style.display = 'none';
            ia12a.style.display = 'none';
            ia12b.style.display = 'none';
            ia12g.style.display = 'none';
            ia12k.style.display = 'none';
            ia12w.style.display = 'none';


            ia12r.style.display = 'block';



            ia12r.classList.add('card--img');

            ia12a.classList.remove('card--img');
            ia12b.classList.remove('card--img');
            ia12g.classList.remove('card--img');
            ia12k.classList.remove('card--img');
            ia12w.classList.remove('card--img');



            sca12R.classList.add('active');

            sca12A.classList.remove('active');
            sca12B.classList.remove('active');
            sca12G.classList.remove('active');
            sca12K.classList.remove('active');
            sca12W.classList.remove('active');

        })

        ca12w.addEventListener('click', () => {

            ia12.style.display = 'none';
            ia12a.style.display = 'none';
            ia12b.style.display = 'none';
            ia12g.style.display = 'none';
            ia12k.style.display = 'none';
            ia12r.style.display = 'none';


            ia12w.style.display = 'block';



            ia12w.classList.add('card--img');

            ia12a.classList.remove('card--img');
            ia12b.classList.remove('card--img');
            ia12g.classList.remove('card--img');
            ia12k.classList.remove('card--img');
            ia12r.classList.remove('card--img');



            sca12W.classList.add('active');

            sca12A.classList.remove('active');
            sca12B.classList.remove('active');
            sca12G.classList.remove('active');
            sca12K.classList.remove('active');
            sca12R.classList.remove('active');

        })


    }



    //     brick 1x3     //

    {

        var ca13a = document.querySelector("#c-a13a");
        var ca13b = document.querySelector("#c-a13b");
        var ca13g = document.querySelector("#c-a13g");
        var ca13k = document.querySelector("#c-a13k");
        var ca13r = document.querySelector("#c-a13r");
        var ca13w = document.querySelector("#c-a13w");

        var sca13A = document.querySelector(".c-a13a");
        var sca13B = document.querySelector(".c-a13b");
        var sca13G = document.querySelector(".c-a13g");
        var sca13K = document.querySelector(".c-a13k");
        var sca13R = document.querySelector(".c-a13r");
        var sca13W = document.querySelector(".c-a13w");

        var ia13 = document.querySelector("#i-a13");
        var ia13a = document.querySelector("#i-a13a");
        var ia13b = document.querySelector("#i-a13b");
        var ia13g = document.querySelector("#i-a13g");
        var ia13k = document.querySelector("#i-a13k");
        var ia13r = document.querySelector("#i-a13r");
        var ia13w = document.querySelector("#i-a13w");


        ca13a.addEventListener('click', () => {

            ia13.style.display = 'none';
            ia13b.style.display = 'none';
            ia13g.style.display = 'none';
            ia13k.style.display = 'none';
            ia13r.style.display = 'none';
            ia13w.style.display = 'none';


            ia13a.style.display = 'block';



            ia13a.classList.add('card--img');

            ia13b.classList.remove('card--img');
            ia13g.classList.remove('card--img');
            ia13k.classList.remove('card--img');
            ia13r.classList.remove('card--img');
            ia13w.classList.remove('card--img');



            sca13A.classList.add('active');

            sca13B.classList.remove('active');
            sca13G.classList.remove('active');
            sca13K.classList.remove('active');
            sca13R.classList.remove('active');
            sca13W.classList.remove('active');

        })

        ca13b.addEventListener('click', () => {

            ia13.style.display = 'none';
            ia13a.style.display = 'none';
            ia13g.style.display = 'none';
            ia13k.style.display = 'none';
            ia13r.style.display = 'none';
            ia13w.style.display = 'none';


            ia13b.style.display = 'block';



            ia13b.classList.add('card--img');

            ia13a.classList.remove('card--img');
            ia13g.classList.remove('card--img');
            ia13k.classList.remove('card--img');
            ia13r.classList.remove('card--img');
            ia13w.classList.remove('card--img');



            sca13B.classList.add('active');

            sca13A.classList.remove('active');
            sca13G.classList.remove('active');
            sca13K.classList.remove('active');
            sca13R.classList.remove('active');
            sca13W.classList.remove('active');

        })

        ca13g.addEventListener('click', () => {

            ia13.style.display = 'none';
            ia13a.style.display = 'none';
            ia13b.style.display = 'none';
            ia13k.style.display = 'none';
            ia13r.style.display = 'none';
            ia13w.style.display = 'none';


            ia13g.style.display = 'block';



            ia13g.classList.add('card--img');

            ia13a.classList.remove('card--img');
            ia13b.classList.remove('card--img');
            ia13k.classList.remove('card--img');
            ia13r.classList.remove('card--img');
            ia13w.classList.remove('card--img');



            sca13G.classList.add('active');

            sca13A.classList.remove('active');
            sca13B.classList.remove('active');
            sca13K.classList.remove('active');
            sca13R.classList.remove('active');
            sca13W.classList.remove('active');

        })

        ca13k.addEventListener('click', () => {

            ia13.style.display = 'none';
            ia13a.style.display = 'none';
            ia13b.style.display = 'none';
            ia13g.style.display = 'none';
            ia13r.style.display = 'none';
            ia13w.style.display = 'none';


            ia13k.style.display = 'block';



            ia13k.classList.add('card--img');

            ia13a.classList.remove('card--img');
            ia13b.classList.remove('card--img');
            ia13g.classList.remove('card--img');
            ia13r.classList.remove('card--img');
            ia13w.classList.remove('card--img');



            sca13K.classList.add('active');

            sca13A.classList.remove('active');
            sca13B.classList.remove('active');
            sca13G.classList.remove('active');
            sca13R.classList.remove('active');
            sca13W.classList.remove('active');

        })

        ca13r.addEventListener('click', () => {

            ia13.style.display = 'none';
            ia13a.style.display = 'none';
            ia13b.style.display = 'none';
            ia13g.style.display = 'none';
            ia13k.style.display = 'none';
            ia13w.style.display = 'none';


            ia13r.style.display = 'block';



            ia13r.classList.add('card--img');

            ia13a.classList.remove('card--img');
            ia13b.classList.remove('card--img');
            ia13g.classList.remove('card--img');
            ia13k.classList.remove('card--img');
            ia13w.classList.remove('card--img');



            sca13R.classList.add('active');

            sca13A.classList.remove('active');
            sca13B.classList.remove('active');
            sca13G.classList.remove('active');
            sca13K.classList.remove('active');
            sca13W.classList.remove('active');

        })

        ca13w.addEventListener('click', () => {

            ia13.style.display = 'none';
            ia13a.style.display = 'none';
            ia13b.style.display = 'none';
            ia13g.style.display = 'none';
            ia13k.style.display = 'none';
            ia13r.style.display = 'none';


            ia13w.style.display = 'block';



            ia13w.classList.add('card--img');

            ia13a.classList.remove('card--img');
            ia13b.classList.remove('card--img');
            ia13g.classList.remove('card--img');
            ia13k.classList.remove('card--img');
            ia13r.classList.remove('card--img');



            sca13W.classList.add('active');

            sca13A.classList.remove('active');
            sca13B.classList.remove('active');
            sca13G.classList.remove('active');
            sca13K.classList.remove('active');
            sca13R.classList.remove('active');

        })

    }



    //     brick 1x4     //

    {


        var ca14a = document.querySelector("#c-a14a");
        var ca14b = document.querySelector("#c-a14b");
        var ca14g = document.querySelector("#c-a14g");
        var ca14k = document.querySelector("#c-a14k");
        var ca14r = document.querySelector("#c-a14r");
        var ca14w = document.querySelector("#c-a14w");

        var sca14A = document.querySelector(".c-a14a");
        var sca14B = document.querySelector(".c-a14b");
        var sca14G = document.querySelector(".c-a14g");
        var sca14K = document.querySelector(".c-a14k");
        var sca14R = document.querySelector(".c-a14r");
        var sca14W = document.querySelector(".c-a14w");

        var ia14 = document.querySelector("#i-a14");
        var ia14a = document.querySelector("#i-a14a");
        var ia14b = document.querySelector("#i-a14b");
        var ia14g = document.querySelector("#i-a14g");
        var ia14k = document.querySelector("#i-a14k");
        var ia14r = document.querySelector("#i-a14r");
        var ia14w = document.querySelector("#i-a14w");


        ca14a.addEventListener('click', () => {

            ia14.style.display = 'none';
            ia14b.style.display = 'none';
            ia14g.style.display = 'none';
            ia14k.style.display = 'none';
            ia14r.style.display = 'none';
            ia14w.style.display = 'none';


            ia14a.style.display = 'block';



            ia14a.classList.add('card--img');

            ia14b.classList.remove('card--img');
            ia14g.classList.remove('card--img');
            ia14k.classList.remove('card--img');
            ia14r.classList.remove('card--img');
            ia14w.classList.remove('card--img');



            sca14A.classList.add('active');

            sca14B.classList.remove('active');
            sca14G.classList.remove('active');
            sca14K.classList.remove('active');
            sca14R.classList.remove('active');
            sca14W.classList.remove('active');

        })

        ca14b.addEventListener('click', () => {

            ia14.style.display = 'none';
            ia14a.style.display = 'none';
            ia14g.style.display = 'none';
            ia14k.style.display = 'none';
            ia14r.style.display = 'none';
            ia14w.style.display = 'none';


            ia14b.style.display = 'block';



            ia14b.classList.add('card--img');

            ia14a.classList.remove('card--img');
            ia14g.classList.remove('card--img');
            ia14k.classList.remove('card--img');
            ia14r.classList.remove('card--img');
            ia14w.classList.remove('card--img');



            sca14B.classList.add('active');

            sca14A.classList.remove('active');
            sca14G.classList.remove('active');
            sca14K.classList.remove('active');
            sca14R.classList.remove('active');
            sca14W.classList.remove('active');

        })

        ca14g.addEventListener('click', () => {

            ia14.style.display = 'none';
            ia14a.style.display = 'none';
            ia14b.style.display = 'none';
            ia14k.style.display = 'none';
            ia14r.style.display = 'none';
            ia14w.style.display = 'none';


            ia14g.style.display = 'block';



            ia14g.classList.add('card--img');

            ia14a.classList.remove('card--img');
            ia14b.classList.remove('card--img');
            ia14k.classList.remove('card--img');
            ia14r.classList.remove('card--img');
            ia14w.classList.remove('card--img');



            sca14G.classList.add('active');

            sca14A.classList.remove('active');
            sca14B.classList.remove('active');
            sca14K.classList.remove('active');
            sca14R.classList.remove('active');
            sca14W.classList.remove('active');

        })

        ca14k.addEventListener('click', () => {

            ia14.style.display = 'none';
            ia14a.style.display = 'none';
            ia14b.style.display = 'none';
            ia14g.style.display = 'none';
            ia14r.style.display = 'none';
            ia14w.style.display = 'none';


            ia14k.style.display = 'block';



            ia14k.classList.add('card--img');

            ia14a.classList.remove('card--img');
            ia14b.classList.remove('card--img');
            ia14g.classList.remove('card--img');
            ia14r.classList.remove('card--img');
            ia14w.classList.remove('card--img');



            sca14K.classList.add('active');

            sca14A.classList.remove('active');
            sca14B.classList.remove('active');
            sca14G.classList.remove('active');
            sca14R.classList.remove('active');
            sca14W.classList.remove('active');

        })

        ca14r.addEventListener('click', () => {

            ia14.style.display = 'none';
            ia14a.style.display = 'none';
            ia14b.style.display = 'none';
            ia14g.style.display = 'none';
            ia14k.style.display = 'none';
            ia14w.style.display = 'none';


            ia14r.style.display = 'block';



            ia14r.classList.add('card--img');

            ia14a.classList.remove('card--img');
            ia14b.classList.remove('card--img');
            ia14g.classList.remove('card--img');
            ia14k.classList.remove('card--img');
            ia14w.classList.remove('card--img');



            sca14R.classList.add('active');

            sca14A.classList.remove('active');
            sca14B.classList.remove('active');
            sca14G.classList.remove('active');
            sca14K.classList.remove('active');
            sca14W.classList.remove('active');

        })

        ca14w.addEventListener('click', () => {

            ia14.style.display = 'none';
            ia14a.style.display = 'none';
            ia14b.style.display = 'none';
            ia14g.style.display = 'none';
            ia14k.style.display = 'none';
            ia14r.style.display = 'none';


            ia14w.style.display = 'block';



            ia14w.classList.add('card--img');

            ia14a.classList.remove('card--img');
            ia14b.classList.remove('card--img');
            ia14g.classList.remove('card--img');
            ia14k.classList.remove('card--img');
            ia14r.classList.remove('card--img');



            sca14W.classList.add('active');

            sca14A.classList.remove('active');
            sca14B.classList.remove('active');
            sca14G.classList.remove('active');
            sca14K.classList.remove('active');
            sca14R.classList.remove('active');

        })


    }



    //     brick 1x6     //

    {


        var ca16a = document.querySelector("#c-a16a");
        var ca16b = document.querySelector("#c-a16b");
        var ca16g = document.querySelector("#c-a16g");
        var ca16k = document.querySelector("#c-a16k");
        var ca16r = document.querySelector("#c-a16r");
        var ca16w = document.querySelector("#c-a16w");

        var sca16A = document.querySelector(".c-a16a");
        var sca16B = document.querySelector(".c-a16b");
        var sca16G = document.querySelector(".c-a16g");
        var sca16K = document.querySelector(".c-a16k");
        var sca16R = document.querySelector(".c-a16r");
        var sca16W = document.querySelector(".c-a16w");

        var ia16 = document.querySelector("#i-a16");
        var ia16a = document.querySelector("#i-a16a");
        var ia16b = document.querySelector("#i-a16b");
        var ia16g = document.querySelector("#i-a16g");
        var ia16k = document.querySelector("#i-a16k");
        var ia16r = document.querySelector("#i-a16r");
        var ia16w = document.querySelector("#i-a16w");


        ca16a.addEventListener('click', () => {

            ia16.style.display = 'none';
            ia16b.style.display = 'none';
            ia16g.style.display = 'none';
            ia16k.style.display = 'none';
            ia16r.style.display = 'none';
            ia16w.style.display = 'none';


            ia16a.style.display = 'block';



            ia16a.classList.add('card--img');

            ia16b.classList.remove('card--img');
            ia16g.classList.remove('card--img');
            ia16k.classList.remove('card--img');
            ia16r.classList.remove('card--img');
            ia16w.classList.remove('card--img');



            sca16A.classList.add('active');

            sca16B.classList.remove('active');
            sca16G.classList.remove('active');
            sca16K.classList.remove('active');
            sca16R.classList.remove('active');
            sca16W.classList.remove('active');

        })

        ca16b.addEventListener('click', () => {

            ia16.style.display = 'none';
            ia16a.style.display = 'none';
            ia16g.style.display = 'none';
            ia16k.style.display = 'none';
            ia16r.style.display = 'none';
            ia16w.style.display = 'none';


            ia16b.style.display = 'block';



            ia16b.classList.add('card--img');

            ia16a.classList.remove('card--img');
            ia16g.classList.remove('card--img');
            ia16k.classList.remove('card--img');
            ia16r.classList.remove('card--img');
            ia16w.classList.remove('card--img');



            sca16B.classList.add('active');

            sca16A.classList.remove('active');
            sca16G.classList.remove('active');
            sca16K.classList.remove('active');
            sca16R.classList.remove('active');
            sca16W.classList.remove('active');

        })

        ca16g.addEventListener('click', () => {

            ia16.style.display = 'none';
            ia16a.style.display = 'none';
            ia16b.style.display = 'none';
            ia16k.style.display = 'none';
            ia16r.style.display = 'none';
            ia16w.style.display = 'none';


            ia16g.style.display = 'block';



            ia16g.classList.add('card--img');

            ia16a.classList.remove('card--img');
            ia16b.classList.remove('card--img');
            ia16k.classList.remove('card--img');
            ia16r.classList.remove('card--img');
            ia16w.classList.remove('card--img');



            sca16G.classList.add('active');

            sca16A.classList.remove('active');
            sca16B.classList.remove('active');
            sca16K.classList.remove('active');
            sca16R.classList.remove('active');
            sca16W.classList.remove('active');

        })

        ca16k.addEventListener('click', () => {

            ia16.style.display = 'none';
            ia16a.style.display = 'none';
            ia16b.style.display = 'none';
            ia16g.style.display = 'none';
            ia16r.style.display = 'none';
            ia16w.style.display = 'none';


            ia16k.style.display = 'block';



            ia16k.classList.add('card--img');

            ia16a.classList.remove('card--img');
            ia16b.classList.remove('card--img');
            ia16g.classList.remove('card--img');
            ia16r.classList.remove('card--img');
            ia16w.classList.remove('card--img');



            sca16K.classList.add('active');

            sca16A.classList.remove('active');
            sca16B.classList.remove('active');
            sca16G.classList.remove('active');
            sca16R.classList.remove('active');
            sca16W.classList.remove('active');

        })

        ca16r.addEventListener('click', () => {

            ia16.style.display = 'none';
            ia16a.style.display = 'none';
            ia16b.style.display = 'none';
            ia16g.style.display = 'none';
            ia16k.style.display = 'none';
            ia16w.style.display = 'none';


            ia16r.style.display = 'block';



            ia16r.classList.add('card--img');

            ia16a.classList.remove('card--img');
            ia16b.classList.remove('card--img');
            ia16g.classList.remove('card--img');
            ia16k.classList.remove('card--img');
            ia16w.classList.remove('card--img');



            sca16R.classList.add('active');

            sca16A.classList.remove('active');
            sca16B.classList.remove('active');
            sca16G.classList.remove('active');
            sca16K.classList.remove('active');
            sca16W.classList.remove('active');

        })

        ca16w.addEventListener('click', () => {

            ia16.style.display = 'none';
            ia16a.style.display = 'none';
            ia16b.style.display = 'none';
            ia16g.style.display = 'none';
            ia16k.style.display = 'none';
            ia16r.style.display = 'none';


            ia16w.style.display = 'block';



            ia16w.classList.add('card--img');

            ia16a.classList.remove('card--img');
            ia16b.classList.remove('card--img');
            ia16g.classList.remove('card--img');
            ia16k.classList.remove('card--img');
            ia16r.classList.remove('card--img');



            sca16W.classList.add('active');

            sca16A.classList.remove('active');
            sca16B.classList.remove('active');
            sca16G.classList.remove('active');
            sca16K.classList.remove('active');
            sca16R.classList.remove('active');

        })

    }



    //     brick 2x2     //

    {


        var ca22a = document.querySelector("#c-a22a");
        var ca22b = document.querySelector("#c-a22b");
        var ca22g = document.querySelector("#c-a22g");
        var ca22k = document.querySelector("#c-a22k");
        var ca22r = document.querySelector("#c-a22r");
        var ca22w = document.querySelector("#c-a22w");

        var sca22A = document.querySelector(".c-a22a");
        var sca22B = document.querySelector(".c-a22b");
        var sca22G = document.querySelector(".c-a22g");
        var sca22K = document.querySelector(".c-a22k");
        var sca22R = document.querySelector(".c-a22r");
        var sca22W = document.querySelector(".c-a22w");

        var ia22 = document.querySelector("#i-a22");
        var ia22a = document.querySelector("#i-a22a");
        var ia22b = document.querySelector("#i-a22b");
        var ia22g = document.querySelector("#i-a22g");
        var ia22k = document.querySelector("#i-a22k");
        var ia22r = document.querySelector("#i-a22r");
        var ia22w = document.querySelector("#i-a22w");


        ca22a.addEventListener('click', () => {

            ia22.style.display = 'none';
            ia22b.style.display = 'none';
            ia22g.style.display = 'none';
            ia22k.style.display = 'none';
            ia22r.style.display = 'none';
            ia22w.style.display = 'none';


            ia22a.style.display = 'block';



            ia22a.classList.add('card--img');

            ia22b.classList.remove('card--img');
            ia22g.classList.remove('card--img');
            ia22k.classList.remove('card--img');
            ia22r.classList.remove('card--img');
            ia22w.classList.remove('card--img');



            sca22A.classList.add('active');

            sca22B.classList.remove('active');
            sca22G.classList.remove('active');
            sca22K.classList.remove('active');
            sca22R.classList.remove('active');
            sca22W.classList.remove('active');

        })

        ca22b.addEventListener('click', () => {

            ia22.style.display = 'none';
            ia22a.style.display = 'none';
            ia22g.style.display = 'none';
            ia22k.style.display = 'none';
            ia22r.style.display = 'none';
            ia22w.style.display = 'none';


            ia22b.style.display = 'block';



            ia22b.classList.add('card--img');

            ia22a.classList.remove('card--img');
            ia22g.classList.remove('card--img');
            ia22k.classList.remove('card--img');
            ia22r.classList.remove('card--img');
            ia22w.classList.remove('card--img');



            sca22B.classList.add('active');

            sca22A.classList.remove('active');
            sca22G.classList.remove('active');
            sca22K.classList.remove('active');
            sca22R.classList.remove('active');
            sca22W.classList.remove('active');

        })

        ca22g.addEventListener('click', () => {

            ia22.style.display = 'none';
            ia22a.style.display = 'none';
            ia22b.style.display = 'none';
            ia22k.style.display = 'none';
            ia22r.style.display = 'none';
            ia22w.style.display = 'none';


            ia22g.style.display = 'block';



            ia22g.classList.add('card--img');

            ia22a.classList.remove('card--img');
            ia22b.classList.remove('card--img');
            ia22k.classList.remove('card--img');
            ia22r.classList.remove('card--img');
            ia22w.classList.remove('card--img');



            sca22G.classList.add('active');

            sca22A.classList.remove('active');
            sca22B.classList.remove('active');
            sca22K.classList.remove('active');
            sca22R.classList.remove('active');
            sca22W.classList.remove('active');

        })

        ca22k.addEventListener('click', () => {

            ia22.style.display = 'none';
            ia22a.style.display = 'none';
            ia22b.style.display = 'none';
            ia22g.style.display = 'none';
            ia22r.style.display = 'none';
            ia22w.style.display = 'none';


            ia22k.style.display = 'block';



            ia22k.classList.add('card--img');

            ia22a.classList.remove('card--img');
            ia22b.classList.remove('card--img');
            ia22g.classList.remove('card--img');
            ia22r.classList.remove('card--img');
            ia22w.classList.remove('card--img');



            sca22K.classList.add('active');

            sca22A.classList.remove('active');
            sca22B.classList.remove('active');
            sca22G.classList.remove('active');
            sca22R.classList.remove('active');
            sca22W.classList.remove('active');

        })

        ca22r.addEventListener('click', () => {

            ia22.style.display = 'none';
            ia22a.style.display = 'none';
            ia22b.style.display = 'none';
            ia22g.style.display = 'none';
            ia22k.style.display = 'none';
            ia22w.style.display = 'none';


            ia22r.style.display = 'block';



            ia22r.classList.add('card--img');

            ia22a.classList.remove('card--img');
            ia22b.classList.remove('card--img');
            ia22g.classList.remove('card--img');
            ia22k.classList.remove('card--img');
            ia22w.classList.remove('card--img');



            sca22R.classList.add('active');

            sca22A.classList.remove('active');
            sca22B.classList.remove('active');
            sca22G.classList.remove('active');
            sca22K.classList.remove('active');
            sca22W.classList.remove('active');

        })

        ca22w.addEventListener('click', () => {

            ia22.style.display = 'none';
            ia22a.style.display = 'none';
            ia22b.style.display = 'none';
            ia22g.style.display = 'none';
            ia22k.style.display = 'none';
            ia22r.style.display = 'none';


            ia22w.style.display = 'block';



            ia22w.classList.add('card--img');

            ia22a.classList.remove('card--img');
            ia22b.classList.remove('card--img');
            ia22g.classList.remove('card--img');
            ia22k.classList.remove('card--img');
            ia22r.classList.remove('card--img');



            sca22W.classList.add('active');

            sca22A.classList.remove('active');
            sca22B.classList.remove('active');
            sca22G.classList.remove('active');
            sca22K.classList.remove('active');
            sca22R.classList.remove('active');

        })

    }



    //     brick 2x3     //

    {

        var ca23a = document.querySelector("#c-a23a");
        var ca23b = document.querySelector("#c-a23b");
        var ca23g = document.querySelector("#c-a23g");
        var ca23k = document.querySelector("#c-a23k");
        var ca23r = document.querySelector("#c-a23r");
        var ca23w = document.querySelector("#c-a23w");

        var sca23A = document.querySelector(".c-a23a");
        var sca23B = document.querySelector(".c-a23b");
        var sca23G = document.querySelector(".c-a23g");
        var sca23K = document.querySelector(".c-a23k");
        var sca23R = document.querySelector(".c-a23r");
        var sca23W = document.querySelector(".c-a23w");

        var ia23 = document.querySelector("#i-a23");
        var ia23a = document.querySelector("#i-a23a");
        var ia23b = document.querySelector("#i-a23b");
        var ia23g = document.querySelector("#i-a23g");
        var ia23k = document.querySelector("#i-a23k");
        var ia23r = document.querySelector("#i-a23r");
        var ia23w = document.querySelector("#i-a23w");


        ca23a.addEventListener('click', () => {

            ia23.style.display = 'none';
            ia23b.style.display = 'none';
            ia23g.style.display = 'none';
            ia23k.style.display = 'none';
            ia23r.style.display = 'none';
            ia23w.style.display = 'none';


            ia23a.style.display = 'block';



            ia23a.classList.add('card--img');

            ia23b.classList.remove('card--img');
            ia23g.classList.remove('card--img');
            ia23k.classList.remove('card--img');
            ia23r.classList.remove('card--img');
            ia23w.classList.remove('card--img');



            sca23A.classList.add('active');

            sca23B.classList.remove('active');
            sca23G.classList.remove('active');
            sca23K.classList.remove('active');
            sca23R.classList.remove('active');
            sca23W.classList.remove('active');

        })

        ca23b.addEventListener('click', () => {

            ia23.style.display = 'none';
            ia23a.style.display = 'none';
            ia23g.style.display = 'none';
            ia23k.style.display = 'none';
            ia23r.style.display = 'none';
            ia23w.style.display = 'none';


            ia23b.style.display = 'block';



            ia23b.classList.add('card--img');

            ia23a.classList.remove('card--img');
            ia23g.classList.remove('card--img');
            ia23k.classList.remove('card--img');
            ia23r.classList.remove('card--img');
            ia23w.classList.remove('card--img');



            sca23B.classList.add('active');

            sca23A.classList.remove('active');
            sca23G.classList.remove('active');
            sca23K.classList.remove('active');
            sca23R.classList.remove('active');
            sca23W.classList.remove('active');

        })

        ca23g.addEventListener('click', () => {

            ia23.style.display = 'none';
            ia23a.style.display = 'none';
            ia23b.style.display = 'none';
            ia23k.style.display = 'none';
            ia23r.style.display = 'none';
            ia23w.style.display = 'none';


            ia23g.style.display = 'block';



            ia23g.classList.add('card--img');

            ia23a.classList.remove('card--img');
            ia23b.classList.remove('card--img');
            ia23k.classList.remove('card--img');
            ia23r.classList.remove('card--img');
            ia23w.classList.remove('card--img');



            sca23G.classList.add('active');

            sca23A.classList.remove('active');
            sca23B.classList.remove('active');
            sca23K.classList.remove('active');
            sca23R.classList.remove('active');
            sca23W.classList.remove('active');

        })

        ca23k.addEventListener('click', () => {

            ia23.style.display = 'none';
            ia23a.style.display = 'none';
            ia23b.style.display = 'none';
            ia23g.style.display = 'none';
            ia23r.style.display = 'none';
            ia23w.style.display = 'none';


            ia23k.style.display = 'block';



            ia23k.classList.add('card--img');

            ia23a.classList.remove('card--img');
            ia23b.classList.remove('card--img');
            ia23g.classList.remove('card--img');
            ia23r.classList.remove('card--img');
            ia23w.classList.remove('card--img');



            sca23K.classList.add('active');

            sca23A.classList.remove('active');
            sca23B.classList.remove('active');
            sca23G.classList.remove('active');
            sca23R.classList.remove('active');
            sca23W.classList.remove('active');

        })

        ca23r.addEventListener('click', () => {

            ia23.style.display = 'none';
            ia23a.style.display = 'none';
            ia23b.style.display = 'none';
            ia23g.style.display = 'none';
            ia23k.style.display = 'none';
            ia23w.style.display = 'none';


            ia23r.style.display = 'block';



            ia23r.classList.add('card--img');

            ia23a.classList.remove('card--img');
            ia23b.classList.remove('card--img');
            ia23g.classList.remove('card--img');
            ia23k.classList.remove('card--img');
            ia23w.classList.remove('card--img');



            sca23R.classList.add('active');

            sca23A.classList.remove('active');
            sca23B.classList.remove('active');
            sca23G.classList.remove('active');
            sca23K.classList.remove('active');
            sca23W.classList.remove('active');

        })

        ca23w.addEventListener('click', () => {

            ia23.style.display = 'none';
            ia23a.style.display = 'none';
            ia23b.style.display = 'none';
            ia23g.style.display = 'none';
            ia23k.style.display = 'none';
            ia23r.style.display = 'none';


            ia23w.style.display = 'block';



            ia23w.classList.add('card--img');

            ia23a.classList.remove('card--img');
            ia23b.classList.remove('card--img');
            ia23g.classList.remove('card--img');
            ia23k.classList.remove('card--img');
            ia23r.classList.remove('card--img');



            sca23W.classList.add('active');

            sca23A.classList.remove('active');
            sca23B.classList.remove('active');
            sca23G.classList.remove('active');
            sca23K.classList.remove('active');
            sca23R.classList.remove('active');

        })

    }



    //     brick 2x4     //

    {

        var ca24a = document.querySelector("#c-a24a");
        var ca24b = document.querySelector("#c-a24b");
        var ca24g = document.querySelector("#c-a24g");
        var ca24k = document.querySelector("#c-a24k");
        var ca24r = document.querySelector("#c-a24r");
        var ca24w = document.querySelector("#c-a24w");

        var sca24A = document.querySelector(".c-a24a");
        var sca24B = document.querySelector(".c-a24b");
        var sca24G = document.querySelector(".c-a24g");
        var sca24K = document.querySelector(".c-a24k");
        var sca24R = document.querySelector(".c-a24r");
        var sca24W = document.querySelector(".c-a24w");

        var ia24 = document.querySelector("#i-a24");
        var ia24a = document.querySelector("#i-a24a");
        var ia24b = document.querySelector("#i-a24b");
        var ia24g = document.querySelector("#i-a24g");
        var ia24k = document.querySelector("#i-a24k");
        var ia24r = document.querySelector("#i-a24r");
        var ia24w = document.querySelector("#i-a24w");


        ca24a.addEventListener('click', () => {

            ia24.style.display = 'none';
            ia24b.style.display = 'none';
            ia24g.style.display = 'none';
            ia24k.style.display = 'none';
            ia24r.style.display = 'none';
            ia24w.style.display = 'none';


            ia24a.style.display = 'block';



            ia24a.classList.add('card--img');

            ia24b.classList.remove('card--img');
            ia24g.classList.remove('card--img');
            ia24k.classList.remove('card--img');
            ia24r.classList.remove('card--img');
            ia24w.classList.remove('card--img');



            sca24A.classList.add('active');

            sca24B.classList.remove('active');
            sca24G.classList.remove('active');
            sca24K.classList.remove('active');
            sca24R.classList.remove('active');
            sca24W.classList.remove('active');

        })

        ca24b.addEventListener('click', () => {

            ia24.style.display = 'none';
            ia24a.style.display = 'none';
            ia24g.style.display = 'none';
            ia24k.style.display = 'none';
            ia24r.style.display = 'none';
            ia24w.style.display = 'none';


            ia24b.style.display = 'block';



            ia24b.classList.add('card--img');

            ia24a.classList.remove('card--img');
            ia24g.classList.remove('card--img');
            ia24k.classList.remove('card--img');
            ia24r.classList.remove('card--img');
            ia24w.classList.remove('card--img');



            sca24B.classList.add('active');

            sca24A.classList.remove('active');
            sca24G.classList.remove('active');
            sca24K.classList.remove('active');
            sca24R.classList.remove('active');
            sca24W.classList.remove('active');

        })

        ca24g.addEventListener('click', () => {

            ia24.style.display = 'none';
            ia24a.style.display = 'none';
            ia24b.style.display = 'none';
            ia24k.style.display = 'none';
            ia24r.style.display = 'none';
            ia24w.style.display = 'none';


            ia24g.style.display = 'block';



            ia24g.classList.add('card--img');

            ia24a.classList.remove('card--img');
            ia24b.classList.remove('card--img');
            ia24k.classList.remove('card--img');
            ia24r.classList.remove('card--img');
            ia24w.classList.remove('card--img');



            sca24G.classList.add('active');

            sca24A.classList.remove('active');
            sca24B.classList.remove('active');
            sca24K.classList.remove('active');
            sca24R.classList.remove('active');
            sca24W.classList.remove('active');

        })

        ca24k.addEventListener('click', () => {

            ia24.style.display = 'none';
            ia24a.style.display = 'none';
            ia24b.style.display = 'none';
            ia24g.style.display = 'none';
            ia24r.style.display = 'none';
            ia24w.style.display = 'none';


            ia24k.style.display = 'block';



            ia24k.classList.add('card--img');

            ia24a.classList.remove('card--img');
            ia24b.classList.remove('card--img');
            ia24g.classList.remove('card--img');
            ia24r.classList.remove('card--img');
            ia24w.classList.remove('card--img');



            sca24K.classList.add('active');

            sca24A.classList.remove('active');
            sca24B.classList.remove('active');
            sca24G.classList.remove('active');
            sca24R.classList.remove('active');
            sca24W.classList.remove('active');

        })

        ca24r.addEventListener('click', () => {

            ia24.style.display = 'none';
            ia24a.style.display = 'none';
            ia24b.style.display = 'none';
            ia24g.style.display = 'none';
            ia24k.style.display = 'none';
            ia24w.style.display = 'none';


            ia24r.style.display = 'block';



            ia24r.classList.add('card--img');

            ia24a.classList.remove('card--img');
            ia24b.classList.remove('card--img');
            ia24g.classList.remove('card--img');
            ia24k.classList.remove('card--img');
            ia24w.classList.remove('card--img');



            sca24R.classList.add('active');

            sca24A.classList.remove('active');
            sca24B.classList.remove('active');
            sca24G.classList.remove('active');
            sca24K.classList.remove('active');
            sca24W.classList.remove('active');

        })

        ca24w.addEventListener('click', () => {

            ia24.style.display = 'none';
            ia24a.style.display = 'none';
            ia24b.style.display = 'none';
            ia24g.style.display = 'none';
            ia24k.style.display = 'none';
            ia24r.style.display = 'none';


            ia24w.style.display = 'block';



            ia24w.classList.add('card--img');

            ia24a.classList.remove('card--img');
            ia24b.classList.remove('card--img');
            ia24g.classList.remove('card--img');
            ia24k.classList.remove('card--img');
            ia24r.classList.remove('card--img');



            sca24W.classList.add('active');

            sca24A.classList.remove('active');
            sca24B.classList.remove('active');
            sca24G.classList.remove('active');
            sca24K.classList.remove('active');
            sca24R.classList.remove('active');

        })

    }



    //     brick 2x6     //

    {

        var ca26a = document.querySelector("#c-a26a");
        var ca26b = document.querySelector("#c-a26b");
        var ca26g = document.querySelector("#c-a26g");
        var ca26k = document.querySelector("#c-a26k");
        var ca26r = document.querySelector("#c-a26r");
        var ca26w = document.querySelector("#c-a26w");

        var sca26A = document.querySelector(".c-a26a");
        var sca26B = document.querySelector(".c-a26b");
        var sca26G = document.querySelector(".c-a26g");
        var sca26K = document.querySelector(".c-a26k");
        var sca26R = document.querySelector(".c-a26r");
        var sca26W = document.querySelector(".c-a26w");

        var ia26 = document.querySelector("#i-a26");
        var ia26a = document.querySelector("#i-a26a");
        var ia26b = document.querySelector("#i-a26b");
        var ia26g = document.querySelector("#i-a26g");
        var ia26k = document.querySelector("#i-a26k");
        var ia26r = document.querySelector("#i-a26r");
        var ia26w = document.querySelector("#i-a26w");


        ca26a.addEventListener('click', () => {

            ia26.style.display = 'none';
            ia26b.style.display = 'none';
            ia26g.style.display = 'none';
            ia26k.style.display = 'none';
            ia26r.style.display = 'none';
            ia26w.style.display = 'none';


            ia26a.style.display = 'block';



            ia26a.classList.add('card--img');

            ia26b.classList.remove('card--img');
            ia26g.classList.remove('card--img');
            ia26k.classList.remove('card--img');
            ia26r.classList.remove('card--img');
            ia26w.classList.remove('card--img');



            sca26A.classList.add('active');

            sca26B.classList.remove('active');
            sca26G.classList.remove('active');
            sca26K.classList.remove('active');
            sca26R.classList.remove('active');
            sca26W.classList.remove('active');

        })

        ca26b.addEventListener('click', () => {

            ia26.style.display = 'none';
            ia26a.style.display = 'none';
            ia26g.style.display = 'none';
            ia26k.style.display = 'none';
            ia26r.style.display = 'none';
            ia26w.style.display = 'none';


            ia26b.style.display = 'block';



            ia26b.classList.add('card--img');

            ia26a.classList.remove('card--img');
            ia26g.classList.remove('card--img');
            ia26k.classList.remove('card--img');
            ia26r.classList.remove('card--img');
            ia26w.classList.remove('card--img');



            sca26B.classList.add('active');

            sca26A.classList.remove('active');
            sca26G.classList.remove('active');
            sca26K.classList.remove('active');
            sca26R.classList.remove('active');
            sca26W.classList.remove('active');

        })

        ca26g.addEventListener('click', () => {

            ia26.style.display = 'none';
            ia26a.style.display = 'none';
            ia26b.style.display = 'none';
            ia26k.style.display = 'none';
            ia26r.style.display = 'none';
            ia26w.style.display = 'none';


            ia26g.style.display = 'block';



            ia26g.classList.add('card--img');

            ia26a.classList.remove('card--img');
            ia26b.classList.remove('card--img');
            ia26k.classList.remove('card--img');
            ia26r.classList.remove('card--img');
            ia26w.classList.remove('card--img');



            sca26G.classList.add('active');

            sca26A.classList.remove('active');
            sca26B.classList.remove('active');
            sca26K.classList.remove('active');
            sca26R.classList.remove('active');
            sca26W.classList.remove('active');

        })

        ca26k.addEventListener('click', () => {

            ia26.style.display = 'none';
            ia26a.style.display = 'none';
            ia26b.style.display = 'none';
            ia26g.style.display = 'none';
            ia26r.style.display = 'none';
            ia26w.style.display = 'none';


            ia26k.style.display = 'block';



            ia26k.classList.add('card--img');
            
            ia26a.classList.remove('card--img');
            ia26b.classList.remove('card--img');
            ia26g.classList.remove('card--img');
            ia26r.classList.remove('card--img');
            ia26w.classList.remove('card--img');



            sca26K.classList.add('active');

            sca26A.classList.remove('active');
            sca26B.classList.remove('active');
            sca26G.classList.remove('active');
            sca26R.classList.remove('active');
            sca26W.classList.remove('active');

        })

        ca26r.addEventListener('click', () => {

            ia26.style.display = 'none';
            ia26a.style.display = 'none';
            ia26b.style.display = 'none';
            ia26g.style.display = 'none';
            ia26k.style.display = 'none';
            ia26w.style.display = 'none';


            ia26r.style.display = 'block';



            ia26r.classList.add('card--img');

            ia26a.classList.remove('card--img');
            ia26b.classList.remove('card--img');
            ia26g.classList.remove('card--img');
            ia26k.classList.remove('card--img');
            ia26w.classList.remove('card--img');



            sca26R.classList.add('active');

            sca26A.classList.remove('active');
            sca26B.classList.remove('active');
            sca26G.classList.remove('active');
            sca26K.classList.remove('active');
            sca26W.classList.remove('active');

        })

        ca26w.addEventListener('click', () => {

            ia26.style.display = 'none';
            ia26a.style.display = 'none';
            ia26b.style.display = 'none';
            ia26g.style.display = 'none';
            ia26k.style.display = 'none';
            ia26r.style.display = 'none';


            ia26w.style.display = 'block';



            ia26w.classList.add('card--img');

            ia26a.classList.remove('card--img');
            ia26b.classList.remove('card--img');
            ia26g.classList.remove('card--img');
            ia26k.classList.remove('card--img');
            ia26r.classList.remove('card--img');



            sca26W.classList.add('active');

            sca26A.classList.remove('active');
            sca26B.classList.remove('active');
            sca26G.classList.remove('active');
            sca26K.classList.remove('active');
            sca26R.classList.remove('active');

        })

    }










    //     plate 1x1     //

    {

        var cb11a = document.querySelector("#c-b11a");
        var cb11b = document.querySelector("#c-b11b");
        var cb11g = document.querySelector("#c-b11g");
        var cb11k = document.querySelector("#c-b11k");
        var cb11r = document.querySelector("#c-b11r");
        var cb11w = document.querySelector("#c-b11w");

        var scb11A = document.querySelector(".c-b11a");
        var scb11B = document.querySelector(".c-b11b");
        var scb11G = document.querySelector(".c-b11g");
        var scb11K = document.querySelector(".c-b11k");
        var scb11R = document.querySelector(".c-b11r");
        var scb11W = document.querySelector(".c-b11w");

        var ib11 = document.querySelector("#i-b11");
        var ib11a = document.querySelector("#i-b11a");
        var ib11b = document.querySelector("#i-b11b");
        var ib11g = document.querySelector("#i-b11g");
        var ib11k = document.querySelector("#i-b11k");
        var ib11r = document.querySelector("#i-b11r");
        var ib11w = document.querySelector("#i-b11w");


        cb11a.addEventListener('click', () => {

            ib11.style.display = 'none';
            ib11b.style.display = 'none';
            ib11g.style.display = 'none';
            ib11k.style.display = 'none';
            ib11r.style.display = 'none';
            ib11w.style.display = 'none';


            ib11a.style.display = 'block';



            ib11a.classList.add('card--img');

            ib11b.classList.remove('card--img');
            ib11g.classList.remove('card--img');
            ib11k.classList.remove('card--img');
            ib11r.classList.remove('card--img');
            ib11w.classList.remove('card--img');



            scb11A.classList.add('active');

            scb11B.classList.remove('active');
            scb11G.classList.remove('active');
            scb11K.classList.remove('active');
            scb11R.classList.remove('active');
            scb11W.classList.remove('active');

        })

        cb11b.addEventListener('click', () => {

            ib11.style.display = 'none';
            ib11a.style.display = 'none';
            ib11g.style.display = 'none';
            ib11k.style.display = 'none';
            ib11r.style.display = 'none';
            ib11w.style.display = 'none';


            ib11b.style.display = 'block';



            ib11b.classList.add('card--img');

            ib11a.classList.remove('card--img');
            ib11g.classList.remove('card--img');
            ib11k.classList.remove('card--img');
            ib11r.classList.remove('card--img');
            ib11w.classList.remove('card--img');



            scb11B.classList.add('active');

            scb11A.classList.remove('active');
            scb11G.classList.remove('active');
            scb11K.classList.remove('active');
            scb11R.classList.remove('active');
            scb11W.classList.remove('active');

        })

        cb11g.addEventListener('click', () => {

            ib11.style.display = 'none';
            ib11a.style.display = 'none';
            ib11b.style.display = 'none';
            ib11k.style.display = 'none';
            ib11r.style.display = 'none';
            ib11w.style.display = 'none';


            ib11g.style.display = 'block';



            ib11g.classList.add('card--img');

            ib11a.classList.remove('card--img');
            ib11b.classList.remove('card--img');
            ib11k.classList.remove('card--img');
            ib11r.classList.remove('card--img');
            ib11w.classList.remove('card--img');



            scb11G.classList.add('active');

            scb11A.classList.remove('active');
            scb11B.classList.remove('active');
            scb11K.classList.remove('active');
            scb11R.classList.remove('active');
            scb11W.classList.remove('active');

        })

        cb11k.addEventListener('click', () => {

            ib11.style.display = 'none';
            ib11a.style.display = 'none';
            ib11b.style.display = 'none';
            ib11g.style.display = 'none';
            ib11r.style.display = 'none';
            ib11w.style.display = 'none';


            ib11k.style.display = 'block';



            ib11k.classList.add('card--img');

            ib11a.classList.remove('card--img');
            ib11b.classList.remove('card--img');
            ib11g.classList.remove('card--img');
            ib11r.classList.remove('card--img');
            ib11w.classList.remove('card--img');



            scb11K.classList.add('active');

            scb11A.classList.remove('active');
            scb11B.classList.remove('active');
            scb11G.classList.remove('active');
            scb11R.classList.remove('active');
            scb11W.classList.remove('active');

        })

        cb11r.addEventListener('click', () => {

            ib11.style.display = 'none';
            ib11a.style.display = 'none';
            ib11b.style.display = 'none';
            ib11g.style.display = 'none';
            ib11k.style.display = 'none';
            ib11w.style.display = 'none';


            ib11r.style.display = 'block';



            ib11r.classList.add('card--img');

            ib11a.classList.remove('card--img');
            ib11b.classList.remove('card--img');
            ib11g.classList.remove('card--img');
            ib11k.classList.remove('card--img');
            ib11w.classList.remove('card--img');



            scb11R.classList.add('active');

            scb11A.classList.remove('active');
            scb11B.classList.remove('active');
            scb11G.classList.remove('active');
            scb11K.classList.remove('active');
            scb11W.classList.remove('active');

        })

        cb11w.addEventListener('click', () => {

            ib11.style.display = 'none';
            ib11a.style.display = 'none';
            ib11b.style.display = 'none';
            ib11g.style.display = 'none';
            ib11k.style.display = 'none';
            ib11r.style.display = 'none';


            ib11w.style.display = 'block';



            ib11w.classList.add('card--img');

            ib11a.classList.remove('card--img');
            ib11b.classList.remove('card--img');
            ib11g.classList.remove('card--img');
            ib11k.classList.remove('card--img');
            ib11r.classList.remove('card--img');



            scb11W.classList.add('active');

            scb11A.classList.remove('active');
            scb11B.classList.remove('active');
            scb11G.classList.remove('active');
            scb11K.classList.remove('active');
            scb11R.classList.remove('active');

        })

    }



    //     plate 1x2     //

    {

        var cb12a = document.querySelector("#c-b12a");
        var cb12b = document.querySelector("#c-b12b");
        var cb12g = document.querySelector("#c-b12g");
        var cb12k = document.querySelector("#c-b12k");
        var cb12r = document.querySelector("#c-b12r");
        var cb12w = document.querySelector("#c-b12w");

        var scb12A = document.querySelector(".c-b12a");
        var scb12B = document.querySelector(".c-b12b");
        var scb12G = document.querySelector(".c-b12g");
        var scb12K = document.querySelector(".c-b12k");
        var scb12R = document.querySelector(".c-b12r");
        var scb12W = document.querySelector(".c-b12w");

        var ib12 = document.querySelector("#i-b12");
        var ib12a = document.querySelector("#i-b12a");
        var ib12b = document.querySelector("#i-b12b");
        var ib12g = document.querySelector("#i-b12g");
        var ib12k = document.querySelector("#i-b12k");
        var ib12r = document.querySelector("#i-b12r");
        var ib12w = document.querySelector("#i-b12w");


        cb12a.addEventListener('click', () => {

            ib12.style.display = 'none';
            ib12b.style.display = 'none';
            ib12g.style.display = 'none';
            ib12k.style.display = 'none';
            ib12r.style.display = 'none';
            ib12w.style.display = 'none';


            ib12a.style.display = 'block';



            ib12a.classList.add('card--img');

            ib12b.classList.remove('card--img');
            ib12g.classList.remove('card--img');
            ib12k.classList.remove('card--img');
            ib12r.classList.remove('card--img');
            ib12w.classList.remove('card--img');



            scb12A.classList.add('active');

            scb12B.classList.remove('active');
            scb12G.classList.remove('active');
            scb12K.classList.remove('active');
            scb12R.classList.remove('active');
            scb12W.classList.remove('active');

        })

        cb12b.addEventListener('click', () => {

            ib12.style.display = 'none';
            ib12a.style.display = 'none';
            ib12g.style.display = 'none';
            ib12k.style.display = 'none';
            ib12r.style.display = 'none';
            ib12w.style.display = 'none';


            ib12b.style.display = 'block';



            ib12b.classList.add('card--img');

            ib12a.classList.remove('card--img');
            ib12g.classList.remove('card--img');
            ib12k.classList.remove('card--img');
            ib12r.classList.remove('card--img');
            ib12w.classList.remove('card--img');



            scb12B.classList.add('active');

            scb12A.classList.remove('active');
            scb12G.classList.remove('active');
            scb12K.classList.remove('active');
            scb12R.classList.remove('active');
            scb12W.classList.remove('active');

        })

        cb12g.addEventListener('click', () => {

            ib12.style.display = 'none';
            ib12a.style.display = 'none';
            ib12b.style.display = 'none';
            ib12k.style.display = 'none';
            ib12r.style.display = 'none';
            ib12w.style.display = 'none';


            ib12g.style.display = 'block';



            ib12g.classList.add('card--img');

            ib12a.classList.remove('card--img');
            ib12b.classList.remove('card--img');
            ib12k.classList.remove('card--img');
            ib12r.classList.remove('card--img');
            ib12w.classList.remove('card--img');



            scb12G.classList.add('active');

            scb12A.classList.remove('active');
            scb12B.classList.remove('active');
            scb12K.classList.remove('active');
            scb12R.classList.remove('active');
            scb12W.classList.remove('active');

        })

        cb12k.addEventListener('click', () => {

            ib12.style.display = 'none';
            ib12a.style.display = 'none';
            ib12b.style.display = 'none';
            ib12g.style.display = 'none';
            ib12r.style.display = 'none';
            ib12w.style.display = 'none';


            ib12k.style.display = 'block';



            ib12k.classList.add('card--img');

            ib12a.classList.remove('card--img');
            ib12b.classList.remove('card--img');
            ib12g.classList.remove('card--img');
            ib12r.classList.remove('card--img');
            ib12w.classList.remove('card--img');



            scb12K.classList.add('active');

            scb12A.classList.remove('active');
            scb12B.classList.remove('active');
            scb12G.classList.remove('active');
            scb12R.classList.remove('active');
            scb12W.classList.remove('active');

        })

        cb12r.addEventListener('click', () => {

            ib12.style.display = 'none';
            ib12a.style.display = 'none';
            ib12b.style.display = 'none';
            ib12g.style.display = 'none';
            ib12k.style.display = 'none';
            ib12w.style.display = 'none';


            ib12r.style.display = 'block';



            ib12r.classList.add('card--img');

            ib12a.classList.remove('card--img');
            ib12b.classList.remove('card--img');
            ib12g.classList.remove('card--img');
            ib12k.classList.remove('card--img');
            ib12w.classList.remove('card--img');



            scb12R.classList.add('active');

            scb12A.classList.remove('active');
            scb12B.classList.remove('active');
            scb12G.classList.remove('active');
            scb12K.classList.remove('active');
            scb12W.classList.remove('active');

        })

        cb12w.addEventListener('click', () => {

            ib12.style.display = 'none';
            ib12a.style.display = 'none';
            ib12b.style.display = 'none';
            ib12g.style.display = 'none';
            ib12k.style.display = 'none';
            ib12r.style.display = 'none';


            ib12w.style.display = 'block';



            ib12w.classList.add('card--img');

            ib12a.classList.remove('card--img');
            ib12b.classList.remove('card--img');
            ib12g.classList.remove('card--img');
            ib12k.classList.remove('card--img');
            ib12r.classList.remove('card--img');



            scb12W.classList.add('active');

            scb12A.classList.remove('active');
            scb12B.classList.remove('active');
            scb12G.classList.remove('active');
            scb12K.classList.remove('active');
            scb12R.classList.remove('active');

        })

    }



    //     plate 1x3     //

    {

        var cb13a = document.querySelector("#c-b13a");
        var cb13b = document.querySelector("#c-b13b");
        var cb13g = document.querySelector("#c-b13g");
        var cb13k = document.querySelector("#c-b13k");
        var cb13r = document.querySelector("#c-b13r");
        var cb13w = document.querySelector("#c-b13w");

        var scb13A = document.querySelector(".c-b13a");
        var scb13B = document.querySelector(".c-b13b");
        var scb13G = document.querySelector(".c-b13g");
        var scb13K = document.querySelector(".c-b13k");
        var scb13R = document.querySelector(".c-b13r");
        var scb13W = document.querySelector(".c-b13w");

        var ib13 = document.querySelector("#i-b13");
        var ib13a = document.querySelector("#i-b13a");
        var ib13b = document.querySelector("#i-b13b");
        var ib13g = document.querySelector("#i-b13g");
        var ib13k = document.querySelector("#i-b13k");
        var ib13r = document.querySelector("#i-b13r");
        var ib13w = document.querySelector("#i-b13w");


        cb13a.addEventListener('click', () => {

            ib13.style.display = 'none';
            ib13b.style.display = 'none';
            ib13g.style.display = 'none';
            ib13k.style.display = 'none';
            ib13r.style.display = 'none';
            ib13w.style.display = 'none';


            ib13a.style.display = 'block';



            ib13a.classList.add('card--img');

            ib13b.classList.remove('card--img');
            ib13g.classList.remove('card--img');
            ib13k.classList.remove('card--img');
            ib13r.classList.remove('card--img');
            ib13w.classList.remove('card--img');



            scb13A.classList.add('active');

            scb13B.classList.remove('active');
            scb13G.classList.remove('active');
            scb13K.classList.remove('active');
            scb13R.classList.remove('active');
            scb13W.classList.remove('active');

        })

        cb13b.addEventListener('click', () => {

            ib13.style.display = 'none';
            ib13a.style.display = 'none';
            ib13g.style.display = 'none';
            ib13k.style.display = 'none';
            ib13r.style.display = 'none';
            ib13w.style.display = 'none';


            ib13b.style.display = 'block';



            ib13b.classList.add('card--img');

            ib13a.classList.remove('card--img');
            ib13g.classList.remove('card--img');
            ib13k.classList.remove('card--img');
            ib13r.classList.remove('card--img');
            ib13w.classList.remove('card--img');



            scb13B.classList.add('active');

            scb13A.classList.remove('active');
            scb13G.classList.remove('active');
            scb13K.classList.remove('active');
            scb13R.classList.remove('active');
            scb13W.classList.remove('active');

        })

        cb13g.addEventListener('click', () => {

            ib13.style.display = 'none';
            ib13a.style.display = 'none';
            ib13b.style.display = 'none';
            ib13k.style.display = 'none';
            ib13r.style.display = 'none';
            ib13w.style.display = 'none';


            ib13g.style.display = 'block';



            ib13g.classList.add('card--img');
            
            ib13a.classList.remove('card--img');
            ib13b.classList.remove('card--img');
            ib13k.classList.remove('card--img');
            ib13r.classList.remove('card--img');
            ib13w.classList.remove('card--img');



            scb13G.classList.add('active');

            scb13A.classList.remove('active');
            scb13B.classList.remove('active');
            scb13K.classList.remove('active');
            scb13R.classList.remove('active');
            scb13W.classList.remove('active');

        })

        cb13k.addEventListener('click', () => {

            ib13.style.display = 'none';
            ib13a.style.display = 'none';
            ib13b.style.display = 'none';
            ib13g.style.display = 'none';
            ib13r.style.display = 'none';
            ib13w.style.display = 'none';


            ib13k.style.display = 'block';



            ib13k.classList.add('card--img');

            ib13a.classList.remove('card--img');
            ib13b.classList.remove('card--img');
            ib13g.classList.remove('card--img');
            ib13r.classList.remove('card--img');
            ib13w.classList.remove('card--img');



            scb13K.classList.add('active');

            scb13A.classList.remove('active');
            scb13B.classList.remove('active');
            scb13G.classList.remove('active');
            scb13R.classList.remove('active');
            scb13W.classList.remove('active');

        })

        cb13r.addEventListener('click', () => {

            ib13.style.display = 'none';
            ib13a.style.display = 'none';
            ib13b.style.display = 'none';
            ib13g.style.display = 'none';
            ib13k.style.display = 'none';
            ib13w.style.display = 'none';


            ib13r.style.display = 'block';



            ib13r.classList.add('card--img');

            ib13a.classList.remove('card--img');
            ib13b.classList.remove('card--img');
            ib13g.classList.remove('card--img');
            ib13k.classList.remove('card--img');
            ib13w.classList.remove('card--img');



            scb13R.classList.add('active');

            scb13A.classList.remove('active');
            scb13B.classList.remove('active');
            scb13G.classList.remove('active');
            scb13K.classList.remove('active');
            scb13W.classList.remove('active');

        })

        cb13w.addEventListener('click', () => {

            ib13.style.display = 'none';
            ib13a.style.display = 'none';
            ib13b.style.display = 'none';
            ib13g.style.display = 'none';
            ib13k.style.display = 'none';
            ib13r.style.display = 'none';


            ib13w.style.display = 'block';



            ib13w.classList.add('card--img');

            ib13a.classList.remove('card--img');
            ib13b.classList.remove('card--img');
            ib13g.classList.remove('card--img');
            ib13k.classList.remove('card--img');
            ib13r.classList.remove('card--img');



            scb13W.classList.add('active');

            scb13A.classList.remove('active');
            scb13B.classList.remove('active');
            scb13G.classList.remove('active');
            scb13K.classList.remove('active');
            scb13R.classList.remove('active');

        })

    }



    //     plate 1x4     //

    {

        var cb14a = document.querySelector("#c-b14a");
        var cb14b = document.querySelector("#c-b14b");
        var cb14g = document.querySelector("#c-b14g");
        var cb14k = document.querySelector("#c-b14k");
        var cb14r = document.querySelector("#c-b14r");
        var cb14w = document.querySelector("#c-b14w");

        var scb14A = document.querySelector(".c-b14a");
        var scb14B = document.querySelector(".c-b14b");
        var scb14G = document.querySelector(".c-b14g");
        var scb14K = document.querySelector(".c-b14k");
        var scb14R = document.querySelector(".c-b14r");
        var scb14W = document.querySelector(".c-b14w");

        var ib14 = document.querySelector("#i-b14");
        var ib14a = document.querySelector("#i-b14a");
        var ib14b = document.querySelector("#i-b14b");
        var ib14g = document.querySelector("#i-b14g");
        var ib14k = document.querySelector("#i-b14k");
        var ib14r = document.querySelector("#i-b14r");
        var ib14w = document.querySelector("#i-b14w");


        cb14a.addEventListener('click', () => {

            ib14.style.display = 'none';
            ib14b.style.display = 'none';
            ib14g.style.display = 'none';
            ib14k.style.display = 'none';
            ib14r.style.display = 'none';
            ib14w.style.display = 'none';


            ib14a.style.display = 'block';



            ib14a.classList.add('card--img');

            ib14b.classList.remove('card--img');
            ib14g.classList.remove('card--img');
            ib14k.classList.remove('card--img');
            ib14r.classList.remove('card--img');
            ib14w.classList.remove('card--img');



            scb14A.classList.add('active');

            scb14B.classList.remove('active');
            scb14G.classList.remove('active');
            scb14K.classList.remove('active');
            scb14R.classList.remove('active');
            scb14W.classList.remove('active');

        })

        cb14b.addEventListener('click', () => {

            ib14.style.display = 'none';
            ib14a.style.display = 'none';
            ib14g.style.display = 'none';
            ib14k.style.display = 'none';
            ib14r.style.display = 'none';
            ib14w.style.display = 'none';


            ib14b.style.display = 'block';



            ib14b.classList.add('card--img');

            ib14a.classList.remove('card--img');
            ib14g.classList.remove('card--img');
            ib14k.classList.remove('card--img');
            ib14r.classList.remove('card--img');
            ib14w.classList.remove('card--img');



            scb14B.classList.add('active');

            scb14A.classList.remove('active');
            scb14G.classList.remove('active');
            scb14K.classList.remove('active');
            scb14R.classList.remove('active');
            scb14W.classList.remove('active');

        })

        cb14g.addEventListener('click', () => {

            ib14.style.display = 'none';
            ib14a.style.display = 'none';
            ib14b.style.display = 'none';
            ib14k.style.display = 'none';
            ib14r.style.display = 'none';
            ib14w.style.display = 'none';


            ib14g.style.display = 'block';



            ib14g.classList.add('card--img');

            ib14a.classList.remove('card--img');
            ib14b.classList.remove('card--img');
            ib14k.classList.remove('card--img');
            ib14r.classList.remove('card--img');
            ib14w.classList.remove('card--img');



            scb14G.classList.add('active');

            scb14A.classList.remove('active');
            scb14B.classList.remove('active');
            scb14K.classList.remove('active');
            scb14R.classList.remove('active');
            scb14W.classList.remove('active');

        })

        cb14k.addEventListener('click', () => {

            ib14.style.display = 'none';
            ib14a.style.display = 'none';
            ib14b.style.display = 'none';
            ib14g.style.display = 'none';
            ib14r.style.display = 'none';
            ib14w.style.display = 'none';


            ib14k.style.display = 'block';



            ib14k.classList.add('card--img');

            ib14a.classList.remove('card--img');
            ib14b.classList.remove('card--img');
            ib14g.classList.remove('card--img');
            ib14r.classList.remove('card--img');
            ib14w.classList.remove('card--img');



            scb14K.classList.add('active');

            scb14A.classList.remove('active');
            scb14B.classList.remove('active');
            scb14G.classList.remove('active');
            scb14R.classList.remove('active');
            scb14W.classList.remove('active');

        })

        cb14r.addEventListener('click', () => {

            ib14.style.display = 'none';
            ib14a.style.display = 'none';
            ib14b.style.display = 'none';
            ib14g.style.display = 'none';
            ib14k.style.display = 'none';
            ib14w.style.display = 'none';


            ib14r.style.display = 'block';



            ib14r.classList.add('card--img');

            ib14a.classList.remove('card--img');
            ib14b.classList.remove('card--img');
            ib14g.classList.remove('card--img');
            ib14k.classList.remove('card--img');
            ib14w.classList.remove('card--img');



            scb14R.classList.add('active');

            scb14A.classList.remove('active');
            scb14B.classList.remove('active');
            scb14G.classList.remove('active');
            scb14K.classList.remove('active');
            scb14W.classList.remove('active');

        })

        cb14w.addEventListener('click', () => {

            ib14.style.display = 'none';
            ib14a.style.display = 'none';
            ib14b.style.display = 'none';
            ib14g.style.display = 'none';
            ib14k.style.display = 'none';
            ib14r.style.display = 'none';


            ib14w.style.display = 'block';



            ib14w.classList.add('card--img');

            ib14a.classList.remove('card--img');
            ib14b.classList.remove('card--img');
            ib14g.classList.remove('card--img');
            ib14k.classList.remove('card--img');
            ib14r.classList.remove('card--img');



            scb14W.classList.add('active');

            scb14A.classList.remove('active');
            scb14B.classList.remove('active');
            scb14G.classList.remove('active');
            scb14K.classList.remove('active');
            scb14R.classList.remove('active');

        })

    }



    //     plate 1x6     //

    {
        var cb16a = document.querySelector("#c-b16a");
        var cb16b = document.querySelector("#c-b16b");
        var cb16g = document.querySelector("#c-b16g");
        var cb16k = document.querySelector("#c-b16k");
        var cb16r = document.querySelector("#c-b16r");
        var cb16w = document.querySelector("#c-b16w");

        var scb16A = document.querySelector(".c-b16a");
        var scb16B = document.querySelector(".c-b16b");
        var scb16G = document.querySelector(".c-b16g");
        var scb16K = document.querySelector(".c-b16k");
        var scb16R = document.querySelector(".c-b16r");
        var scb16W = document.querySelector(".c-b16w");

        var ib16 = document.querySelector("#i-b16");
        var ib16a = document.querySelector("#i-b16a");
        var ib16b = document.querySelector("#i-b16b");
        var ib16g = document.querySelector("#i-b16g");
        var ib16k = document.querySelector("#i-b16k");
        var ib16r = document.querySelector("#i-b16r");
        var ib16w = document.querySelector("#i-b16w");


        cb16a.addEventListener('click', () => {

            ib16.style.display = 'none';
            ib16b.style.display = 'none';
            ib16g.style.display = 'none';
            ib16k.style.display = 'none';
            ib16r.style.display = 'none';
            ib16w.style.display = 'none';


            ib16a.style.display = 'block';



            ib16a.classList.add('card--img');

            ib16b.classList.remove('card--img');
            ib16g.classList.remove('card--img');
            ib16k.classList.remove('card--img');
            ib16r.classList.remove('card--img');
            ib16w.classList.remove('card--img');



            scb16A.classList.add('active');

            scb16B.classList.remove('active');
            scb16G.classList.remove('active');
            scb16K.classList.remove('active');
            scb16R.classList.remove('active');
            scb16W.classList.remove('active');

        })

        cb16b.addEventListener('click', () => {

            ib16.style.display = 'none';
            ib16a.style.display = 'none';
            ib16g.style.display = 'none';
            ib16k.style.display = 'none';
            ib16r.style.display = 'none';
            ib16w.style.display = 'none';


            ib16b.style.display = 'block';



            ib16b.classList.add('card--img');

            ib16a.classList.remove('card--img');
            ib16g.classList.remove('card--img');
            ib16k.classList.remove('card--img');
            ib16r.classList.remove('card--img');
            ib16w.classList.remove('card--img');



            scb16B.classList.add('active');

            scb16A.classList.remove('active');
            scb16G.classList.remove('active');
            scb16K.classList.remove('active');
            scb16R.classList.remove('active');
            scb16W.classList.remove('active');

        })

        cb16g.addEventListener('click', () => {

            ib16.style.display = 'none';
            ib16a.style.display = 'none';
            ib16b.style.display = 'none';
            ib16k.style.display = 'none';
            ib16r.style.display = 'none';
            ib16w.style.display = 'none';


            ib16g.style.display = 'block';



            ib16g.classList.add('card--img');

            ib16a.classList.remove('card--img');
            ib16b.classList.remove('card--img');
            ib16k.classList.remove('card--img');
            ib16r.classList.remove('card--img');
            ib16w.classList.remove('card--img');



            scb16G.classList.add('active');

            scb16A.classList.remove('active');
            scb16B.classList.remove('active');
            scb16K.classList.remove('active');
            scb16R.classList.remove('active');
            scb16W.classList.remove('active');

        })

        cb16k.addEventListener('click', () => {

            ib16.style.display = 'none';
            ib16a.style.display = 'none';
            ib16b.style.display = 'none';
            ib16g.style.display = 'none';
            ib16r.style.display = 'none';
            ib16w.style.display = 'none';


            ib16k.style.display = 'block';



            ib16k.classList.add('card--img');

            ib16a.classList.remove('card--img');
            ib16b.classList.remove('card--img');
            ib16g.classList.remove('card--img');
            ib16r.classList.remove('card--img');
            ib16w.classList.remove('card--img');



            scb16K.classList.add('active');

            scb16A.classList.remove('active');
            scb16B.classList.remove('active');
            scb16G.classList.remove('active');
            scb16R.classList.remove('active');
            scb16W.classList.remove('active');

        })

        cb16r.addEventListener('click', () => {

            ib16.style.display = 'none';
            ib16a.style.display = 'none';
            ib16b.style.display = 'none';
            ib16g.style.display = 'none';
            ib16k.style.display = 'none';
            ib16w.style.display = 'none';


            ib16r.style.display = 'block';



            ib16r.classList.add('card--img');

            ib16a.classList.remove('card--img');
            ib16b.classList.remove('card--img');
            ib16g.classList.remove('card--img');
            ib16k.classList.remove('card--img');
            ib16w.classList.remove('card--img');



            scb16R.classList.add('active');

            scb16A.classList.remove('active');
            scb16B.classList.remove('active');
            scb16G.classList.remove('active');
            scb16K.classList.remove('active');
            scb16W.classList.remove('active');

        })

        cb16w.addEventListener('click', () => {

            ib16.style.display = 'none';
            ib16a.style.display = 'none';
            ib16b.style.display = 'none';
            ib16g.style.display = 'none';
            ib16k.style.display = 'none';
            ib16r.style.display = 'none';


            ib16w.style.display = 'block';



            ib16w.classList.add('card--img');

            ib16a.classList.remove('card--img');
            ib16b.classList.remove('card--img');
            ib16g.classList.remove('card--img');
            ib16k.classList.remove('card--img');
            ib16r.classList.remove('card--img');



            scb16W.classList.add('active');

            scb16A.classList.remove('active');
            scb16B.classList.remove('active');
            scb16G.classList.remove('active');
            scb16K.classList.remove('active');
            scb16R.classList.remove('active');

        })

    }



    //     plate 2x2     //

    {
        var cb22a = document.querySelector("#c-b22a");
        var cb22b = document.querySelector("#c-b22b");
        var cb22g = document.querySelector("#c-b22g");
        var cb22k = document.querySelector("#c-b22k");
        var cb22r = document.querySelector("#c-b22r");
        var cb22w = document.querySelector("#c-b22w");

        var scb22A = document.querySelector(".c-b22a");
        var scb22B = document.querySelector(".c-b22b");
        var scb22G = document.querySelector(".c-b22g");
        var scb22K = document.querySelector(".c-b22k");
        var scb22R = document.querySelector(".c-b22r");
        var scb22W = document.querySelector(".c-b22w");

        var ib22 = document.querySelector("#i-b22");
        var ib22a = document.querySelector("#i-b22a");
        var ib22b = document.querySelector("#i-b22b");
        var ib22g = document.querySelector("#i-b22g");
        var ib22k = document.querySelector("#i-b22k");
        var ib22r = document.querySelector("#i-b22r");
        var ib22w = document.querySelector("#i-b22w");


        cb22a.addEventListener('click', () => {

            ib22.style.display = 'none';
            ib22b.style.display = 'none';
            ib22g.style.display = 'none';
            ib22k.style.display = 'none';
            ib22r.style.display = 'none';
            ib22w.style.display = 'none';


            ib22a.style.display = 'block';



            ib22a.classList.add('card--img');

            ib22b.classList.remove('card--img');
            ib22g.classList.remove('card--img');
            ib22k.classList.remove('card--img');
            ib22r.classList.remove('card--img');
            ib22w.classList.remove('card--img');



            scb22A.classList.add('active');

            scb22B.classList.remove('active');
            scb22G.classList.remove('active');
            scb22K.classList.remove('active');
            scb22R.classList.remove('active');
            scb22W.classList.remove('active');

        })

        cb22b.addEventListener('click', () => {

            ib22.style.display = 'none';
            ib22a.style.display = 'none';
            ib22g.style.display = 'none';
            ib22k.style.display = 'none';
            ib22r.style.display = 'none';
            ib22w.style.display = 'none';


            ib22b.style.display = 'block';



            ib22b.classList.add('card--img');

            ib22a.classList.remove('card--img');
            ib22g.classList.remove('card--img');
            ib22k.classList.remove('card--img');
            ib22r.classList.remove('card--img');
            ib22w.classList.remove('card--img');



            scb22B.classList.add('active');

            scb22A.classList.remove('active');
            scb22G.classList.remove('active');
            scb22K.classList.remove('active');
            scb22R.classList.remove('active');
            scb22W.classList.remove('active');

        })

        cb22g.addEventListener('click', () => {

            ib22.style.display = 'none';
            ib22a.style.display = 'none';
            ib22b.style.display = 'none';
            ib22k.style.display = 'none';
            ib22r.style.display = 'none';
            ib22w.style.display = 'none';


            ib22g.style.display = 'block';



            ib22g.classList.add('card--img');

            ib22a.classList.remove('card--img');
            ib22b.classList.remove('card--img');
            ib22k.classList.remove('card--img');
            ib22r.classList.remove('card--img');
            ib22w.classList.remove('card--img');



            scb22G.classList.add('active');

            scb22A.classList.remove('active');
            scb22B.classList.remove('active');
            scb22K.classList.remove('active');
            scb22R.classList.remove('active');
            scb22W.classList.remove('active');

        })

        cb22k.addEventListener('click', () => {

            ib22.style.display = 'none';
            ib22a.style.display = 'none';
            ib22b.style.display = 'none';
            ib22g.style.display = 'none';
            ib22r.style.display = 'none';
            ib22w.style.display = 'none';


            ib22k.style.display = 'block';



            ib22k.classList.add('card--img');

            ib22a.classList.remove('card--img');
            ib22b.classList.remove('card--img');
            ib22g.classList.remove('card--img');
            ib22r.classList.remove('card--img');
            ib22w.classList.remove('card--img');



            scb22K.classList.add('active');

            scb22A.classList.remove('active');
            scb22B.classList.remove('active');
            scb22G.classList.remove('active');
            scb22R.classList.remove('active');
            scb22W.classList.remove('active');

        })

        cb22r.addEventListener('click', () => {

            ib22.style.display = 'none';
            ib22a.style.display = 'none';
            ib22b.style.display = 'none';
            ib22g.style.display = 'none';
            ib22k.style.display = 'none';
            ib22w.style.display = 'none';


            ib22r.style.display = 'block';



            ib22r.classList.add('card--img');

            ib22a.classList.remove('card--img');
            ib22b.classList.remove('card--img');
            ib22g.classList.remove('card--img');
            ib22k.classList.remove('card--img');
            ib22w.classList.remove('card--img');



            scb22R.classList.add('active');

            scb22A.classList.remove('active');
            scb22B.classList.remove('active');
            scb22G.classList.remove('active');
            scb22K.classList.remove('active');
            scb22W.classList.remove('active');

        })

        cb22w.addEventListener('click', () => {

            ib22.style.display = 'none';
            ib22a.style.display = 'none';
            ib22b.style.display = 'none';
            ib22g.style.display = 'none';
            ib22k.style.display = 'none';
            ib22r.style.display = 'none';


            ib22w.style.display = 'block';



            ib22w.classList.add('card--img');

            ib22a.classList.remove('card--img');
            ib22b.classList.remove('card--img');
            ib22g.classList.remove('card--img');
            ib22k.classList.remove('card--img');
            ib22r.classList.remove('card--img');



            scb22W.classList.add('active');

            scb22A.classList.remove('active');
            scb22B.classList.remove('active');
            scb22G.classList.remove('active');
            scb22K.classList.remove('active');
            scb22R.classList.remove('active');

        })

    }



    //     plate 2x3     //

    {

        var cb23a = document.querySelector("#c-b23a");
        var cb23b = document.querySelector("#c-b23b");
        var cb23g = document.querySelector("#c-b23g");
        var cb23k = document.querySelector("#c-b23k");
        var cb23r = document.querySelector("#c-b23r");
        var cb23w = document.querySelector("#c-b23w");

        var scb23A = document.querySelector(".c-b23a");
        var scb23B = document.querySelector(".c-b23b");
        var scb23G = document.querySelector(".c-b23g");
        var scb23K = document.querySelector(".c-b23k");
        var scb23R = document.querySelector(".c-b23r");
        var scb23W = document.querySelector(".c-b23w");

        var ib23 = document.querySelector("#i-b23");
        var ib23a = document.querySelector("#i-b23a");
        var ib23b = document.querySelector("#i-b23b");
        var ib23g = document.querySelector("#i-b23g");
        var ib23k = document.querySelector("#i-b23k");
        var ib23r = document.querySelector("#i-b23r");
        var ib23w = document.querySelector("#i-b23w");


        cb23a.addEventListener('click', () => {

            ib23.style.display = 'none';
            ib23b.style.display = 'none';
            ib23g.style.display = 'none';
            ib23k.style.display = 'none';
            ib23r.style.display = 'none';
            ib23w.style.display = 'none';


            ib23a.style.display = 'block';



            ib23a.classList.add('card--img');

            ib23b.classList.remove('card--img');
            ib23g.classList.remove('card--img');
            ib23k.classList.remove('card--img');
            ib23r.classList.remove('card--img');
            ib23w.classList.remove('card--img');



            scb23A.classList.add('active');

            scb23B.classList.remove('active');
            scb23G.classList.remove('active');
            scb23K.classList.remove('active');
            scb23R.classList.remove('active');
            scb23W.classList.remove('active');

        })

        cb23b.addEventListener('click', () => {

            ib23.style.display = 'none';
            ib23a.style.display = 'none';
            ib23g.style.display = 'none';
            ib23k.style.display = 'none';
            ib23r.style.display = 'none';
            ib23w.style.display = 'none';


            ib23b.style.display = 'block';



            ib23b.classList.add('card--img');

            ib23a.classList.remove('card--img');
            ib23g.classList.remove('card--img');
            ib23k.classList.remove('card--img');
            ib23r.classList.remove('card--img');
            ib23w.classList.remove('card--img');



            scb23B.classList.add('active');

            scb23A.classList.remove('active');
            scb23G.classList.remove('active');
            scb23K.classList.remove('active');
            scb23R.classList.remove('active');
            scb23W.classList.remove('active');

        })

        cb23g.addEventListener('click', () => {

            ib23.style.display = 'none';
            ib23a.style.display = 'none';
            ib23b.style.display = 'none';
            ib23k.style.display = 'none';
            ib23r.style.display = 'none';
            ib23w.style.display = 'none';


            ib23g.style.display = 'block';



            ib23g.classList.add('card--img');

            ib23a.classList.remove('card--img');
            ib23b.classList.remove('card--img');
            ib23k.classList.remove('card--img');
            ib23r.classList.remove('card--img');
            ib23w.classList.remove('card--img');



            scb23G.classList.add('active');

            scb23A.classList.remove('active');
            scb23B.classList.remove('active');
            scb23K.classList.remove('active');
            scb23R.classList.remove('active');
            scb23W.classList.remove('active');

        })

        cb23k.addEventListener('click', () => {

            ib23.style.display = 'none';
            ib23a.style.display = 'none';
            ib23b.style.display = 'none';
            ib23g.style.display = 'none';
            ib23r.style.display = 'none';
            ib23w.style.display = 'none';


            ib23k.style.display = 'block';



            ib23k.classList.add('card--img');

            ib23a.classList.remove('card--img');
            ib23b.classList.remove('card--img');
            ib23g.classList.remove('card--img');
            ib23r.classList.remove('card--img');
            ib23w.classList.remove('card--img');



            scb23K.classList.add('active');

            scb23A.classList.remove('active');
            scb23B.classList.remove('active');
            scb23G.classList.remove('active');
            scb23R.classList.remove('active');
            scb23W.classList.remove('active');

        })

        cb23r.addEventListener('click', () => {

            ib23.style.display = 'none';
            ib23a.style.display = 'none';
            ib23b.style.display = 'none';
            ib23g.style.display = 'none';
            ib23k.style.display = 'none';
            ib23w.style.display = 'none';


            ib23r.style.display = 'block';



            ib23r.classList.add('card--img');

            ib23a.classList.remove('card--img');
            ib23b.classList.remove('card--img');
            ib23g.classList.remove('card--img');
            ib23k.classList.remove('card--img');
            ib23w.classList.remove('card--img');



            scb23R.classList.add('active');

            scb23A.classList.remove('active');
            scb23B.classList.remove('active');
            scb23G.classList.remove('active');
            scb23K.classList.remove('active');
            scb23W.classList.remove('active');

        })

        cb23w.addEventListener('click', () => {

            ib23.style.display = 'none';
            ib23a.style.display = 'none';
            ib23b.style.display = 'none';
            ib23g.style.display = 'none';
            ib23k.style.display = 'none';
            ib23r.style.display = 'none';


            ib23w.style.display = 'block';



            ib23w.classList.add('card--img');

            ib23a.classList.remove('card--img');
            ib23b.classList.remove('card--img');
            ib23g.classList.remove('card--img');
            ib23k.classList.remove('card--img');
            ib23r.classList.remove('card--img');



            scb23W.classList.add('active');

            scb23A.classList.remove('active');
            scb23B.classList.remove('active');
            scb23G.classList.remove('active');
            scb23K.classList.remove('active');
            scb23R.classList.remove('active');

        })

    }



    //     plate 2x4     //

    {

        var cb24a = document.querySelector("#c-b24a");
        var cb24b = document.querySelector("#c-b24b");
        var cb24g = document.querySelector("#c-b24g");
        var cb24k = document.querySelector("#c-b24k");
        var cb24r = document.querySelector("#c-b24r");
        var cb24w = document.querySelector("#c-b24w");

        var scb24A = document.querySelector(".c-b24a");
        var scb24B = document.querySelector(".c-b24b");
        var scb24G = document.querySelector(".c-b24g");
        var scb24K = document.querySelector(".c-b24k");
        var scb24R = document.querySelector(".c-b24r");
        var scb24W = document.querySelector(".c-b24w");

        var ib24 = document.querySelector("#i-b24");
        var ib24a = document.querySelector("#i-b24a");
        var ib24b = document.querySelector("#i-b24b");
        var ib24g = document.querySelector("#i-b24g");
        var ib24k = document.querySelector("#i-b24k");
        var ib24r = document.querySelector("#i-b24r");
        var ib24w = document.querySelector("#i-b24w");


        cb24a.addEventListener('click', () => {

            ib24.style.display = 'none';
            ib24b.style.display = 'none';
            ib24g.style.display = 'none';
            ib24k.style.display = 'none';
            ib24r.style.display = 'none';
            ib24w.style.display = 'none';


            ib24a.style.display = 'block';



            ib24a.classList.add('card--img');

            ib24b.classList.remove('card--img');
            ib24g.classList.remove('card--img');
            ib24k.classList.remove('card--img');
            ib24r.classList.remove('card--img');
            ib24w.classList.remove('card--img');



            scb24A.classList.add('active');

            scb24B.classList.remove('active');
            scb24G.classList.remove('active');
            scb24K.classList.remove('active');
            scb24R.classList.remove('active');
            scb24W.classList.remove('active');

        })

        cb24b.addEventListener('click', () => {

            ib24.style.display = 'none';
            ib24a.style.display = 'none';
            ib24g.style.display = 'none';
            ib24k.style.display = 'none';
            ib24r.style.display = 'none';
            ib24w.style.display = 'none';


            ib24b.style.display = 'block';



            ib24b.classList.add('card--img');

            ib24a.classList.remove('card--img');
            ib24g.classList.remove('card--img');
            ib24k.classList.remove('card--img');
            ib24r.classList.remove('card--img');
            ib24w.classList.remove('card--img');



            scb24B.classList.add('active');

            scb24A.classList.remove('active');
            scb24G.classList.remove('active');
            scb24K.classList.remove('active');
            scb24R.classList.remove('active');
            scb24W.classList.remove('active');

        })

        cb24g.addEventListener('click', () => {

            ib24.style.display = 'none';
            ib24a.style.display = 'none';
            ib24b.style.display = 'none';
            ib24k.style.display = 'none';
            ib24r.style.display = 'none';
            ib24w.style.display = 'none';


            ib24g.style.display = 'block';



            ib24g.classList.add('card--img');

            ib24a.classList.remove('card--img');
            ib24b.classList.remove('card--img');
            ib24k.classList.remove('card--img');
            ib24r.classList.remove('card--img');
            ib24w.classList.remove('card--img');



            scb24G.classList.add('active');

            scb24A.classList.remove('active');
            scb24B.classList.remove('active');
            scb24K.classList.remove('active');
            scb24R.classList.remove('active');
            scb24W.classList.remove('active');

        })

        cb24k.addEventListener('click', () => {

            ib24.style.display = 'none';
            ib24a.style.display = 'none';
            ib24b.style.display = 'none';
            ib24g.style.display = 'none';
            ib24r.style.display = 'none';
            ib24w.style.display = 'none';


            ib24k.style.display = 'block';



            ib24k.classList.add('card--img');

            ib24a.classList.remove('card--img');
            ib24b.classList.remove('card--img');
            ib24g.classList.remove('card--img');
            ib24r.classList.remove('card--img');
            ib24w.classList.remove('card--img');



            scb24K.classList.add('active');

            scb24A.classList.remove('active');
            scb24B.classList.remove('active');
            scb24G.classList.remove('active');
            scb24R.classList.remove('active');
            scb24W.classList.remove('active');

        })

        cb24r.addEventListener('click', () => {

            ib24.style.display = 'none';
            ib24a.style.display = 'none';
            ib24b.style.display = 'none';
            ib24g.style.display = 'none';
            ib24k.style.display = 'none';
            ib24w.style.display = 'none';


            ib24r.style.display = 'block';



            ib24r.classList.add('card--img');

            ib24a.classList.remove('card--img');
            ib24b.classList.remove('card--img');
            ib24g.classList.remove('card--img');
            ib24k.classList.remove('card--img');
            ib24w.classList.remove('card--img');



            scb24R.classList.add('active');

            scb24A.classList.remove('active');
            scb24B.classList.remove('active');
            scb24G.classList.remove('active');
            scb24K.classList.remove('active');
            scb24W.classList.remove('active');

        })

        cb24w.addEventListener('click', () => {

            ib24.style.display = 'none';
            ib24a.style.display = 'none';
            ib24b.style.display = 'none';
            ib24g.style.display = 'none';
            ib24k.style.display = 'none';
            ib24r.style.display = 'none';


            ib24w.style.display = 'block';



            ib24w.classList.add('card--img');

            ib24a.classList.remove('card--img');
            ib24b.classList.remove('card--img');
            ib24g.classList.remove('card--img');
            ib24k.classList.remove('card--img');
            ib24r.classList.remove('card--img');



            scb24W.classList.add('active');

            scb24A.classList.remove('active');
            scb24B.classList.remove('active');
            scb24G.classList.remove('active');
            scb24K.classList.remove('active');
            scb24R.classList.remove('active');

        })

    }



    //     plate 2x6     //

    {

        var cb26a = document.querySelector("#c-b26a");
        var cb26b = document.querySelector("#c-b26b");
        var cb26g = document.querySelector("#c-b26g");
        var cb26k = document.querySelector("#c-b26k");
        var cb26r = document.querySelector("#c-b26r");
        var cb26w = document.querySelector("#c-b26w");

        var scb26A = document.querySelector(".c-b26a");
        var scb26B = document.querySelector(".c-b26b");
        var scb26G = document.querySelector(".c-b26g");
        var scb26K = document.querySelector(".c-b26k");
        var scb26R = document.querySelector(".c-b26r");
        var scb26W = document.querySelector(".c-b26w");

        var ib26 = document.querySelector("#i-b26");
        var ib26a = document.querySelector("#i-b26a");
        var ib26b = document.querySelector("#i-b26b");
        var ib26g = document.querySelector("#i-b26g");
        var ib26k = document.querySelector("#i-b26k");
        var ib26r = document.querySelector("#i-b26r");
        var ib26w = document.querySelector("#i-b26w");


        cb26a.addEventListener('click', () => {

            ib26.style.display = 'none';
            ib26b.style.display = 'none';
            ib26g.style.display = 'none';
            ib26k.style.display = 'none';
            ib26r.style.display = 'none';
            ib26w.style.display = 'none';


            ib26a.style.display = 'block';



            ib26a.classList.add('card--img');

            ib26b.classList.remove('card--img');
            ib26g.classList.remove('card--img');
            ib26k.classList.remove('card--img');
            ib26r.classList.remove('card--img');
            ib26w.classList.remove('card--img');



            scb26A.classList.add('active');

            scb26B.classList.remove('active');
            scb26G.classList.remove('active');
            scb26K.classList.remove('active');
            scb26R.classList.remove('active');
            scb26W.classList.remove('active');

        })

        cb26b.addEventListener('click', () => {

            ib26.style.display = 'none';
            ib26a.style.display = 'none';
            ib26g.style.display = 'none';
            ib26k.style.display = 'none';
            ib26r.style.display = 'none';
            ib26w.style.display = 'none';


            ib26b.style.display = 'block';



            ib26b.classList.add('card--img');

            ib26a.classList.remove('card--img');
            ib26g.classList.remove('card--img');
            ib26k.classList.remove('card--img');
            ib26r.classList.remove('card--img');
            ib26w.classList.remove('card--img');



            scb26B.classList.add('active');

            scb26A.classList.remove('active');
            scb26G.classList.remove('active');
            scb26K.classList.remove('active');
            scb26R.classList.remove('active');
            scb26W.classList.remove('active');

        })

        cb26g.addEventListener('click', () => {

            ib26.style.display = 'none';
            ib26a.style.display = 'none';
            ib26b.style.display = 'none';
            ib26k.style.display = 'none';
            ib26r.style.display = 'none';
            ib26w.style.display = 'none';


            ib26g.style.display = 'block';



            ib26g.classList.add('card--img');
            
            ib26a.classList.remove('card--img');
            ib26b.classList.remove('card--img');
            ib26k.classList.remove('card--img');
            ib26r.classList.remove('card--img');
            ib26w.classList.remove('card--img');



            scb26G.classList.add('active');

            scb26A.classList.remove('active');
            scb26B.classList.remove('active');
            scb26K.classList.remove('active');
            scb26R.classList.remove('active');
            scb26W.classList.remove('active');

        })

        cb26k.addEventListener('click', () => {

            ib26.style.display = 'none';
            ib26a.style.display = 'none';
            ib26b.style.display = 'none';
            ib26g.style.display = 'none';
            ib26r.style.display = 'none';
            ib26w.style.display = 'none';


            ib26k.style.display = 'block';



            ib26k.classList.add('card--img');

            ib26a.classList.remove('card--img');
            ib26b.classList.remove('card--img');
            ib26g.classList.remove('card--img');
            ib26r.classList.remove('card--img');
            ib26w.classList.remove('card--img');



            scb26K.classList.add('active');

            scb26A.classList.remove('active');
            scb26B.classList.remove('active');
            scb26G.classList.remove('active');
            scb26R.classList.remove('active');
            scb26W.classList.remove('active');

        })

        cb26r.addEventListener('click', () => {

            ib26.style.display = 'none';
            ib26a.style.display = 'none';
            ib26b.style.display = 'none';
            ib26g.style.display = 'none';
            ib26k.style.display = 'none';
            ib26w.style.display = 'none';


            ib26r.style.display = 'block';



            ib26r.classList.add('card--img');

            ib26a.classList.remove('card--img');
            ib26b.classList.remove('card--img');
            ib26g.classList.remove('card--img');
            ib26k.classList.remove('card--img');
            ib26w.classList.remove('card--img');



            scb26R.classList.add('active');

            scb26A.classList.remove('active');
            scb26B.classList.remove('active');
            scb26G.classList.remove('active');
            scb26K.classList.remove('active');
            scb26W.classList.remove('active');

        })

        cb26w.addEventListener('click', () => {

            ib26.style.display = 'none';
            ib26a.style.display = 'none';
            ib26b.style.display = 'none';
            ib26g.style.display = 'none';
            ib26k.style.display = 'none';
            ib26r.style.display = 'none';


            ib26w.style.display = 'block';



            ib26w.classList.add('card--img');

            ib26a.classList.remove('card--img');
            ib26b.classList.remove('card--img');
            ib26g.classList.remove('card--img');
            ib26k.classList.remove('card--img');
            ib26r.classList.remove('card--img');



            scb26W.classList.add('active');

            scb26A.classList.remove('active');
            scb26B.classList.remove('active');
            scb26G.classList.remove('active');
            scb26K.classList.remove('active');
            scb26R.classList.remove('active');

        })

    }










    //     base plate 3x3     //

    {
        var cc33a = document.querySelector("#c-c33a");
        var cc33b = document.querySelector("#c-c33b");
        var cc33g = document.querySelector("#c-c33g");
        var cc33k = document.querySelector("#c-c33k");
        var cc33r = document.querySelector("#c-c33r");
        var cc33w = document.querySelector("#c-c33w");

        var scc33A = document.querySelector(".c-c33a");
        var scc33B = document.querySelector(".c-c33b");
        var scc33G = document.querySelector(".c-c33g");
        var scc33K = document.querySelector(".c-c33k");
        var scc33R = document.querySelector(".c-c33r");
        var scc33W = document.querySelector(".c-c33w");

        var ic33 = document.querySelector("#i-c33");
        var ic33a = document.querySelector("#i-c33a");
        var ic33b = document.querySelector("#i-c33b");
        var ic33g = document.querySelector("#i-c33g");
        var ic33k = document.querySelector("#i-c33k");
        var ic33r = document.querySelector("#i-c33r");
        var ic33w = document.querySelector("#i-c33w");


        cc33a.addEventListener('click', () => {

            ic33.style.display = 'none';
            ic33b.style.display = 'none';
            ic33g.style.display = 'none';
            ic33k.style.display = 'none';
            ic33r.style.display = 'none';
            ic33w.style.display = 'none';


            ic33a.style.display = 'block';



            ic33a.classList.add('card--img');

            ic33b.classList.remove('card--img');
            ic33g.classList.remove('card--img');
            ic33k.classList.remove('card--img');
            ic33r.classList.remove('card--img');
            ic33w.classList.remove('card--img');



            scc33A.classList.add('active');

            scc33B.classList.remove('active');
            scc33G.classList.remove('active');
            scc33K.classList.remove('active');
            scc33R.classList.remove('active');
            scc33W.classList.remove('active');

        })

        cc33b.addEventListener('click', () => {

            ic33.style.display = 'none';
            ic33a.style.display = 'none';
            ic33g.style.display = 'none';
            ic33k.style.display = 'none';
            ic33r.style.display = 'none';
            ic33w.style.display = 'none';


            ic33b.style.display = 'block';



            ic33b.classList.add('card--img');

            ic33a.classList.remove('card--img');
            ic33g.classList.remove('card--img');
            ic33k.classList.remove('card--img');
            ic33r.classList.remove('card--img');
            ic33w.classList.remove('card--img');



            scc33B.classList.add('active');

            scc33A.classList.remove('active');
            scc33G.classList.remove('active');
            scc33K.classList.remove('active');
            scc33R.classList.remove('active');
            scc33W.classList.remove('active');

        })

        cc33g.addEventListener('click', () => {

            ic33.style.display = 'none';
            ic33a.style.display = 'none';
            ic33b.style.display = 'none';
            ic33k.style.display = 'none';
            ic33r.style.display = 'none';
            ic33w.style.display = 'none';


            ic33g.style.display = 'block';



            ic33g.classList.add('card--img');

            ic33a.classList.remove('card--img');
            ic33b.classList.remove('card--img');
            ic33k.classList.remove('card--img');
            ic33r.classList.remove('card--img');
            ic33w.classList.remove('card--img');



            scc33G.classList.add('active');

            scc33A.classList.remove('active');
            scc33B.classList.remove('active');
            scc33K.classList.remove('active');
            scc33R.classList.remove('active');
            scc33W.classList.remove('active');

        })

        cc33k.addEventListener('click', () => {

            ic33.style.display = 'none';
            ic33a.style.display = 'none';
            ic33b.style.display = 'none';
            ic33g.style.display = 'none';
            ic33r.style.display = 'none';
            ic33w.style.display = 'none';


            ic33k.style.display = 'block';



            ic33k.classList.add('card--img');

            ic33a.classList.remove('card--img');
            ic33b.classList.remove('card--img');
            ic33g.classList.remove('card--img');
            ic33r.classList.remove('card--img');
            ic33w.classList.remove('card--img');



            scc33K.classList.add('active');

            scc33A.classList.remove('active');
            scc33B.classList.remove('active');
            scc33G.classList.remove('active');
            scc33R.classList.remove('active');
            scc33W.classList.remove('active');

        })

        cc33r.addEventListener('click', () => {

            ic33.style.display = 'none';
            ic33a.style.display = 'none';
            ic33b.style.display = 'none';
            ic33g.style.display = 'none';
            ic33k.style.display = 'none';
            ic33w.style.display = 'none';


            ic33r.style.display = 'block';



            ic33r.classList.add('card--img');

            ic33a.classList.remove('card--img');
            ic33b.classList.remove('card--img');
            ic33g.classList.remove('card--img');
            ic33k.classList.remove('card--img');
            ic33w.classList.remove('card--img');



            scc33R.classList.add('active');

            scc33A.classList.remove('active');
            scc33B.classList.remove('active');
            scc33G.classList.remove('active');
            scc33K.classList.remove('active');
            scc33W.classList.remove('active');

        })

        cc33w.addEventListener('click', () => {

            ic33.style.display = 'none';
            ic33a.style.display = 'none';
            ic33b.style.display = 'none';
            ic33g.style.display = 'none';
            ic33k.style.display = 'none';
            ic33r.style.display = 'none';


            ic33w.style.display = 'block';



            ic33w.classList.add('card--img');

            ic33a.classList.remove('card--img');
            ic33b.classList.remove('card--img');
            ic33g.classList.remove('card--img');
            ic33k.classList.remove('card--img');
            ic33r.classList.remove('card--img');



            scc33W.classList.add('active');

            scc33A.classList.remove('active');
            scc33B.classList.remove('active');
            scc33G.classList.remove('active');
            scc33K.classList.remove('active');
            scc33R.classList.remove('active');

        })

    }



    //     base plate 4x4     //

    {
        var cc44a = document.querySelector("#c-c44a");
        var cc44b = document.querySelector("#c-c44b");
        var cc44g = document.querySelector("#c-c44g");
        var cc44k = document.querySelector("#c-c44k");
        var cc44r = document.querySelector("#c-c44r");
        var cc44w = document.querySelector("#c-c44w");

        var scc44A = document.querySelector(".c-c44a");
        var scc44B = document.querySelector(".c-c44b");
        var scc44G = document.querySelector(".c-c44g");
        var scc44K = document.querySelector(".c-c44k");
        var scc44R = document.querySelector(".c-c44r");
        var scc44W = document.querySelector(".c-c44w");

        var ic44 = document.querySelector("#i-c44");
        var ic44a = document.querySelector("#i-c44a");
        var ic44b = document.querySelector("#i-c44b");
        var ic44g = document.querySelector("#i-c44g");
        var ic44k = document.querySelector("#i-c44k");
        var ic44r = document.querySelector("#i-c44r");
        var ic44w = document.querySelector("#i-c44w");


        cc44a.addEventListener('click', () => {

            ic44.style.display = 'none';
            ic44b.style.display = 'none';
            ic44g.style.display = 'none';
            ic44k.style.display = 'none';
            ic44r.style.display = 'none';
            ic44w.style.display = 'none';


            ic44a.style.display = 'block';



            ic44a.classList.add('card--img');

            ic44b.classList.remove('card--img');
            ic44g.classList.remove('card--img');
            ic44k.classList.remove('card--img');
            ic44r.classList.remove('card--img');
            ic44w.classList.remove('card--img');



            scc44A.classList.add('active');

            scc44B.classList.remove('active');
            scc44G.classList.remove('active');
            scc44K.classList.remove('active');
            scc44R.classList.remove('active');
            scc44W.classList.remove('active');

        })

        cc44b.addEventListener('click', () => {

            ic44.style.display = 'none';
            ic44a.style.display = 'none';
            ic44g.style.display = 'none';
            ic44k.style.display = 'none';
            ic44r.style.display = 'none';
            ic44w.style.display = 'none';


            ic44b.style.display = 'block';



            ic44b.classList.add('card--img');

            ic44a.classList.remove('card--img');
            ic44g.classList.remove('card--img');
            ic44k.classList.remove('card--img');
            ic44r.classList.remove('card--img');
            ic44w.classList.remove('card--img');



            scc44B.classList.add('active');

            scc44A.classList.remove('active');
            scc44G.classList.remove('active');
            scc44K.classList.remove('active');
            scc44R.classList.remove('active');
            scc44W.classList.remove('active');

        })

        cc44g.addEventListener('click', () => {

            ic44.style.display = 'none';
            ic44a.style.display = 'none';
            ic44b.style.display = 'none';
            ic44k.style.display = 'none';
            ic44r.style.display = 'none';
            ic44w.style.display = 'none';


            ic44g.style.display = 'block';



            ic44g.classList.add('card--img');

            ic44a.classList.remove('card--img');
            ic44b.classList.remove('card--img');
            ic44k.classList.remove('card--img');
            ic44r.classList.remove('card--img');
            ic44w.classList.remove('card--img');



            scc44G.classList.add('active');

            scc44A.classList.remove('active');
            scc44B.classList.remove('active');
            scc44K.classList.remove('active');
            scc44R.classList.remove('active');
            scc44W.classList.remove('active');

        })

        cc44k.addEventListener('click', () => {

            ic44.style.display = 'none';
            ic44a.style.display = 'none';
            ic44b.style.display = 'none';
            ic44g.style.display = 'none';
            ic44r.style.display = 'none';
            ic44w.style.display = 'none';


            ic44k.style.display = 'block';



            ic44k.classList.add('card--img');

            ic44a.classList.remove('card--img');
            ic44b.classList.remove('card--img');
            ic44g.classList.remove('card--img');
            ic44r.classList.remove('card--img');
            ic44w.classList.remove('card--img');



            scc44K.classList.add('active');

            scc44A.classList.remove('active');
            scc44B.classList.remove('active');
            scc44G.classList.remove('active');
            scc44R.classList.remove('active');
            scc44W.classList.remove('active');

        })

        cc44r.addEventListener('click', () => {

            ic44.style.display = 'none';
            ic44a.style.display = 'none';
            ic44b.style.display = 'none';
            ic44g.style.display = 'none';
            ic44k.style.display = 'none';
            ic44w.style.display = 'none';


            ic44r.style.display = 'block';



            ic44r.classList.add('card--img');

            ic44a.classList.remove('card--img');
            ic44b.classList.remove('card--img');
            ic44g.classList.remove('card--img');
            ic44k.classList.remove('card--img');
            ic44w.classList.remove('card--img');



            scc44R.classList.add('active');

            scc44A.classList.remove('active');
            scc44B.classList.remove('active');
            scc44G.classList.remove('active');
            scc44K.classList.remove('active');
            scc44W.classList.remove('active');

        })

        cc44w.addEventListener('click', () => {

            ic44.style.display = 'none';
            ic44a.style.display = 'none';
            ic44b.style.display = 'none';
            ic44g.style.display = 'none';
            ic44k.style.display = 'none';
            ic44r.style.display = 'none';


            ic44w.style.display = 'block';



            ic44w.classList.add('card--img');

            ic44a.classList.remove('card--img');
            ic44b.classList.remove('card--img');
            ic44g.classList.remove('card--img');
            ic44k.classList.remove('card--img');
            ic44r.classList.remove('card--img');



            scc44W.classList.add('active');

            scc44A.classList.remove('active');
            scc44B.classList.remove('active');
            scc44G.classList.remove('active');
            scc44K.classList.remove('active');
            scc44R.classList.remove('active');

        })

    }



    //     base plate 8x8     //

    {
        var cc88a = document.querySelector("#c-c88a");
        var cc88b = document.querySelector("#c-c88b");
        var cc88g = document.querySelector("#c-c88g");
        var cc88k = document.querySelector("#c-c88k");
        var cc88r = document.querySelector("#c-c88r");
        var cc88w = document.querySelector("#c-c88w");

        var scc88A = document.querySelector(".c-c88a");
        var scc88B = document.querySelector(".c-c88b");
        var scc88G = document.querySelector(".c-c88g");
        var scc88K = document.querySelector(".c-c88k");
        var scc88R = document.querySelector(".c-c88r");
        var scc88W = document.querySelector(".c-c88w");

        var ic88 = document.querySelector("#i-c88");
        var ic88a = document.querySelector("#i-c88a");
        var ic88b = document.querySelector("#i-c88b");
        var ic88g = document.querySelector("#i-c88g");
        var ic88k = document.querySelector("#i-c88k");
        var ic88r = document.querySelector("#i-c88r");
        var ic88w = document.querySelector("#i-c88w");


        cc88a.addEventListener('click', () => {

            ic88.style.display = 'none';
            ic88b.style.display = 'none';
            ic88g.style.display = 'none';
            ic88k.style.display = 'none';
            ic88r.style.display = 'none';
            ic88w.style.display = 'none';


            ic88a.style.display = 'block';



            ic88a.classList.add('card--img');

            ic88b.classList.remove('card--img');
            ic88g.classList.remove('card--img');
            ic88k.classList.remove('card--img');
            ic88r.classList.remove('card--img');
            ic88w.classList.remove('card--img');



            scc88A.classList.add('active');

            scc88B.classList.remove('active');
            scc88G.classList.remove('active');
            scc88K.classList.remove('active');
            scc88R.classList.remove('active');
            scc88W.classList.remove('active');

        })

        cc88b.addEventListener('click', () => {

            ic88.style.display = 'none';
            ic88a.style.display = 'none';
            ic88g.style.display = 'none';
            ic88k.style.display = 'none';
            ic88r.style.display = 'none';
            ic88w.style.display = 'none';


            ic88b.style.display = 'block';



            ic88b.classList.add('card--img');

            ic88a.classList.remove('card--img');
            ic88g.classList.remove('card--img');
            ic88k.classList.remove('card--img');
            ic88r.classList.remove('card--img');
            ic88w.classList.remove('card--img');



            scc88B.classList.add('active');

            scc88A.classList.remove('active');
            scc88G.classList.remove('active');
            scc88K.classList.remove('active');
            scc88R.classList.remove('active');
            scc88W.classList.remove('active');

        })

        cc88g.addEventListener('click', () => {

            ic88.style.display = 'none';
            ic88a.style.display = 'none';
            ic88b.style.display = 'none';
            ic88k.style.display = 'none';
            ic88r.style.display = 'none';
            ic88w.style.display = 'none';


            ic88g.style.display = 'block';



            ic88g.classList.add('card--img');

            ic88a.classList.remove('card--img');
            ic88b.classList.remove('card--img');
            ic88k.classList.remove('card--img');
            ic88r.classList.remove('card--img');
            ic88w.classList.remove('card--img');



            scc88G.classList.add('active');

            scc88A.classList.remove('active');
            scc88B.classList.remove('active');
            scc88K.classList.remove('active');
            scc88R.classList.remove('active');
            scc88W.classList.remove('active');

        })

        cc88k.addEventListener('click', () => {

            ic88.style.display = 'none';
            ic88a.style.display = 'none';
            ic88b.style.display = 'none';
            ic88g.style.display = 'none';
            ic88r.style.display = 'none';
            ic88w.style.display = 'none';


            ic88k.style.display = 'block';



            ic88k.classList.add('card--img');

            ic88a.classList.remove('card--img');
            ic88b.classList.remove('card--img');
            ic88g.classList.remove('card--img');
            ic88r.classList.remove('card--img');
            ic88w.classList.remove('card--img');



            scc88K.classList.add('active');

            scc88A.classList.remove('active');
            scc88B.classList.remove('active');
            scc88G.classList.remove('active');
            scc88R.classList.remove('active');
            scc88W.classList.remove('active');

        })

        cc88r.addEventListener('click', () => {

            ic88.style.display = 'none';
            ic88a.style.display = 'none';
            ic88b.style.display = 'none';
            ic88g.style.display = 'none';
            ic88k.style.display = 'none';
            ic88w.style.display = 'none';


            ic88r.style.display = 'block';



            ic88r.classList.add('card--img');

            ic88a.classList.remove('card--img');
            ic88b.classList.remove('card--img');
            ic88g.classList.remove('card--img');
            ic88k.classList.remove('card--img');
            ic88w.classList.remove('card--img');



            scc88R.classList.add('active');

            scc88A.classList.remove('active');
            scc88B.classList.remove('active');
            scc88G.classList.remove('active');
            scc88K.classList.remove('active');
            scc88W.classList.remove('active');

        })

        cc88w.addEventListener('click', () => {

            ic88.style.display = 'none';
            ic88a.style.display = 'none';
            ic88b.style.display = 'none';
            ic88g.style.display = 'none';
            ic88k.style.display = 'none';
            ic88r.style.display = 'none';


            ic88w.style.display = 'block';



            ic88w.classList.add('card--img');

            ic88a.classList.remove('card--img');
            ic88b.classList.remove('card--img');
            ic88g.classList.remove('card--img');
            ic88k.classList.remove('card--img');
            ic88r.classList.remove('card--img');



            scc88W.classList.add('active');

            scc88A.classList.remove('active');
            scc88B.classList.remove('active');
            scc88G.classList.remove('active');
            scc88K.classList.remove('active');
            scc88R.classList.remove('active');

        })

    }


    //     base plate 16x16     //

    {
        var cc1616a = document.querySelector("#c-c1616a");
        var cc1616b = document.querySelector("#c-c1616b");
        var cc1616g = document.querySelector("#c-c1616g");
        var cc1616k = document.querySelector("#c-c1616k");
        var cc1616r = document.querySelector("#c-c1616r");
        var cc1616w = document.querySelector("#c-c1616w");

        var scc1616A = document.querySelector(".c-c1616a");
        var scc1616B = document.querySelector(".c-c1616b");
        var scc1616G = document.querySelector(".c-c1616g");
        var scc1616K = document.querySelector(".c-c1616k");
        var scc1616R = document.querySelector(".c-c1616r");
        var scc1616W = document.querySelector(".c-c1616w");

        var ic1616 = document.querySelector("#i-c1616");
        var ic1616a = document.querySelector("#i-c1616a");
        var ic1616b = document.querySelector("#i-c1616b");
        var ic1616g = document.querySelector("#i-c1616g");
        var ic1616k = document.querySelector("#i-c1616k");
        var ic1616r = document.querySelector("#i-c1616r");
        var ic1616w = document.querySelector("#i-c1616w");


        cc1616a.addEventListener('click', () => {

            ic1616.style.display = 'none';
            ic1616b.style.display = 'none';
            ic1616g.style.display = 'none';
            ic1616k.style.display = 'none';
            ic1616r.style.display = 'none';
            ic1616w.style.display = 'none';


            ic1616a.style.display = 'block';



            ic1616a.classList.add('card--img');

            ic1616b.classList.remove('card--img');
            ic1616g.classList.remove('card--img');
            ic1616k.classList.remove('card--img');
            ic1616r.classList.remove('card--img');
            ic1616w.classList.remove('card--img');



            scc1616A.classList.add('active');

            scc1616B.classList.remove('active');
            scc1616G.classList.remove('active');
            scc1616K.classList.remove('active');
            scc1616R.classList.remove('active');
            scc1616W.classList.remove('active');

        })

        cc1616b.addEventListener('click', () => {

            ic1616.style.display = 'none';
            ic1616a.style.display = 'none';
            ic1616g.style.display = 'none';
            ic1616k.style.display = 'none';
            ic1616r.style.display = 'none';
            ic1616w.style.display = 'none';


            ic1616b.style.display = 'block';



            ic1616b.classList.add('card--img');

            ic1616a.classList.remove('card--img');
            ic1616g.classList.remove('card--img');
            ic1616k.classList.remove('card--img');
            ic1616r.classList.remove('card--img');
            ic1616w.classList.remove('card--img');



            scc1616B.classList.add('active');

            scc1616A.classList.remove('active');
            scc1616G.classList.remove('active');
            scc1616K.classList.remove('active');
            scc1616R.classList.remove('active');
            scc1616W.classList.remove('active');

        })

        cc1616g.addEventListener('click', () => {

            ic1616.style.display = 'none';
            ic1616a.style.display = 'none';
            ic1616b.style.display = 'none';
            ic1616k.style.display = 'none';
            ic1616r.style.display = 'none';
            ic1616w.style.display = 'none';


            ic1616g.style.display = 'block';



            ic1616g.classList.add('card--img');

            ic1616a.classList.remove('card--img');
            ic1616b.classList.remove('card--img');
            ic1616k.classList.remove('card--img');
            ic1616r.classList.remove('card--img');
            ic1616w.classList.remove('card--img');



            scc1616G.classList.add('active');

            scc1616A.classList.remove('active');
            scc1616B.classList.remove('active');
            scc1616K.classList.remove('active');
            scc1616R.classList.remove('active');
            scc1616W.classList.remove('active');

        })

        cc1616k.addEventListener('click', () => {

            ic1616.style.display = 'none';
            ic1616a.style.display = 'none';
            ic1616b.style.display = 'none';
            ic1616g.style.display = 'none';
            ic1616r.style.display = 'none';
            ic1616w.style.display = 'none';


            ic1616k.style.display = 'block';



            ic1616k.classList.add('card--img');

            ic1616a.classList.remove('card--img');
            ic1616b.classList.remove('card--img');
            ic1616g.classList.remove('card--img');
            ic1616r.classList.remove('card--img');
            ic1616w.classList.remove('card--img');



            scc1616K.classList.add('active');

            scc1616A.classList.remove('active');
            scc1616B.classList.remove('active');
            scc1616G.classList.remove('active');
            scc1616R.classList.remove('active');
            scc1616W.classList.remove('active');

        })

        cc1616r.addEventListener('click', () => {

            ic1616.style.display = 'none';
            ic1616a.style.display = 'none';
            ic1616b.style.display = 'none';
            ic1616g.style.display = 'none';
            ic1616k.style.display = 'none';
            ic1616w.style.display = 'none';


            ic1616r.style.display = 'block';



            ic1616r.classList.add('card--img');

            ic1616a.classList.remove('card--img');
            ic1616b.classList.remove('card--img');
            ic1616g.classList.remove('card--img');
            ic1616k.classList.remove('card--img');
            ic1616w.classList.remove('card--img');



            scc1616R.classList.add('active');

            scc1616A.classList.remove('active');
            scc1616B.classList.remove('active');
            scc1616G.classList.remove('active');
            scc1616K.classList.remove('active');
            scc1616W.classList.remove('active');

        })

        cc1616w.addEventListener('click', () => {

            ic1616.style.display = 'none';
            ic1616a.style.display = 'none';
            ic1616b.style.display = 'none';
            ic1616g.style.display = 'none';
            ic1616k.style.display = 'none';
            ic1616r.style.display = 'none';


            ic1616w.style.display = 'block';



            ic1616w.classList.add('card--img');

            ic1616a.classList.remove('card--img');
            ic1616b.classList.remove('card--img');
            ic1616g.classList.remove('card--img');
            ic1616k.classList.remove('card--img');
            ic1616r.classList.remove('card--img');



            scc1616W.classList.add('active');

            scc1616A.classList.remove('active');
            scc1616B.classList.remove('active');
            scc1616G.classList.remove('active');
            scc1616K.classList.remove('active');
            scc1616R.classList.remove('active');

        })

    }


}





//          cart functions          //

{

    if (document.readyState == 'loading') {

        document.addEventListener('DOMContentLoaded', ready)

    } else {

        ready()

    }


    function ready() {

        var removeButtons = document.getElementsByClassName('cart__item--remove')

        for (var i = 0; i < removeButtons.length; i++) {

            var removeButton = removeButtons[i]

            removeButton.addEventListener('click', removeCartItem)

        }




        var cartQuantityInputs = document.getElementsByClassName('item--quantity')

        for (var i = 0; i < cartQuantityInputs.length; i++) {

            var cartInput = cartQuantityInputs[i]

            cartInput.addEventListener('change', cartQuantityChanged)

        }



        var cardQuantityInputs = document.getElementsByClassName('card--quantity')

        for (var i = 0; i < cardQuantityInputs.length; i++) {

            var cardInput = cardQuantityInputs[i]

            cardInput.addEventListener('change', cardQuantityChanged)

        }




        var addToCartButtons = document.getElementsByClassName('shop__card--add')

        for (var i = 0; i < addToCartButtons.length; i++) {

            var addToCartButton = addToCartButtons[i]

            addToCartButton.addEventListener('click', addItemToCart, checkRepeat)

        }


        var purchaseButton = document.getElementsByClassName('cart__purchase')[0]

        purchaseButton.addEventListener('click', purchaseConcluded)

        updateCartCounter()


    }



    function addItemToCart(event) {

        var addToCartButtonClicked = event.target

        var shopCard = addToCartButtonClicked.parentElement.parentElement

        var itemImage = shopCard.getElementsByClassName('card--img')[0].src

        var itemTitle = shopCard.getElementsByClassName('shop__card--title')[0].innerText

        var itemPrice = shopCard.getElementsByClassName('shop__card--price')[0].innerText

        var itemQuantity = shopCard.getElementsByClassName('card--quantity')[0].value





        var cartItem = document.createElement('div')

        cartItem.classList.add('cart__item')

        var cartItems = document.getElementsByClassName('cart__items')[0]





        var cartItemContent = `
            <div class="cart__item--part">
                <img src="${itemImage}" alt="" class="cart__item--img" width="80">
                <span class="cart__item--title">${itemTitle}</span>
            </div>

            <span class="cart__item--price">${itemPrice}</span>

            <div class="cart__item--quantity">
                <input type="number" class="item--quantity" value="${itemQuantity}">
                <div  class="cart__item--remove">
                    <svg data-src="https://s2.svgbox.net/hero-solid.svg?ic=trash" width="32" height="32" color="#ffffff"></svg>
                </div>
            </div>
        `



        cartItem.innerHTML = cartItemContent

        cartItems.append(cartItem)



        checkRepeat()
        
        ready()

        updateCartCounter()

        updateCartTotal()



    }



    function checkRepeat() {

        var cartItemContainer = document.getElementsByClassName('cart__items')[0]

        var cartItems = cartItemContainer.getElementsByClassName('cart__item')

        var cartImageSrcList = []

        for (var i = 0; i < cartItems.length; i++) {

            var cartItem = cartItems[i]

            var cartImage = cartItem.getElementsByClassName('cart__item--img')[0]

            var cartImageSrc = cartImage.src

            cartImageSrcList.push(cartImageSrc)    

        }

        for (let i = 0; i < cartImageSrcList.length; i++) {

            if (cartImageSrcList.indexOf(cartImageSrcList[i]) !== cartImageSrcList.lastIndexOf(cartImageSrcList[i])) {
              
                j = cartImageSrcList.lastIndexOf(cartImageSrcList[i])

                cartItems[j].remove()

                alert('this item is already in the cart. you can update quantity directly in the cart or try different colors for this part')

            }
        
        }

    }



    function cardQuantityChanged(event) {

        var input = event.target

        if (isNaN(input.value) || input.value <= 0) {

            input.value = 1

        }

    }



    function removeCartItem(event) {

        var removeButtonClicked = event.target

        removeButtonClicked.parentElement.parentElement.remove()

        updateCartTotal()

        updateCartCounter()

    }


    function cartQuantityChanged(event) {

        var input = event.target

        if (isNaN(input.value) || input.value <= 0) {

            input.value = 1

        }

        updateCartTotal()

        updateCartCounter()

    }


    function updateCartTotal() {

        var cartItemContainer = document.getElementsByClassName('cart__items')[0]

        var cartItems = cartItemContainer.getElementsByClassName('cart__item')

        var total = 0

        for (var i = 0; i < cartItems.length; i++) {

            var cartItem = cartItems[i]

            var priceElement = cartItem.getElementsByClassName('cart__item--price')[0]

            var quantityElement = cartItem.getElementsByClassName('item--quantity')[0]

            var price = parseFloat(priceElement.innerText.replace('$', ''))

            var quantity = quantityElement.value

            total = total + (price * quantity)

        }

        document.getElementsByClassName('cart__total--price')[0].innerText = '$' + total.toFixed(2)

    }


    function updateCartCounter() {

        var cartItemContainer = document.getElementsByClassName('cart__items')[0]

        var cartItems = cartItemContainer.getElementsByClassName('cart__item')

        var cartCounter = cartItems.length

        if (cartCounter == 0) {

            document.getElementsByClassName('fullcart')[0].classList.remove('active')

            document.getElementsByClassName('cart__row')[0].style.display = 'none'

            document.getElementsByClassName('cart__total')[0].style.display = 'none'

            document.getElementsByClassName('cart__purchase')[0].style.display = 'none'

            document.getElementsByClassName('cart__empty')[0].classList.add('active')


        }

        else if (cartCounter > 0) {

            document.getElementsByClassName('fullcart')[0].classList.add('active')
            
            document.getElementsByClassName('total-itens')[0].innerText = cartCounter

            document.getElementsByClassName('cart__row')[0].style.display = 'flex'

            document.getElementsByClassName('cart__total')[0].style.display = 'flex'

            document.getElementsByClassName('cart__purchase')[0].style.display = 'flex'

            document.getElementsByClassName('cart__empty')[0].classList.remove('active')

        }

    }


    function purchaseConcluded() {

        alert('thanks for your purchase!')


        var cartItems = document.getElementsByClassName('cart__items')[0]

        while (cartItems.hasChildNodes()) {

            cartItems.removeChild(cartItems.firstChild)

            updateCartCounter()

        }

    }




}