(function() {
    function initFooter() {
        const footerHTML = `
        <footer class="footer py-4 bg-dark text-light">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h5>RetailFlow</h5>
                        <p>Australia's fastest-growing retail destination, connecting millions of customers with the products they love.</p>
                        <div class="social-links">
                            <a href="#" class="text-light me-3"><i class="bi bi-facebook"></i></a>
                            <a href="#" class="text-light me-3"><i class="bi bi-twitter"></i></a>
                            <a href="#" class="text-light me-3"><i class="bi bi-instagram"></i></a>
                            <a href="#" class="text-light"><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                    
                    <div class="col-md-2">
                        <h6>Shop</h6>
                        <ul class="list-unstyled">
                            <li><a href="#" class="text-light text-decoration-none">New Arrivals</a></li>
                            <li><a href="#" class="text-light text-decoration-none">Best Sellers</a></li>
                            <li><a href="#" class="text-light text-decoration-none">Sale Items</a></li>
                            <li><a href="#" class="text-light text-decoration-none">Gift Cards</a></li>
                        </ul>
                    </div>
                    
                    <div class="col-md-2">
                        <h6>Customer Service</h6>
                        <ul class="list-unstyled">
                            <li><a href="contact.html" class="text-light text-decoration-none">Contact Us</a></li>
                            <li><a href="#" class="text-light text-decoration-none">Shipping Info</a></li>
                            <li><a href="#" class="text-light text-decoration-none">Returns</a></li>
                            <li><a href="#" class="text-light text-decoration-none">FAQ</a></li>
                        </ul>
                    </div>
                    
                    <div class="col-md-2">
                        <h6>About</h6>
                        <ul class="list-unstyled">
                            <li><a href="about.html" class="text-light text-decoration-none">Our Story</a></li>
                            <li><a href="#" class="text-light text-decoration-none">Leadership</a></li>
                            <li><a href="#" class="text-light text-decoration-none">Careers</a></li>
                            <li><a href="#" class="text-light text-decoration-none">Press</a></li>
                        </ul>
                    </div>
                    
                    <div class="col-md-2">
                        <h6>Legal</h6>
                        <ul class="list-unstyled">
                            <li><a href="docs/privacy.html" class="text-light text-decoration-none">Privacy Policy</a></li>
                            <li><a href="docs/terms.html" class="text-light text-decoration-none">Terms of Service</a></li>
                            <li><a href="docs/disclaimer.html" class="text-light text-decoration-none">Disclaimer</a></li>
                            <li><a href="docs/faq.html" class="text-light text-decoration-none">FAQ</a></li>
                        </ul>
                    </div>
                </div>
                
                <hr class="my-4 border-secondary">
                
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <p class="mb-0">&copy; 2024 RetailFlow. All rights reserved.</p>
                    </div>
                    <div class="col-md-6 text-md-end">
                        <p class="mb-0">
                            <small class="text-muted">ABN: 123 456 789 000 | ACN: 123 456 789</small>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        `;
        
        // Remove any existing footer
        const existingFooter = document.querySelector('footer.footer');
        if (existingFooter) {
            existingFooter.remove();
        }
        
        // Insert footer at the end of body
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
    
    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFooter);
    } else {
        initFooter();
    }
})();
