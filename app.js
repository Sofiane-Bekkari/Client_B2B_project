//*** Berger Menu ***//
const berger = document.querySelector('.berger');
//const shadow = document.querySelector('.shadow');
const navBar = document.querySelector('.nav-bar');

// Event for berger menu
berger.addEventListener('click', function(){
    navBar.classList.toggle('show-nav');
})


///**** lamp light ****/// 

let lamp = document.querySelector('.light-lamp');
const showcaseWidth = document.querySelector('.showcase');
const lampDark = document.querySelector('.lamp-dark-1');
console.log(lampDark, 'HERE§§')
const lightTime = document.querySelector('.spot-light');
const shadowLight = document.querySelector('img.lamp-shadow');

//**** Main Text Hide ****//
const mainText = document.getElementById('hide-right');


// Event on Scroll
window.addEventListener('scroll', function(){
    let scroll = window.pageYOffset
    let width = showcaseWidth.offsetWidth
  
    let calcul = scroll - 300
    // hide text
    if (scroll > 100){
        mainText.style.transform = "translate(-1500px)"
    }
    else if (scroll < 100){
        mainText.style.transform = "translate(0px)"
    }
  
    // Scrolling the grey lamp
    if (scroll > 50 & width > 890){
        lamp.style.top = `${calcul - 100}px`;
    } else {
        //lamp.style.top = `-100px`;
        //console.log('First1!', calcul,'Scroll2=', scroll)
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
    // 2500px
    if (width > 2500){
        lamp.style.top = `${calcul -300}px`;
        checkScreen2();
        timeLightingSuperLarge();
    }
    // 2880PX
    if (width > 2800){
        lamp.style.top = `${calcul -300}px`;
        checkScreen3();
        timeLightingSuperLargeX();
    }

    console.log(width)

});


//***Functions for Light***///
function checkScreen(){
    let scroll = window.pageYOffset
    let width = showcaseWidth.offsetWidth
  
    let calcul = scroll - 500
    if (scroll > 650 & width > 890 ) {
        lamp.style.display = `none`; 
        lampDark.style.top =  `90px`; 
        console.log('Disper Grey!')
    } else {
        lamp.style.display = `block`; 
        console.log('Grey Is Back!');
}}
//**checking on 2500px **//
function checkScreen2(){
    let scroll = window.pageYOffset
    let width = showcaseWidth.offsetWidth
  
    let calcul = scroll - 500
    if (scroll > 850 & width > 2400 ) {
        lamp.style.display = `none`; 
        lampDark.style.top =  `700px`; 
        console.log('Disper Grey22!')
    } else {
        lamp.style.display = `block`; 
        console.log('Grey Is Back22!');
}}
//**checking on 2880/1880px **//
function checkScreen3(){
    let scroll = window.pageYOffset
    let width = showcaseWidth.offsetWidth
  
    let calcul = scroll - 500
    if (scroll > 1150 & width > 2800 ) {
        lamp.style.display = `none`; 
        lampDark.style.top =  `700px`; 
        console.log('Disper Grey33!')
    } else {
        lamp.style.display = `block`; 
        console.log('Grey Is Back33!');
}}

function timeLighting(){
    // ON the light in right time
    let scroll = window.pageYOffset
    let width = showcaseWidth.offsetWidth
    let calcul = scroll - 300

    if (scroll >= 900 ) { 
      lampDark.style.top = `20px`;
      lightTime.style.transform = `block`;
      lightTime.style.display = `block`;
      shadowLight.style.display = `block`;
      console.log('LIGHT IS ON!');
    } else {
        lightTime.style.display = `none`;
        shadowLight.style.display = `none`;
        lampDark.style.top = `${calcul -650}px`;
        console.log('BACK ON LIGHT!');
    }
}

/// 1200PX
function timeLightingTwo(){

    let scroll = window.pageYOffset
    let width = showcaseWidth.offsetWidth
    let calcul = scroll - 300

    if (scroll >= 900 & width > 1199) {
        lampDark.style.top = `40px`
        lightTime.style.display = `block`;
        lampDark.style.display = `block`;
        console.log('LIGHT IS ON 1200px!');
        console.log('scroll is:', scroll)
    } else {
        lightTime.style.display = `none`;
        lampDark.style.top = `${calcul -650}px`;
        shadowLight.style.display = `none`;
        console.log('BACK ON LIGHT 1200px!');
    }
}

/// 1400px
function timeLightingThree(){

        let scroll = window.pageYOffset
        let width = showcaseWidth.offsetWidth
        let calcul = scroll - 300
    
        if (scroll >= 900 & width > 1300) {
            lampDark.style.top = `20px`
            lightTime.style.transform = `block`;
            lightTime.style.display = `block`;
            console.log('LIGHT IS ON 1400px!');
        } else {
            lightTime.style.display = `none`;
            lampDark.style.top = `${calcul -650}px`;
            shadowLight.style.display = `none`;
            console.log('BACK ON LIGHT 1400px!');
        }
}
// 2500PX
function timeLightingSuperLarge(){

    let scroll = window.pageYOffset
    let width = showcaseWidth.offsetWidth
    let calcul = scroll - 300

    if (scroll >= 1230 & width > 2500) { 
        lampDark.style.top = `80px`
        lightTime.style.transform = `block`;
        lightTime.style.display = `block`;
        shadowLight.style.display = `block`
        console.log('LIGHT IS ON 2500px!');
    } else {
        lightTime.style.display = `none`;
        lampDark.style.top = `${calcul -950}px`;
        shadowLight.style.display = `none`;
        console.log('BACK ON LIGHT 2500px!');
    }
}  

// 2880PX
function timeLightingSuperLargeX(){

    let scroll = window.pageYOffset
    let width = showcaseWidth.offsetWidth
    let calcul = scroll - 300

    if (scroll >= 1700 & width > 2800) { 
        lampDark.style.top = `500px`
        console.log(scroll)
        lightTime.style.transform = `block`;
        lightTime.style.display = `block`;
        shadowLight.style.display = `block`
        console.log('LIGHT IS ON 2800px!');
    } else {
        lightTime.style.display = `none`;
        lampDark.style.top = `${calcul -950}px`;
        shadowLight.style.display = `none`;
        console.log('BACK ON LIGHT 2800px!');
    }
}  


