// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    toggleHamburgerIcon();
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        resetHamburgerIcon();
    });
});

// Animate hamburger icon
function toggleHamburgerIcon() {
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(10px, 10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        resetHamburgerIcon();
    }
}

function resetHamburgerIcon() {
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Book Now button functionality
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    alert('Thank you for your interest! Booking feature coming soon. Please call us at +91-XXXXXXXXXX or visit us in person.');
    // You can replace this with an actual booking modal or redirect to a booking page
});

// Add scroll animation to elements
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.pricing-card, .testimonial-card');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Initialize animations on load
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.pricing-card, .testimonial-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});
