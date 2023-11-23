const menuButton = document.querySelector('.menu-button');
const menuNav = document.querySelector('.menu-nav');

menuButton.addEventListener('click', () => {
    menuNav.classList.toggle('show');
});

document.querySelectorAll('.menu-nav li a').forEach(anchor => {
    anchor.addEventListener('click', () => {
        menuNav.classList.remove('show');
    });
});

document.querySelector('.menu-button-close').addEventListener('click', () => {
    menuNav.classList.remove('show');
});

document.querySelector('.nav-home').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.querySelector('.nav-about').addEventListener('click', () => {
    const aboutSection = document.querySelector('.about');
    aboutSection.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.nav-services').addEventListener('click', () => {
    const servicesSection = document.querySelector('.services');
    servicesSection.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.nav-testimonials').addEventListener('click', () => {
    const testimonialsSection = document.querySelector('.testimonials');
    testimonialsSection.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.nav-paket-wisata').addEventListener('click', () => {
    const paketWisataSection = document.querySelector('.paket-wisata');
    paketWisataSection.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.nav-kontak').addEventListener('click', () => {
    const kontakSection = document.querySelector('.kontak');
    kontakSection.scrollIntoView({
        behavior: 'smooth'
    });
});