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

document.getElementById("timeIST").value = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata"
});

// Contact Form Submission (NO REDIRECT)
// const contactForm = document.getElementById('contactForm');

// if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();

//         const formData = new FormData(contactForm);

//         fetch(contactForm.action, {
//             method: "POST",
//             body: formData,
//             headers: {
//                 'Accept': 'application/json'
//             }
//         })
//         .then(response => {
//             if (response.ok) {
//                 document.getElementById('successMessage').style.display = 'block';
//                 contactForm.reset();
//             } else {
//                 alert("Something went wrong!");
//             }
//         })
//         .catch(error => {
//             alert("Error submitting form");
//         });
//     });
// }


// Image lazy loading
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.loading = 'lazy';
    });
}


