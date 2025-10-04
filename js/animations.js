// Enhanced Animations with GSAP and Advanced Effects
class AdvancedAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.initScrollEffects();
        this.initParallax();
        this.initTextReveal();
        this.initImageHover();
        this.initStaggerAnimations();
        this.initPageTransitions();
    }

    initScrollEffects() {
        // Smooth scrolling enhancement
        this.applySmoothScrolling();
        
        // Scroll-triggered animations
        this.initScrollTriggeredAnimations();
    }

    applySmoothScrolling() {
        // Add smooth scrolling to all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    initScrollTriggeredAnimations() {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            // Animate sections on scroll
            gsap.utils.toArray('section').forEach(section => {
                gsap.from(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 100,
                    opacity: 0,
                    duration: 1.2,
                    ease: 'power3.out'
                });
            });

            // Parallax effect for elements
            gsap.utils.toArray('.parallax').forEach(element => {
                gsap.to(element, {
                    yPercent: -20,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                    }
                });
            });

            // Stagger animations for lists
            gsap.utils.toArray('.stagger-item').forEach(container => {
                const items = container.querySelectorAll('.stagger-item');
                gsap.from(items, {
                    scrollTrigger: {
                        trigger: container,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power2.out'
                });
            });
        }
    }

    initParallax() {
        // Enhanced parallax for multiple elements
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax');
            
            parallaxElements.forEach((element, index) => {
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrolled * speed * (index * 0.3 + 1));
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    initTextReveal() {
        // Split text into characters for animation
        const textRevealElements = document.querySelectorAll('.text-reveal');
        
        textRevealElements.forEach(element => {
            const text = element.textContent;
            element.innerHTML = '';
            
            text.split('').forEach(char => {
                const span = document.createElement('span');
                span.className = 'char';
                span.textContent = char === ' ' ? '\u00A0' : char;
                element.appendChild(span);
            });
        });

        // Animate on scroll
        if (typeof gsap !== 'undefined') {
            gsap.utils.toArray('.text-reveal').forEach(element => {
                const chars = element.querySelectorAll('.char');
                
                gsap.from(chars, {
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 100,
                    opacity: 0,
                    rotationX: 90,
                    duration: 1,
                    stagger: 0.05,
                    ease: 'power3.out'
                });
            });
        }
    }

    initImageHover() {
        // Advanced image hover effects
        const images = document.querySelectorAll('.hover-3d');
        
        images.forEach(image => {
            image.addEventListener('mousemove', (e) => {
                const rect = image.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateY = (x - centerX) / 25;
                const rotateX = (centerY - y) / 25;
                
                image.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            });
            
            image.addEventListener('mouseleave', () => {
                image.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });
    }

    initStaggerAnimations() {
        // Stagger animations for various elements
        if (typeof gsap !== 'undefined') {
            // Animate skill bars
            gsap.utils.toArray('.skill-item').forEach((item, index) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    },
                    x: -100,
                    opacity: 0,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: 'power2.out'
                });
            });

            // Animate portfolio items
            gsap.utils.toArray('.portfolio-item').forEach((item, index) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 100,
                    opacity: 0,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: 'power2.out'
                });
            });
        }
    }

    // Enhanced Animations with GSAP and Advanced Effects

    constructor() {
        this.init();
    }

    init() {
        this.initScrollEffects();
        this.initParallax();
        this.initTextReveal();
        this.initImageHover();
        this.initStaggerAnimations();
        this.initPageTransitions();
    }

    initScrollEffects() {
        // Smooth scrolling enhancement
        this.applySmoothScrolling();
        
        // Scroll-triggered animations
        this.initScrollTriggeredAnimations();
    }

    applySmoothScrolling() {
        // Add smooth scrolling to all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    initScrollTriggeredAnimations() {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            // Animate sections on scroll
            gsap.utils.toArray('section').forEach(section => {
                gsap.from(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 100,
                    opacity: 0,
                    duration: 1.2,
                    ease: 'power3.out'
                });
            });

            // Parallax effect for elements
            gsap.utils.toArray('.parallax').forEach(element => {
                gsap.to(element, {
                    yPercent: -20,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                    }
                });
            });

            // Stagger animations for lists
            gsap.utils.toArray('.stagger-item').forEach(container => {
                const items = container.querySelectorAll('.stagger-item');
                gsap.from(items, {
                    scrollTrigger: {
                        trigger: container,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power2.out'
                });
            });
        }
    }

    initParallax() {
        // Enhanced parallax for multiple elements
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax');
            
            parallaxElements.forEach((element, index) => {
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrolled * speed * (index * 0.3 + 1));
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    initTextReveal() {
        // Split text into characters for animation
        const textRevealElements = document.querySelectorAll('.text-reveal');
        
        textRevealElements.forEach(element => {
            const text = element.textContent;
            element.innerHTML = '';
            
            text.split('').forEach(char => {
                const span = document.createElement('span');
                span.className = 'char';
                span.textContent = char === ' ' ? '\u00A0' : char;
                element.appendChild(span);
            });
        });

        // Animate on scroll
        if (typeof gsap !== 'undefined') {
            gsap.utils.toArray('.text-reveal').forEach(element => {
                const chars = element.querySelectorAll('.char');
                
                gsap.from(chars, {
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 100,
                    opacity: 0,
                    rotationX: 90,
                    duration: 1,
                    stagger: 0.05,
                    ease: 'power3.out'
                });
            });
        }
    }

    initImageHover() {
        // Advanced image hover effects
        const images = document.querySelectorAll('.hover-3d');
        
        images.forEach(image => {
            image.addEventListener('mousemove', (e) => {
                const rect = image.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateY = (x - centerX) / 25;
                const rotateX = (centerY - y) / 25;
                
                image.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            });
            
            image.addEventListener('mouseleave', () => {
                image.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });
    }

    initStaggerAnimations() {
        // Stagger animations for various elements
        if (typeof gsap !== 'undefined') {
            // Animate skill bars
            gsap.utils.toArray('.skill-item').forEach((item, index) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    },
                    x: -100,
                    opacity: 0,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: 'power2.out'
                });
            });

            // Animate portfolio items
            gsap.utils.toArray('.portfolio-item').forEach((item, index) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 100,
                    opacity: 0,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: 'power2.out'
                });
            });
        }
    }

    initPageTransitions() {
        // Add page transition styles
        const style = document.createElement('style');
        style.textContent = `
            .page-transition-enter {
                opacity: 0;
                transform: translateY(50px);
            }
            
            .page-transition-enter-active {
                opacity: 1;
                transform: translateY(0);
                transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .section-transition {
                opacity: 0;
                transform: translateY(100px);
                transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .section-transition.visible {
                opacity: 1;
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);
    }

    // Advanced animation utilities
    createParticleBurst(x, y, color = '#6C63FF') {
        const particles = [];
        const particleCount = 12;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: ${color};
                border-radius: 50%;
                pointer-events: none;
                z-index: 10000;
                left: ${x}px;
                top: ${y}px;
            `;
            
            document.body.appendChild(particle);
            particles.push(particle);
            
            if (typeof gsap !== 'undefined') {
                gsap.to(particle, {
                    x: (Math.random() - 0.5) * 200,
                    y: (Math.random() - 0.5) * 200,
                    opacity: 0,
                    scale: 0,
                    duration: 1,
                    ease: 'power2.out',
                    onComplete: () => particle.remove()
                });
            }
        }
    }

    // Magnetic field effect
    initMagneticField() {
        const magneticElements = document.querySelectorAll('.magnetic-field');
        
        magneticElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const distanceX = x - centerX;
                const distanceY = y - centerY;
                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                
                const maxDistance = Math.min(centerX, centerY);
                const strength = Math.min(1, (maxDistance - distance) / maxDistance);
                
                element.style.transform = `translate(${distanceX * strength * 0.1}px, ${distanceY * strength * 0.1}px)`;
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translate(0, 0)';
            });
        });
    }

    // Glitch effect
    applyGlitchEffect(element, duration = 500) {
        element.classList.add('glitch');
        setTimeout(() => {
            element.classList.remove('glitch');
        }, duration);
    }

    // Morphing shapes
    initMorphingShapes() {
        const morphElements = document.querySelectorAll('.morph');
        
        morphElements.forEach(element => {
            setInterval(() => {
                element.style.borderRadius = this.generateRandomBorderRadius();
            }, 8000);
        });
    }

    generateRandomBorderRadius() {
        const values = [];
        for (let i = 0; i < 8; i++) {
            values.push(`${Math.random() * 60 + 20}% ${Math.random() * 60 + 20}%`);
        }
        return values.join(' ');
    }
}

// Initialize advanced animations
document.addEventListener('DOMContentLoaded', () => {
    new AdvancedAnimations();
});

// Utility function for click effects
function createClickEffect(x, y) {
    const animations = new AdvancedAnimations();
    animations.createParticleBurst(x, y);
}

//

// Enhanced resize handling
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Re-initialize animations on resize
        const animations = new AdvancedAnimations();
    }, 250);
});