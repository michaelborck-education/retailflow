// Education Modal System for RetailFlow
// Shows educational context when clicking on simulated features

const educationMessages = {
    'shopping': {
        title: 'Shopping Feature',
        message: 'In a real e-commerce site, you would browse and purchase products here. This is an educational simulation, so no actual purchases can be made.',
        action: 'Browse Products'
    },
    'cart': {
        title: 'Shopping Cart',
        message: 'Your shopping cart would appear here with selected items. In a real store, you could adjust quantities and proceed to checkout.',
        action: 'Manage Cart'
    },
    'checkout': {
        title: 'Checkout Process',
        message: 'This is where customers enter payment and shipping information. Since this is a simulation, no real transactions occur.',
        action: 'Process Payment'
    },
    'track-order': {
        title: 'Order Tracking',
        message: 'In a real system, you would enter your order number here to track your package in real-time.',
        action: 'Track Shipment'
    },
    'shipping': {
        title: 'Shipping Information',
        message: 'This page would display shipping rates, delivery times, and tracking information for your orders.',
        action: 'Learn About Shipping'
    },
    'returns': {
        title: 'Returns & Refunds',
        message: 'In a real store, this would allow you to initiate returns and track refund status.',
        action: 'Start Return'
    },
    'faq': {
        title: 'Frequently Asked Questions',
        message: 'Common customer questions and answers would be displayed here.',
        action: 'View FAQ'
    },
    'careers': {
        title: 'Careers',
        message: 'In a real company, this page would list open job positions and allow you to apply.',
        action: 'Browse Jobs'
    },
    'press': {
        title: 'Press Releases',
        message: 'Company news and media information would be published here.',
        action: 'View Press Releases'
    },
    'privacy': {
        title: 'Privacy Policy',
        message: 'This is the company\'s privacy policy explaining how customer data is handled.',
        action: 'Read Policy'
    },
    'terms': {
        title: 'Terms of Service',
        message: 'These are the terms and conditions customers must agree to when using the service.',
        action: 'Read Terms'
    },
    'gift-cards': {
        title: 'Gift Cards',
        message: 'In a real store, you could purchase gift cards here for friends and family.',
        action: 'Buy Gift Card'
    },
    'social': {
        title: 'Social Media',
        message: 'This link would take you to RetailFlow\'s social media profile for product updates and customer engagement.',
        action: 'Follow Us'
    }
};

function showEducationModal(type) {
    const msg = educationMessages[type] || educationMessages['shopping'];
    
    // Create modal HTML
    const modalHTML = `
        <div class="modal fade" id="educationModal" tabindex="-1" aria-labelledby="educationModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-info text-white">
                        <h5 class="modal-title" id="educationModalLabel">
                            <i class="bi bi-info-circle"></i> Educational Feature
                        </h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h6 class="mb-3">${msg.title}</h6>
                        <p class="mb-3">${msg.message}</p>
                        <div class="alert alert-info mb-0">
                            <small><i class="bi bi-lightbulb"></i> <strong>Remember:</strong> This is a fictional RetailFlow simulation for educational purposes. No real transactions or actions are performed.</small>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-info" data-bs-dismiss="modal">
                            <i class="bi bi-arrow-right"></i> Understand
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if present
    const existingModal = document.getElementById('educationModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('educationModal'));
    modal.show();
    
    // Remove modal from DOM when hidden
    document.getElementById('educationModal').addEventListener('hidden.bs.modal', function() {
        this.remove();
    });
}

// Attach handlers to all education links
document.addEventListener('DOMContentLoaded', function() {
    // Shopping links
    document.querySelectorAll('[data-education="shopping"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showEducationModal('shopping');
        });
    });
    
    // Cart links
    document.querySelectorAll('[data-education="cart"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showEducationModal('cart');
        });
    });
    
    // Track order links
    document.querySelectorAll('[data-education="track-order"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showEducationModal('track-order');
        });
    });
    
    // Returns links
    document.querySelectorAll('[data-education="returns"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showEducationModal('returns');
        });
    });
    
    // Shipping links
    document.querySelectorAll('[data-education="shipping"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showEducationModal('shipping');
        });
    });
    
    // FAQ links
    document.querySelectorAll('[data-education="faq"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showEducationModal('faq');
        });
    });
    
    // Careers links
    document.querySelectorAll('[data-education="careers"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showEducationModal('careers');
        });
    });
    
    // Social links
    document.querySelectorAll('[data-education="social"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showEducationModal('social');
        });
    });
    
    // Legal links (Privacy, Terms)
    document.querySelectorAll('[data-education="privacy"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showEducationModal('privacy');
        });
    });
    
    document.querySelectorAll('[data-education="terms"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showEducationModal('terms');
        });
    });
    
    // Press links
    document.querySelectorAll('[data-education="press"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showEducationModal('press');
        });
    });
    
    // Gift cards
    document.querySelectorAll('[data-education="gift-cards"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showEducationModal('gift-cards');
        });
    });
});