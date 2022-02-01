



const burguer = document.getElementsByClassName('cabecalho__burguer')[0];

const x = document.getElementsByClassName('cabecalho__X')[0];

const nav = document.getElementsByClassName('cabecalho__nav')[0];



burguer.addEventListener('click', () => {

    nav.classList.add('active');

});

x.addEventListener('click', () => {

    nav.classList.remove('active');

});

















const a11 = document.querySelector("#galeria-a1");
const a12 = document.querySelector("#galeria-a2");
const a13 = document.querySelector("#galeria-a3");
const a14 = document.querySelector("#galeria-a4");
const a21 = document.querySelector("#galeria-a5");
const a22 = document.querySelector("#galeria-a6");
const a23 = document.querySelector("#galeria-a7");
const a24 = document.querySelector("#galeria-a8");

const b11 = document.querySelector("#galeria-b1");
const b12 = document.querySelector("#galeria-b2");
const b13 = document.querySelector("#galeria-b3");
const b14 = document.querySelector("#galeria-b4");
const b21 = document.querySelector("#galeria-b5");
const b22 = document.querySelector("#galeria-b6");
const b23 = document.querySelector("#galeria-b7");
const b24 = document.querySelector("#galeria-b8");

const c11 = document.querySelector("#galeria-c1");
const c12 = document.querySelector("#galeria-c2");
const c13 = document.querySelector("#galeria-c3");
const c14 = document.querySelector("#galeria-c4");
const c21 = document.querySelector("#galeria-c5");
const c22 = document.querySelector("#galeria-c6");
const c23 = document.querySelector("#galeria-c7");
const c24 = document.querySelector("#galeria-c8");



const a1 = document.querySelector('#img-a1');
const a2 = document.querySelector('#img-a2');
const a3 = document.querySelector('#img-a3');
const a4 = document.querySelector('#img-a4');
const a5 = document.querySelector('#img-a5');
const a6 = document.querySelector('#img-a6');
const a7 = document.querySelector('#img-a7');
const a8 = document.querySelector('#img-a8');

const b1 = document.querySelector('#img-b1');
const b2 = document.querySelector('#img-b2');
const b3 = document.querySelector('#img-b3');
const b4 = document.querySelector('#img-b4');
const b5 = document.querySelector('#img-b5');
const b6 = document.querySelector('#img-b6');
const b7 = document.querySelector('#img-b7');
const b8 = document.querySelector('#img-b8');

const c1 = document.querySelector('#img-c1');
const c2 = document.querySelector('#img-c2');
const c3 = document.querySelector('#img-c3');
const c4 = document.querySelector('#img-c4');
const c5 = document.querySelector('#img-c5');
const c6 = document.querySelector('#img-c6');
const c7 = document.querySelector('#img-c7');
const c8 = document.querySelector('#img-c8');
















var desktop = window.matchMedia("(min-width: 501px)");

if (desktop.matches) {

    sliderDesk(desktop);

}

desktop.addListener(sliderDesk);






