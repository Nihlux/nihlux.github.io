let intro = document.querySelector('.intro-container');
let introContainer = document.querySelector('.logo-container');
let introLogo = document.querySelector('.intro-logo');

document.addEventListener('DOMContentLoaded', function() {

    setTimeout(function() {
    
        setTimeout(function() {
            introLogo.classList.add('fade-in');
        }, 400);

        setTimeout(function() {
            
            setTimeout(function() {
                introLogo.classList.remove('fade-in');
                introLogo.classList.add('fade-out');
            }, 50)

        }, 2000);

        setTimeout(function() {
            intro.style.top = '-100vh';
        }, 2300)

    });

});