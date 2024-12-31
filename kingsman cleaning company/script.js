// Testimonials Data
const testimonials = [
    {
        name: "ssali Kluivert",
        text: "Kingsman Cleaning Services transformed our office space. Their attention to detail is remarkable!",
        rating: 5
    },
    {
        name: "Kato Nganda",
        text: "I've been using their residential cleaning service for a year now. Best decision ever!",
        rating: 5
    },
    {
        name: "Kagimu John",
        text: "Professional, reliable, and thorough. Highly recommend their deep cleaning service.",
        rating: 5
    }
];

// Initialize testimonials slider
function initTestimonials() {
    const slider = document.querySelector('.testimonials-slider');
    
    testimonials.forEach(testimonial => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.className = 'testimonial';
        
        const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
        
        testimonialDiv.innerHTML = `
            <p>${testimonial.text}</p>
            <div class="stars">${stars}</div>
            <h4>${testimonial.name}</h4>
        `;
        
        slider.appendChild(testimonialDiv);
    });
}

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Initialize testimonials on page load
document.addEventListener('DOMContentLoaded', initTestimonials);

// Scroll reveal animation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    
    // Load low quality image first
    hero.style.backgroundImage = `
        linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
        url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&w=100&q=30&blur=10')
    `;
    
    // Then load high quality image
    const highQualityImage = new Image();
    highQualityImage.src = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&w=1000&q=60';
    
    highQualityImage.onload = () => {
        hero.style.backgroundImage = `
            linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
            url('${highQualityImage.src}')
        `;
    };
}); 