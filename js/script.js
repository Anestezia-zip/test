const burger = document.getElementById('burger-icon');
const navbar = document.querySelector('.navbar');
const navbarNav = document.querySelector('.navbar__nav');
const navbarAuth = document.querySelector('.navbar__auth');
const dropdownBtn = document.querySelector('.navbar__dropdown-btn');
const dropdown = document.querySelector('.navbar__dropdown');

burger.addEventListener('click', () => {
    // Открываем/закрываем бургер и навбар меню
    navbarNav.classList.toggle('active');
    navbarAuth.classList.toggle('active');
    // Меняем бургер на крестик 
    burger.classList.toggle('active');
});

// Слушаем клики по документу и закрываем navbar, если клик был не внутри
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
        navbarNav.classList.remove('active');
        navbarAuth.classList.remove('active');
        burger.classList.remove('active');
    }
});

// Открываем/закрываем бургер и навбар меню
dropdownBtn.addEventListener('click', (e) => {
  e.preventDefault();
    dropdown.classList.toggle('active');
});

// Слушаем клики по документу и закрываем dropdown смены языка, если клик был не внутри
document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('active');
  }
});
