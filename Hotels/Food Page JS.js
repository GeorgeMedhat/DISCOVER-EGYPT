// const buttons = document.querySelectorAll("[data-carousel-button]")

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     const offset = button.dataset.carouselButton === "next" ? 1 : -1
//     const slides = button
//       .closest("[data-carousel]")
//       .querySelector("[data-slides]")

//     const activeSlide = slides.querySelector("[data-active]")
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset
//     if (newIndex < 0) newIndex = slides.children.length - 1
//     if (newIndex >= slides.children.length) newIndex = 0

//     slides.children[newIndex].dataset.active = true
//     delete activeSlide.dataset.active
//   })
// })















'use strict';

const toggle = document.querySelector('.toggle');
const nav = document.querySelector('nav');
const section = document.querySelector('.games-list');
const title = document.querySelector('.title');
const menu = document.querySelector('.menu');
const header = document.querySelector('header');
const openedMenu = document.querySelector('.menu-open');
const x = document.querySelector('.x');

toggle.onclick = () => {
    toggle.classList.toggle('toggle--isActive');
}
toggle.addEventListener('click' , () => {
    section.classList.toggle('dark-mode');
    section.classList.toggle('switch-color');
    title.classList.toggle('dark-mode');
    title.classList.toggle('switch-color');
});

menu.addEventListener('click', () => {
    header.style.display = 'none';
    openedMenu.style.width = '70%';
    openedMenu.style.display = 'block';
});
x.addEventListener('click', () => {
    header.style.display = 'flex';
    openedMenu.style.width = '0%';
    openedMenu.style.display = 'none';
})