const berger = document.querySelector('.berger');
const shadow = document.querySelector('.shadow');
const navBar = document.querySelector('.nav-bar');


// Event for berger menu
berger.addEventListener('click', function(){
    console.log('Clickable!')
    navBar.classList.toggle('show-nav')
    shadow.classList.toggle('shadow')

})

// Section Observer
const titleFade = document.querySelector('slider-title'); 