// Universal footer initialization script
// Include this in your pages: <script src="js/init-footer.js"></script>

(function() {
    function initFooter() {
        // Build footer HTML
        const footerHTML = `
        <footer class="footer py-4 bg-dark text-light" style="margin-top: 50px;">
            <div class="container text-center">
                <p class="mb-0"><small>&copy; 2024 RetailFlow Masterclass | AI Project Management Simulation</small></p>
            </div>
        </footer>
        `;
        
        // Remove any existing footer with class "footer"
        const existingFooter = document.querySelector('footer.footer');
        if (existingFooter) {
            existingFooter.remove();
        }
        
        // Insert new footer before closing body tag
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
    
    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFooter);
    } else {
        initFooter();
    }
})();
