const responsiveMenu = () => {

    const menu = document.querySelector('#responsive-menu')
    const menuButton = document.querySelector('#menu-button')
    const menuClose = document.querySelector('#menu-close')

    const openMenu = () => {
        menu.classList.remove('hidden')

        menuButton.classList.add('hidden')
    }

    const closeMenu = () => {
        menu.classList.add('hidden')

        menuButton.classList.remove('hidden')
    }

    menuButton.addEventListener('click', openMenu)
    menuClose.addEventListener('click', closeMenu)
}

responsiveMenu()