window.addEventListener('scroll', () => {
    var containerNav = document.querySelector('.navbarContainer');

    if(window.scrollY > 0) {
        containerNav.classList.add('background');
    }else{
        containerNav.classList.remove('background');
    }
});

const styles = document.querySelector('.styles');
const iconDrop = document.querySelector('.arrow');
const navDropdown = document.querySelector('.dropdown');
const lastMenuItem = document.querySelector('.menuNav > li:last-child');

styles.addEventListener('click', () => {
    navDropdown.classList.toggle('dropOpen');
    iconDrop.classList.toggle('arrowRotate');
    lastMenuItem.classList.toggle('lastItemOpen');
});

const buttonMenuOpen = document.querySelector('.btnMenuOpen');
const menuNav = document.querySelector('.menuContainer');
const buttonMenuClose = document.querySelector('.btnMenuClose');

buttonMenuOpen.addEventListener('click', () => {
    menuNav.classList.add('active');
});
buttonMenuClose.addEventListener('click', () => {
    menuNav.classList.remove('active');
    navDropdown.classList.remove('dropOpen');
    lastMenuItem.classList.remove('lastItemOpen');
});