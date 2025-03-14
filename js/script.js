const burger = document.getElementById('burger-icon');
const navbar = document.querySelector('.navbar');
const navbarNav = document.querySelector('.navbar__nav');
const navbarAuth = document.querySelector('.navbar__auth');
const dropdownBtn = document.querySelector('.navbar__dropdown-btn');
const dropdown = document.querySelector('.navbar__dropdown');
const sidebarArrow = document.querySelector('.sidebar__arrow-mobile');
const sidebarItems = document.querySelectorAll('.sidebar__item--live-events span');


burger.addEventListener('click', () => {
  // Открываем/закрываем бургер и навбар меню
  navbarNav.classList.toggle('active');
  navbarAuth.classList.toggle('active');
  // Меняем бургер на крестик 
  burger.classList.toggle('active');
});

// Закрываем navbar, если клик был не внутри
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    navbarNav.classList.remove('active');
    navbarAuth.classList.remove('active');
    burger.classList.remove('active');
  }
});

// Открываем/закрываем бургер и навбар меню
dropdownBtn.addEventListener('click', (e) => {
  dropdown.classList.toggle('active');
});

// Закрываем dropdown смены языка, если клик был не внутри
document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('active');
  }
});

// Открываем/закрываем faq 
document.querySelectorAll('.faq__question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    item.classList.toggle('active');
  });
});

// Открываем/закрываем sidebar items
if (sidebarArrow && sidebarItems.length) {
  sidebarArrow.addEventListener('click', (e) => {
    sidebarItems.forEach(item => {
      item.classList.toggle('active');
    });
  });
}

// Удаляем класс 'active' при клике вне sidebar
document.addEventListener('click', (e) => {
  // Проверяем, что клик был не по элементу sidebar
  if (!e.target.closest('.sidebar__header')) {
    sidebarItems.forEach(item => {
      item.classList.remove('active');
    });
  }
});
