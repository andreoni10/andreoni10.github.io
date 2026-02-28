const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Smooth reveal on load
window.addEventListener('load', () => {
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) heroContent.classList.add('active');
    }, 100);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});

// Resume Modal
const resumeModalOverlay = document.getElementById('resumeModalOverlay');
const resumeModalClose = document.getElementById('resumeModalClose');
const downloadCVBtn = document.getElementById('downloadCVBtn');
const downloadCVBtnMobile = document.getElementById('downloadCVBtnMobile');

function openResumeModal() {
    resumeModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeResumeModal() {
    resumeModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

downloadCVBtn.addEventListener('click', openResumeModal);
downloadCVBtnMobile.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    openResumeModal();
});
resumeModalClose.addEventListener('click', closeResumeModal);
resumeModalOverlay.addEventListener('click', (e) => {
    if (e.target === resumeModalOverlay) closeResumeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeResumeModal();
});