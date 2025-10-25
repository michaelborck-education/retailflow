// Navbar injection script - Add this to any page to get consistent navbar
function initializeNavbar() {
    // Determine if we're in a subdirectory
    const currentPath = window.location.pathname;
    const isInSubdir = currentPath.includes('/crisis/') || currentPath.includes('/decisions/');
    const basePath = isInSubdir ? '../' : './';
    
    const navbarHTML = `
        <header id="quarto-header" class="headroom fixed-top">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark" data-bs-theme="dark">
                <div class="navbar-container container-fluid">
                    <div class="navbar-brand-container mx-auto">
                        <a href="${basePath}index.html" class="navbar-brand">
                            <span class="navbar-title">RetailFlow Masterclass</span>
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
                            <li class="nav-item">
                                <a class="nav-link" href="${basePath}consultant.html" id="nav-dashboard">Dashboard</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" id="nav-crisis">Crisis Scenarios</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="${basePath}crisis/crisis-1-data-quality.html">Crisis 1: Data Quality</a></li>
                                    <li><a class="dropdown-item" href="${basePath}crisis/crisis-2-staff-resistance.html">Crisis 2: Staff Resistance</a></li>
                                    <li><a class="dropdown-item" href="${basePath}crisis/crisis-3-executive-pressure.html">Crisis 3: Executive Pressure</a></li>
                                    <li><a class="dropdown-item" href="${basePath}crisis/crisis-4-ethical-dilemma.html">Crisis 4: Ethical Dilemma</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="${basePath}decisions/scale-or-kill-cases.html" id="nav-decisions">Scale/Kill Decisions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    `;
    
    // Insert navbar at the beginning of body if not already present
    if (!document.querySelector('header#quarto-header')) {
        document.body.insertAdjacentHTML('afterbegin', navbarHTML);
        
        // Mark current page as active
        setActiveNavItem(currentPath);
    }
}

function setActiveNavItem(currentPath) {
    const fileName = currentPath.split('/').pop().replace('.html', '');
    
    const homeNav = document.getElementById('nav-home');
    const dashboardNav = document.getElementById('nav-dashboard');
    const crisisNav = document.getElementById('nav-crisis');
    const decisionsNav = document.getElementById('nav-decisions');
    
    if (fileName === 'index' || fileName === '') {
        homeNav?.classList.add('active');
    } else if (fileName === 'consultant') {
        dashboardNav?.classList.add('active');
    } else if (fileName.startsWith('crisis-')) {
        crisisNav?.classList.add('active');
        crisisNav?.parentElement?.classList.add('active');
        
        // Mark specific crisis as active
        document.querySelectorAll('.dropdown-menu .dropdown-item').forEach(link => {
            if (link.getAttribute('href').includes(fileName)) {
                link.classList.add('active');
            }
        });
    } else if (fileName === 'scale-or-kill-cases') {
        decisionsNav?.classList.add('active');
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeNavbar);
} else {
    initializeNavbar();
}
