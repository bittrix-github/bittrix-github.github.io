


let toggle = document.querySelector('.toggle');

let menu = document.querySelector('.menu');

let isOpen = false;


toggle.onclick = function() {
    menu.classList.toggle('active');
}







var homeIcon = document.querySelector('#home-icon');
var profileIcon = document.querySelector('#profile-icon');
var projectsIcon = document.querySelector('#projects-icon');
var contactIcon = document.querySelector('#contact-icon');
var bugsIcon = document.querySelector('#bugs-icon');
var gamingIcon = document.querySelector('#gaming-icon');
var bikesIcon = document.querySelector('#bikes-icon');
var portfolioInfoIcon = document.querySelector('#portfolio-info-icon');

var wrapper = document.querySelector('#wrapper');




homeIcon.addEventListener('click', () => {

    if (isOpen) {

        menu.classList.toggle('active');

        menu.classList.remove('sided');

        wrapper.style.opacity = '0';

        setTimeout(function(){

            cleanWrapper();

        }, 1500);

        isOpen = false;

    }

    else {

        menu.classList.toggle('active');

        menu.classList.remove('sided');
    
        cleanWrapper();

    }

})

profileIcon.addEventListener('click', () => {

    if (isOpen) {

        menu.classList.toggle('active');

        menu.classList.add('sided');

        wrapper.style.opacity = '0';

        setTimeout(function(){

            cleanWrapper();

            loadHtml("wrapper", "profile/profile.html");
        
            wrapper.style.opacity = '1';

        }, 1500);

    }

    else {

        menu.classList.toggle('active');

        menu.classList.add('sided');
    
        setTimeout(function(){

            cleanWrapper();

            loadHtml("wrapper", "profile/profile.html");
        
            wrapper.style.opacity = '1';

        }, 500);

        isOpen = true

    }



})

projectsIcon.addEventListener('click', () => {

    if (isOpen) {

        menu.classList.toggle('active');

        menu.classList.add('sided');

        wrapper.style.opacity = '0';

        setTimeout(function(){

            cleanWrapper();

            loadHtml("wrapper", "projects/projects.html");
        
            wrapper.style.opacity = '1';

        }, 1500);

    }

    else {

        menu.classList.toggle('active');

        menu.classList.add('sided');
    
        setTimeout(function(){

            cleanWrapper();

            loadHtml("wrapper", "projects/projects.html");
        
            wrapper.style.opacity = '1';

        }, 500);

        isOpen = true

    }



})

contactIcon.addEventListener('click', () => {

    if (isOpen) {

        menu.classList.toggle('active');

        menu.classList.add('sided');

        wrapper.style.opacity = '0';

        setTimeout(function(){

            cleanWrapper();

            loadHtml("wrapper", "contact/contact.html");
        
            wrapper.style.opacity = '1';

        }, 1500);

    }

    else {

        menu.classList.toggle('active');

        menu.classList.add('sided');
    
        setTimeout(function(){

            cleanWrapper();

            loadHtml("wrapper", "contact/contact.html");
        
            wrapper.style.opacity = '1';

        }, 500);

        isOpen = true

    }

})

bugsIcon.addEventListener('click', () => {

    if (isOpen) {

        menu.classList.toggle('active');

        menu.classList.add('sided');

        wrapper.style.opacity = '0';

        setTimeout(function(){

            cleanWrapper();

            loadHtml("wrapper", "bugs/bugs.html");
        
            wrapper.style.opacity = '1';

        }, 1500);

    }

    else {

        menu.classList.toggle('active');

        menu.classList.add('sided');
    
        setTimeout(function(){

            cleanWrapper();

            loadHtml("wrapper", "bugs/bugs.html");
        
            wrapper.style.opacity = '1';

        }, 500);

        isOpen = true

    }

})

gamingIcon.addEventListener('click', () => {

    if (isOpen) {

        menu.classList.toggle('active');

        menu.classList.add('sided');

        wrapper.style.opacity = '0';

        setTimeout(function(){

            cleanWrapper();

            loadHtml("wrapper", "gaming/gaming.html");
        
            wrapper.style.opacity = '1';

        }, 1500);

    }

    else {

        menu.classList.toggle('active');

        menu.classList.add('sided');
    
        setTimeout(function(){

            cleanWrapper();

            loadHtml("wrapper", "gaming/gaming.html");
        
            wrapper.style.opacity = '1';

        }, 500);

        isOpen = true

    }

})

bikesIcon.addEventListener('click', () => {

    if (isOpen) {

        menu.classList.toggle('active');

        menu.classList.add('sided');

        wrapper.style.opacity = '0';

        setTimeout(function(){

            cleanWrapper();

            loadHtml("wrapper", "bikes/bikes.html");
        
            wrapper.style.opacity = '1';

        }, 1500);

    }

    else {

        menu.classList.toggle('active');

        menu.classList.add('sided');
    
        setTimeout(function(){

            cleanWrapper();

            loadHtml("wrapper", "bikes/bikes.html");
        
            wrapper.style.opacity = '1';

        }, 500);

        isOpen = true

    }

})

portfolioInfoIcon.addEventListener('click', () => {

    if (isOpen) {

        menu.classList.toggle('active');

        menu.classList.add('sided');

        wrapper.style.opacity = '0';

        setTimeout(function(){

            cleanWrapper();

            loadHtml("wrapper", "portfolio-info/portfolio-info.html");
        
            wrapper.style.opacity = '1';

        }, 1500);

    }

    else {

        menu.classList.toggle('active');

        menu.classList.add('sided');
    
        setTimeout(function(){

            cleanWrapper();

            loadHtml("wrapper", "portfolio-info/portfolio-info.html");
        
            wrapper.style.opacity = '1';

        }, 500);

        isOpen = true

    }

})






// 





//           ==========     language switch     ==========





//





var switchButton = document.querySelector('#switch-button');

switchButton.addEventListener('click', () => {

    switchButton.classList.toggle('translate');

})





// 





//           ==========     functions     ==========





//





function loadHtml(id, filename) {

    let xhttp;

    let element = document.getElementById(id);

    let file = filename;




    if (file) {

        xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {

            if (this.readyState == 4) {

                if (this.status == 200) {element.innerHTML = this.responseText;}

                if (this.status == 404) {element.innerHTML = "<p>page not found</p>"}

            }

        }

        xhttp.open("GET", `assets/modules/${file}`, true);

        xhttp.send();

        return;

    }

}





function cleanWrapper () {

    wrapper = document.getElementById('wrapper');

    while (wrapper.hasChildNodes()) {

        wrapper.removeChild(wrapper.firstChild)

    }

}