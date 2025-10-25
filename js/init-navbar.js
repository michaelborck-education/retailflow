// Universal navbar initialization script
// Include this in your pages: <script src="js/init-navbar.js"></script>

(function() {
    function initNavbar() {
        // Detect current location and set proper base path
        const currentPath = window.location.pathname;
        const isInSubdir = currentPath.includes('/crisis/') || currentPath.includes('/decisions/') || 
                          currentPath.includes('/company/') || currentPath.includes('/project/') || 
                          currentPath.includes('/resources/') || currentPath.includes('/training/') ||
                          currentPath.includes('/docs/');
        const basePath = isInSubdir ? '../' : './';
        
        // Build navbar HTML
        const navbarHTML = `
        <header id="quarto-header" class="headroom fixed-top">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark" data-bs-theme="dark">
                <div class="navbar-container container-fluid">
                    <div class="navbar-brand-container mx-auto">
                        <a href="${basePath}index.html" class="navbar-brand">
                            <span class="navbar-title">RetailFlow</span>
                        </a>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav navbar-nav-scroll me-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="${basePath}index.html" id="nav-home">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" id="nav-company">Company</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="${basePath}company/about.html">About RetailFlow</a></li>
                                    <li><a class="dropdown-item" href="${basePath}company/team.html">Leadership Team</a></li>
                                    <li><a class="dropdown-item" href="${basePath}company/overview.html">Company Overview</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="${basePath}contact.html" id="nav-contact">Contact</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" id="nav-training">Training</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="${basePath}training/about.html">About Our Program</a></li>
                                    <li><a class="dropdown-item" href="${basePath}consultant.html">Consultant Dashboard</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="${basePath}crisis/crisis-1-data-quality.html">Crisis 1: Data Quality</a></li>
                                    <li><a class="dropdown-item" href="${basePath}crisis/crisis-2-staff-resistance.html">Crisis 2: Staff Resistance</a></li>
                                    <li><a class="dropdown-item" href="${basePath}crisis/crisis-3-executive-pressure.html">Crisis 3: Executive Pressure</a></li>
                                    <li><a class="dropdown-item" href="${basePath}crisis/crisis-4-ethical-dilemma.html">Crisis 4: Ethical Dilemma</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="${basePath}decisions/scale-or-kill-cases.html">Scale/Kill Decisions</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        `;
        
        // Remove any existing header with id quarto-header
        const existingHeader = document.querySelector('header#quarto-header');
        if (existingHeader) {
            existingHeader.remove();
        }
        
        // Insert new navbar at the beginning of body
        document.body.insertAdjacentHTML('afterbegin', navbarHTML);
        
        // Set active nav items based on current page
        setActiveNav(currentPath);
    }
    
    function setActiveNav(currentPath) {
        const fileName = currentPath.split('/').pop().replace('.html', '') || 'index';
        const pathSegments = currentPath.split('/');
        const directory = pathSegments[pathSegments.length - 2] || '';
        
        setTimeout(() => {
            const homeNav = document.getElementById('nav-home');
            const trainingNav = document.getElementById('nav-training');
            const companyNav = document.getElementById('nav-company');
            const contactNav = document.getElementById('nav-contact');
            
            // Clear any existing active states
            document.querySelectorAll('.nav-link.active, .dropdown-item.active').forEach(el => {
                el.classList.remove('active');
            });
            
            if (fileName === 'index') {
                homeNav?.classList.add('active');
            } else if (fileName === 'contact') {
                contactNav?.classList.add('active');
            } else if (directory === 'training' || fileName === 'consultant' || fileName.startsWith('crisis-') || fileName === 'scale-or-kill-cases') {
                trainingNav?.classList.add('active');
                trainingNav?.parentElement?.classList.add('active');
                
                // Mark specific training item as active
                document.querySelectorAll('.dropdown-menu .dropdown-item').forEach(link => {
                    const href = link.getAttribute('href');
                    if (href && (href.includes(fileName) || href.includes(directory))) {
                        link.classList.add('active');
                    }
                });
            } else if (directory === 'company' || fileName === 'about' || fileName === 'team' || fileName === 'overview') {
                companyNav?.classList.add('active');
                companyNav?.parentElement?.classList.add('active');
                
                // Mark specific company item as active
                document.querySelectorAll('.dropdown-menu .dropdown-item').forEach(link => {
                    const href = link.getAttribute('href');
                    if (href && (href.includes(fileName) || href.includes(directory))) {
                        link.classList.add('active');
                    }
                });
            }
        }, 0);
    }
    
    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavbar);
    } else {
        initNavbar();
    }
})();
