const hamburgerMenu = document.querySelector('#hamburger-menu');
const menuItems = document.querySelector('.mobile-menu');
const cancelMenu = document.querySelector('.popup-cancel');
const menuItemsList = document.querySelectorAll('.popup-menu-list-item');

hamburgerMenu.addEventListener('click', displayMenu);
cancelMenu.addEventListener('click', closeMenu);

function displayMenu() {
    menuItems.classList.toggle('mobile-menu-view');
}

function closeMenu() {
    menuItems.classList.toggle('mobile-menu-view');
}

for (let i = 0; i < menuItemsList.length; i++) {
    menuItemsList[i].addEventListener('click', () => {
        menuItems.classList.toggle('mobile-menu-view');
    })
}
