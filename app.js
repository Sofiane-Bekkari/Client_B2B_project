//*** Berger Menu ***//
const berger = document.querySelector('.berger');
const shadow = document.querySelector('.shadow');
const navBar = document.querySelector('.nav-bar');

// Event for berger menu
berger.addEventListener('click', function(){
    navBar.classList.toggle('show-nav');
})


///**** lamp light ****/// 
let lamp = document.querySelector('.light-lamp');
const showcaseWidth = document.querySelector('.showcase');


// Event on Scroll
window.addEventListener('scroll', function(){
    let scroll = window.pageYOffset
    let width = showcaseWidth.offsetWidth
  
    calcul = scroll - 300
    let topBackZero = -400
  
    if (scroll > 50 & width < 900){
        lamp.style.top = `${calcul}px`;

    } else if (scroll < 100 & width < 900) {
        lamp.style.top = `${topBackZero}px`; 

    }
    // if it greater then 300
    if (scroll > 300 & width < 900 ) {
        lamp.style.top = `-10px`; 
    }

    // Check if it on more then 900PX
    if  (scroll > 100 & width > 900) {
        lamp.style.top = `${calcul}px`;
        console.log('yes is greater on 900PX')
        
    }
    // IF it more 350 scroll it back
    if (scroll > 320 & width < 1200 ) {
        lamp.style.top = `${topBackZero}px`; 
        console.log('Do this!')
    }
    if (scroll > 300 & width > 1200){
        lamp.style.top = `${topBackZero}px`
        //lamp.style.tranform = `opacity 0.9`
        console.log("IS ON 1200PX!!")
    }
    if (scroll < 100 & width > 1200){
        lamp.style.top = `${topBackZero}px`
        console.log("IS ON BACK 1200PX!!")
    }

});