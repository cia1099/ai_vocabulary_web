// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all feature blocks
    const featureBlocks = document.querySelectorAll('.feature-block');
    featureBlocks.forEach(block => {
        block.style.opacity = '0';
        block.style.transform = 'translateY(30px)';
        block.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(block);
    });
    
    // Add hover effects to mockup images
    const mockupImages = document.querySelectorAll('.mockup-center, .mockup-left');
    
    mockupImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const backgroundImage = document.querySelector('.background-image');
        
        if (hero && backgroundImage) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Store button click tracking (analytics placeholder)
    const storeButtons = document.querySelectorAll('.store-btn');
    storeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add analytics tracking here if needed
            console.log('Store button clicked:', this.querySelector('img').alt);
        });
    });
    
    // Loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Add loading placeholder
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
    
    // Dynamic text animation for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.innerHTML = '';
        
        // Split text into spans for animation
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.opacity = '0';
            span.style.animationDelay = `${index * 0.05}s`;
            span.style.animation = 'fadeInChar 0.6s ease forwards';
            heroTitle.appendChild(span);
        });
    }
    
    // Mobile menu functionality (if needed in future)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            // Toggle mobile menu
            this.classList.toggle('active');
        });
    }
    
    // Form validation (if contact form is added)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form validation logic here
            console.log('Form submitted');
        });
    });

    // Add floating animation to mockup images
    const mockupImages = document.querySelectorAll('.feature-mockups img');
    mockupImages.forEach((img, index) => {
        img.style.animation = `float ${3 + index * 0.5}s ease-in-out infinite`;
    });
});

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(-5deg); }
        50% { transform: translateY(-10px) rotate(-5deg); }
    }
    
    .mockup-center {
        animation: float 3s ease-in-out infinite;
    }
    
    .mockup-left {
        animation: float 3.5s ease-in-out infinite;
    }
`;
document.head.appendChild(style);

// Store button click tracking (for analytics)
document.querySelectorAll('.store-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const store = btn.classList.contains('app-store') ? 'App Store' : 'Google Play';
        console.log(`User clicked: ${store} download button`);
        
        // Add your analytics tracking here
        // Example: gtag('event', 'click', { 'event_category': 'download', 'event_label': store });
    });
});

// Add additional CSS animations
const additionalStyle = document.createElement('style');
additionalStyle.textContent = `
    @keyframes fadeInChar {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .store-btn {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .store-btn:hover {
        transform: translateY(-5px) scale(1.05);
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    }
    
    .feature-content h3 {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    .scroll-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #667eea;
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        opacity: 0;
        visibility: hidden;
    }
    
    .scroll-to-top.visible {
        opacity: 1;
        visibility: visible;
    }
    
    .scroll-to-top:hover {
        background: #5a67d8;
        transform: scale(1.1);
    }
`;
document.head.appendChild(additionalStyle);

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Add error handling for missing images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
        console.warn('Image failed to load:', e.target.src);
    }
}, true);

// Scroll-to-top functionality
let scrollToTopBtn = null;

function createScrollToTopButton() {
    if (!scrollToTopBtn) {
        scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.className = 'scroll-to-top';
        scrollToTopBtn.innerHTML = '↑';
        scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
        
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        document.body.appendChild(scrollToTopBtn);
    }
}

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        createScrollToTopButton();
        scrollToTopBtn.classList.add('visible');
    } else if (scrollToTopBtn) {
        scrollToTopBtn.classList.remove('visible');
    }
});

// Email validation for support link
const supportEmail = document.querySelector('.support-email');
if (supportEmail) {
    supportEmail.addEventListener('click', function(e) {
        console.log('Support email clicked');
        // Track support email clicks for analytics
    });
}
