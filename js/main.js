// Main JavaScript file for RetailFlow

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show the simulation message
            const simulationMessage = document.getElementById('simulationMessage');
            if (simulationMessage) {
                simulationMessage.style.display = 'block';
                
                // Scroll to the message
                simulationMessage.scrollIntoView({ behavior: 'smooth' });
                
                // Reset form after a delay
                setTimeout(function() {
                    contactForm.reset();
                }, 1000);
            }
        });
    }
});

// Navbar active state handling
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});