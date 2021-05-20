const menuElem = document.querySelector('.menu');
const humburgerElem = document.querySelector('.humburger-menu');

// const menuList = document.querySelectorAll('.menu-list__item');
// const toggleMenu = () => {
//   menuElem.classList.toggle('menu-active');
//   humburgerElem.classList.toggle('humburger-menu-active');
// }

const  openMenu = () => {
  menuElem.classList.add('menu-active');
  humburgerElem.classList.add('humburger-menu-active');
}
const closeMenu = () => {
  menuElem.classList.remove('menu-active');
  humburgerElem.classList.remove('humburger-menu-active');
}

// humburgerElem.addEventListener('click', openMenu);
humburgerElem.addEventListener('click', () =>{
  if (menuElem.classList.contains('menu-active')) {
    closeMenu();
  } else {
    openMenu();
  }
});
menuElem.addEventListener('click', closeMenu);
