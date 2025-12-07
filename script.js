// RuneCast Landing Page Script

// Configuration constants
const GLITCH_PROBABILITY = 0.7; // Probability threshold for glitch effect
const TYPING_SPEED_MS = 100; // Speed of typing animation in milliseconds

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for any navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add glitch effect on hero text occasionally
    const glitchText = document.querySelector('.glitch-text');
    if (glitchText) {
        setInterval(() => {
            if (Math.random() > GLITCH_PROBABILITY) {
                glitchText.style.animation = 'none';
                setTimeout(() => {
                    glitchText.style.animation = '';
                }, 100);
            }
        }, 5000);
    }

    // Parallax scrolling disabled per user request

    // Add fade-in animation for sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections except hero
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // Add typing effect to tagline
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        const text = tagline.textContent;
        tagline.textContent = '';
        let index = 0;
        
        function typeWriter() {
            if (index < text.length) {
                tagline.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, TYPING_SPEED_MS);
            }
        }
        
        setTimeout(typeWriter, 500);
    }

    // Add hover sound effect simulation (visual feedback)
    const buttons = document.querySelectorAll('.cta-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.1s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Add click ripple effect to buttons
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                // Create ripple effect
                const ripple = document.createElement('span');
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255, 255, 255, 0.5)';
                ripple.style.width = '20px';
                ripple.style.height = '20px';
                ripple.style.left = e.offsetX + 'px';
                ripple.style.top = e.offsetY + 'px';
                ripple.style.transform = 'translate(-50%, -50%)';
                ripple.style.animation = 'ripple 0.6s ease-out';
                ripple.style.pointerEvents = 'none';
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            }
        });
    });

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                width: 300px;
                height: 300px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Console easter egg
    console.log('%c╔═══════════════════════════════════════╗', 'color: #00ffff; font-size: 12px;');
    console.log('%c║   RUNECAST - ACCESS GRANTED          ║', 'color: #00ffff; font-size: 12px;');
    console.log('%c║   System Status: ONLINE              ║', 'color: #00ffff; font-size: 12px;');
    console.log('%c║   Welcome, Developer                 ║', 'color: #ff00ff; font-size: 12px;');
    console.log('%c╚═══════════════════════════════════════╝', 'color: #00ffff; font-size: 12px;');
});
