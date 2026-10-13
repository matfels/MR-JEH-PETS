// 1. Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Menu Mobile Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 3. Scroll Reveal Animation (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Para animar apenas 1 vez
        }
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});