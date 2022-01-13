// Mobile manu implementation

const hamburger = document.querySelector('#mobile-menu')
const navMenu = document.querySelector('#navbar-menu')
const logo = document.querySelector('#logo')


const toggleMenu = () =>{
    hamburger.classList.toggle('is-active')
    navMenu.classList.toggle('active')
}

hamburger.addEventListener('click', toggleMenu)

// Mobile menu implementation ends

// Highlight Menu

const highlightMenu = () =>{
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')

    
    let scrollPos = window.scrollY

    // adds hightlight class to menu items

    if(window.innerWidth > 960 && scrollPos < 400){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        console.log(homeMenu.classList) 

        return
    }
    else if(window.innerWidth > 960 && scrollPos < 1000){
        homeMenu.classList.remove('highlight')
        aboutMenu.classList.add('highlight')
        servicesMenu.classList.remove('highlight')
        return
    }
    else if(window.innerWidth > 960 && scrollPos < 1500){
        aboutMenu.classList.remove('highlight')
        servicesMenu.classList.add('highlight')
        return
    }
    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

// Hide mobile menu

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 760 && menuBars){
        hamburger.classList.toggle('is-active')
        navMenu.classList.remove('active')
    }
}

navMenu.addEventListener('click', hideMobileMenu)
logo.addEventListener('click', hideMobileMenu)