function sliderDesk(desktop) {


        const imgX = document.querySelector('#img-x');
        const prv = document.querySelector("#prev");
        const nxt = document.querySelector("#next");
        const imgContainer = document.querySelector(".img__container");

        const galA = [a11, a12, a13, a14, a21, a22, a23, a24];
        const galB = [b11, b12, b13, b14, b21, b22, b23, b24];
        const galC = [c11, c12, c13, c14, c21, c22, c23, c24];

        const listA = [a1, a2, a3, a4, a5, a6, a7, a8];
        const listB = [b1, b2, b3, b4, b5, b6, b7, b8];
        const listC = [c1, c2, c3, c4, c5, c6, c7, c8];

        let A = false;
        let B = false;
        let C = false;

        let i;
        let j;
        let k;





        galA.forEach( function(e) {

            e.addEventListener('click', () => {

                A = true;

                i = galA.indexOf(e);

                console.log(i);

                imgContainer.classList.add('active');
                
                listA[i].style.display = 'block';

            })

        })



        galB.forEach(function(f) {

            f.addEventListener('click', () => {

                B = true;

                j = galB.indexOf(f);

                imgContainer.classList.add('active');
                
                listB[j].style.display = 'block';

            })

        })



        galC.forEach(function(g) {

            g.addEventListener('click', () => {

                C = true;

                k = galC.indexOf(g);

                imgContainer.classList.add('active');
                
                listC[k].style.display = 'block';

            })

        })











        imgX.addEventListener('click', () => {


            if (A) {

                listA[i].style.display = 'none';

                imgContainer.classList.remove('active');

                A = false;

            }


            else if (B) {

                listB[j].style.display = 'none';

                imgContainer.classList.remove('active');

                B = false;
            
            }


            else if (C) {

                listC[k].style.display = 'none';

                imgContainer.classList.remove('active');
        
                C = false;

            }

        })









        nxt.addEventListener('click', () => {


            if (A) {
            
                if (i == 7) {

                    listA[i].style.display = 'none';

                    i = 0;

                    listA[i].style.display = 'block';

                }

                else {

                    listA[i].style.display = 'none';

                    i++;
                    
                    listA[i].style.display = 'block';

                }

            }
        


            else if (B) {

                if (j === 7) {
                    
                    listB[j].style.display = 'none';

                    j = 0;

                    listB[j].style.display = 'block';

                }

                else {

                    listB[j].style.display = 'none';

                    j++;
                    
                    listB[j].style.display = 'block';

                }

            }



            else if (C) {

                if (k === 7) {
                    
                    listC[k].style.display = 'none';

                    k = 0;

                    listC[k].style.display = 'block';

                }

                else {

                    listC[k].style.display = 'none';

                    k++;
                    
                    listC[k].style.display = 'block';

                }
            
            }


        })








        prv.addEventListener('click', () => {


            if (A) {

                if (i === 0) {

                    listA[i].style.display = 'none';

                    i = 7;

                    listA[i].style.display = 'block';

                }

                else {

                    listA[i].style.display = 'none';

                    i--;
                    
                    listA[i].style.display = 'block';

                }

            }



            else if (B) {

                if (j === 0) {
                    
                    listB[j].style.display = 'none';

                    j = 7;

                    listB[j].style.display = 'block';

                }

                else {

                    listB[j].style.display = 'none';

                    j--;
                    
                    listB[j].style.display = 'block';

                }

            }



            else if (C) {

                if (k === 0) {
                    
                    listC[k].style.display = 'none';

                    k = 7;

                    listC[k].style.display = 'block';

                }

                else {

                    listC[k].style.display = 'none';

                    k--;
                    
                    listC[k].style.display = 'block';

                }

            }


        })





}

























var responsive = window.matchMedia("(max-width: 500px)");

if (responsive.matches) {

    sliderResp(responsive);

}

responsive.addListener(sliderResp);





