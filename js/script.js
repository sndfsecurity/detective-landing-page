// Floating Call Button Visibility
window.addEventListener('scroll', function() {
    const floatingCall = document.querySelector('.floating-call');
    if (window.scrollY > 500) {
        floatingCall.classList.add('visible');
    } else {
        floatingCall.classList.remove('visible');
    }
});

// slider functionality
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

setInterval(() => {
    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");
}, 3000); // change every 3 seconds

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Restrict mobile number to only digits and exactly 10 characters
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        this.value = this.value.replace(/[^0-9]/g, ''); // Allow only digits
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10); // Limit to 10 digits
        }
    });
}

// Contact Form Submission (NO REDIRECT)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent page redirect
        
        // Get form data
        const serviceSelect = document.getElementById('service');
        const selectedService = serviceSelect.options[serviceSelect.selectedIndex]?.text || 'Not selected';
        
        // Validate mobile number length
        const phone = document.getElementById('phone').value;
        if (phone.length !== 10) {
            alert('Please enter exactly 10 digits for mobile number');
            return;
        }

        const formData = {
            name: document.getElementById('name').value,
            phone: phone,
            address: document.getElementById('address').value,
            service: selectedService,
            message: document.getElementById('message').value
        };

        console.log('Form submitted:', formData); // For debugging
        
        // Show success message
        const successMsg = document.getElementById('successMessage');
        successMsg.style.display = 'block';
        
        // Clear form
        this.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 5000);
    });
}

// Image lazy loading
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.loading = 'lazy';
    });
}


