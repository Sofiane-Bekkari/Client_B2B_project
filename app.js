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

console.log(lamp)

window.addEventListener('scroll', function(){
    let scroll = window.pageYOffset
    console.log("Here scroll",scroll);
    calcul = scroll - 300
    let topBackZero = -400
    console.log("Here calcul ",calcul);
    if (scroll > 50){
        console.log('Is Big');
        lamp.style.top = `${calcul}px`;
    } else if (scroll < 110) {
        lamp.style.top = `${topBackZero}px`; 
        console.log('Is Less', topBackZero);
    }

    // Check if it gearter to fix it
    if  (scroll > 350) {
        lamp.style.top = `10px`;
        lamp.style.opacity = 0.5;
        console.log('yes is greater')
        
    } else {

        lamp.style.opacity = 0.9;
        lamp.style.transform = `translateX(0)`;
    }

    // Check to translate it left
    //if (scroll > 380){
    //    lamp.style.top = `200px`;
    //    lamp.style.transform = `translateX(-2000%)`;
    //}

});