function sliderResp(responsive) {


        const imgXr = document.querySelector('#img-xr');
        const prvr = document.querySelector("#prevr");
        const nxtr = document.querySelector("#nextr");
        const imgContainer = document.querySelector(".img__container");


        const a25 = document.querySelector("#galeria-a9");
        const b25 = document.querySelector("#galeria-b9");
        const c25 = document.querySelector("#galeria-c9");

        const a9 = document.querySelector('#img-a9');
        const b9 = document.querySelector('#img-b9');
        const c9 = document.querySelector('#img-c9');


        const galAr = [a11, a12, a13, a14, a21, a22, a23, a24, a25];
        const galBr = [b11, b12, b13, b14, b21, b22, b23, b24, b25];
        const galCr = [c11, c12, c13, c14, c21, c22, c23, c24, c25];

        const listAr = [a1, a2, a3, a4, a5, a6, a7, a8, a9];
        const listBr = [b1, b2, b3, b4, b5, b6, b7, b8, b9];
        const listCr = [c1, c2, c3, c4, c5, c6, c7, c8, c9];

        let Ar = false;
        let Br = false;
        let Cr = false;

        let l;
        let m;
        let n;








        galAr.forEach( function(er) {

            er.addEventListener('click', () => {
        
                Ar = true;
        
                l = galAr.indexOf(er);
        
                imgContainer.classList.add('active');
                
                listAr[l].style.display = 'block';
        
            })
        
        })
        
        
        
        galBr.forEach(function(fr) {
        
            fr.addEventListener('click', () => {
        
                Br = true;
        
                m = galBr.indexOf(fr);
        
                imgContainer.classList.add('active');
                
                listBr[m].style.display = 'block';
        
            })
        
        })
        
        
        
        galCr.forEach(function(gr) {
        
            gr.addEventListener('click', () => {
        
                Cr = true;
        
                n = galCr.indexOf(gr);
        
                imgContainer.classList.add('active');
                
                listCr[n].style.display = 'block';
        
            })
        
        })









        imgXr.addEventListener('click', () => {


            if (Ar) {
        
                listAr[l].style.display = 'none';
        
                imgContainer.classList.remove('active');
        
                Ar = false;
        
            }
        
        
            else if (Br) {
        
                listBr[m].style.display = 'none';
        
                imgContainer.classList.remove('active');
        
                Br = false;
            
            }
        
        
            else if (Cr) {
        
                listCr[n].style.display = 'none';
        
                imgContainer.classList.remove('active');
          
                Cr = false;
        
            }
        
        })






      
        nxtr.addEventListener('click', () => {


            if (Ar) {
            
                if (l === 8) {
        
                    listAr[l].style.display = 'none';
        
                    l = 0;
        
                    listAr[l].style.display = 'block';
        
                }
        
                else {
        
                    listAr[l].style.display = 'none';
        
                    l++;
                    
                    listAr[l].style.display = 'block';
        
                }
        
            }
          
        
        
            else if (Br) {
        
                if (m === 8) {
                    
                    listBr[m].style.display = 'none';
        
                    m = 0;
        
                    listBr[m].style.display = 'block';
        
                }
        
                else {
        
                    listBr[m].style.display = 'none';
        
                    m++;
                    
                    listBr[m].style.display = 'block';
        
                }
        
            }
        
        
        
            else if (Cr) {
        
                if (n === 8) {
                    
                    listCr[n].style.display = 'none';
        
                    n = 0;
        
                    listCr[n].style.display = 'block';
        
                }
        
                else {
        
                    listCr[n].style.display = 'none';
        
                    n++;
                    
                    listCr[n].style.display = 'block';
        
                }
            
            }
        
        
        })
        
        
        
        
        
        
        
        
        prvr.addEventListener('click', () => {
        
        
            if (Ar) {
        
                if (l === 0) {
        
                    listAr[l].style.display = 'none';
        
                    l = 8;
        
                    listAr[l].style.display = 'block';
        
                }
        
                else {
        
                    listAr[l].style.display = 'none';
        
                    l--;
                    
                    listAr[l].style.display = 'block';
        
                }
        
            }
        
        
        
            else if (Br) {
        
                if (m === 0) {
                    
                    listBr[m].style.display = 'none';
        
                    m = 8;
        
                    listBr[m].style.display = 'block';
        
                }
        
                else {
        
                    listBr[m].style.display = 'none';
        
                    m--;
                    
                    listBr[m].style.display = 'block';
        
                }
        
            }
        
        
        
            else if (Cr) {
        
                if (n === 0) {
                    
                    listCr[n].style.display = 'none';
        
                    n = 8;
        
                    listCr[n].style.display = 'block';
        
                }
        
                else {
        
                    listCr[n].style.display = 'none';
        
                    n--;
                    
                    listCr[n].style.display = 'block';
        
                }
        
            }
        
        
        })






    
    
}