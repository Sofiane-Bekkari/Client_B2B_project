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
const lampDark = document.querySelector('.lamp-dark');
const lightTime = document.querySelector('.spot-light');

console.log(lightTime)


// Event on Scroll
window.addEventListener('scroll', function(){
    let scroll = window.pageYOffset
    let width = showcaseWidth.offsetWidth
  
    let calcul = scroll - 300
    if (width < 900 ){
        console.log('NOTHGIN TO DO!!')
        return

    }
    // Scrolling the grey lamp
    if (scroll > 50 & width > 900){
        lamp.style.top = `${calcul - 200}px`;
        console.log('First!', calcul,'Scroll=', scroll)
    } else {
        lamp.style.top = `${calcul - 150}px`;
        console.log('First!', calcul,'Scroll=', scroll)
    }
    // Change to the dark lamp 
        

    // Cheching not true  <900>
    if (width > 900){
        checkScreen();
    }

    // Cheching if time to lighting            
    if (width > 900){
        timeLighting();

    }

    // Cheching light on 1200px 
    if (width > 1200){
        timeLightingTwo();
    }

    // Cheching light on 1400px 
    if (width > 1400){
        timeLightingThree();
    }


  

    //}
    //// if it greater then 300
    //if (scroll > 300 & width < 900 ) {
    //    lamp.style.top = `-10px`; 
    //}
//
    //// Check if it on more then 900PX
    //if  (scroll > 100 & width > 900) {
    //    lamp.style.top = `${calcul}px`;
    //    console.log('yes is greater on 900PX')
    //    
    //}
    //// IF it more 350 scroll it back
    //if (scroll > 320 & width < 1200 ) {
    //    lamp.style.top = `${topBackZero}px`; 
    //    console.log('Do this!')
    //}
    //if (scroll > 300 & width > 1200){
    //    lamp.style.top = `${topBackZero}px`
    //    //lamp.style.tranform = `opacity 0.9`
    //    console.log("IS ON 1200PX!!")
    //}
    //if (scroll < 100 & width > 1200){
    //    lamp.style.top = `${topBackZero}px`
    //    console.log("IS ON BACK 1200PX!!")
    //}
//
});


function checkScreen(){
    let scroll = window.pageYOffset
    let width = showcaseWidth.offsetWidth
  
    let calcul = scroll - 300
    if (scroll > 700 & width > 890 ) {
        lamp.style.display = `none`; 
        lampDark.style.top = `${calcul - 200}px`; 
        console.log('Disper Grey!')
    } else {
        lamp.style.display = `block`; 
        lampDark.style.top = `-30px`
        console.log('Grey Is Back!');
}}

function timeLighting(){
      // ON the light in right time
      let scroll = window.pageYOffset
      let width = showcaseWidth.offsetWidth
      let calcul = scroll - 300

      if (scroll >= 1950 & width > 890) {
        lampDark.style.top = `1100px`
        lightTime.style.transform = `block`;
        lightTime.style.display = `block`;
        console.log('LIGHT IS ON!');
    } else {
        lightTime.style.display = `none`;
        lampDark.style.top = `${calcul -650}px`;
        console.log('BACK ON LIGHT!');
    }
}

/// 1200PX
function timeLightingTwo(){

    let scroll = window.pageYOffset
    let width = showcaseWidth.offsetWidth
    let calcul = scroll - 300

    if (scroll >= 1800 & width > 1199) {
        lampDark.style.top = `1000px`
        lightTime.style.transform = `block`;
        lightTime.style.display = `block`;
        console.log('LIGHT IS ON 1200px!');
    } else {
        lightTime.style.display = `none`;
        lampDark.style.top = `${calcul -650}px`;
        console.log('BACK ON LIGHT 1200px!');
    }
}
/// 1400px 
function timeLightingThree(){

        let scroll = window.pageYOffset
        let width = showcaseWidth.offsetWidth
        let calcul = scroll - 300
    
        if (scroll >= 1850 & width > 1399) {
            lampDark.style.top = `1000px`
            lightTime.style.transform = `block`;
            lightTime.style.display = `block`;
            console.log('LIGHT IS ON 1400px!');
        } else {
            lightTime.style.display = `none`;
            lampDark.style.top = `${calcul -650}px`;
            console.log('BACK ON LIGHT 1400px!');
        }
} 