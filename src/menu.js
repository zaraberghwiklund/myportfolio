const responsiveMenu = () => {

    // Get elements from DOM
    const responsiveMenu = document.querySelector('#responsive-menu')
    const menuButton = document.querySelector('#menu-button')
    const menuClose = document.querySelector('#menu-close')

    const openMenu = () => {
        responsiveMenu.classList.remove('hidden')
        menuButton.classList.add('hidden')
    }
    // Close menu
    const closeMenu = () => {
        responsiveMenu.classList.add('hidden')
        menuButton.classList.remove('hidden')
    }
    // Open menu 
    menuButton.addEventListener('click', openMenu)
    menuClose.addEventListener('click', closeMenu)

    // Close menu when scrolling
    window.addEventListener("scroll", closeMenu)
    
}

responsiveMenu()