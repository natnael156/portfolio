// Enhanced Particles.js Configuration with Interactive Features
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#6C63FF', '#FF6584', '#00D4FF', '#10b981', '#f59e0b']
        },
        shape: {
            type: ['circle', 'polygon'],
            polygon: {
                nb_sides: 6
            },
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.6,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#6C63FF',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: ['grab', 'bubble']
            },
            onclick: {
                enable: true,
                mode: ['push', 'repulse']
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 0.5
                }
            },
            bubble: {
                distance: 200,
                size: 6,
                duration: 2,
                opacity: 0.8,
                speed: 3
            },
            repulse: {
                distance: 150,
                duration: 0.4
            },
            push: {
                particles_nb: 6
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true,
    // Custom configurations
    background: {
        color: 'transparent'
    }
});

// Enhanced particle interactions
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('particles-js');
    if (!canvas) return;

    // Add mouse move particle attraction
    let mouseX = 0;
    let mouseY = 0;

    canvas.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Update particle attraction point
        if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
            window.pJSDom[0].pJS.interactivity.mouse.position.x = mouseX;
            window.pJSDom[0].pJS.interactivity.mouse.position.y = mouseY;
        }
    });

    // Particle burst on click
    canvas.addEventListener('click', function(e) {
        createParticleBurst(e.clientX, e.clientY, 20);
    });

    function createParticleBurst(x, y, count) {
        if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
            const pJS = window.pJSDom[0].pJS;
            for (let i = 0; i < count; i++) {
                pJS.particles.array.push(
                    pJS.fn.modes.pushParticles(pJS, 1, {
                        x: x,
                        y: y
                    })
                );
            }
        }
    }

    // Dynamic particle density based on scroll
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
            const pJS = window.pJSDom[0].pJS;
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollPercent = scrollY / (document.documentElement.scrollHeight - windowHeight);
            
            // Adjust particle density based on scroll position
            const targetDensity = Math.max(50, 100 - scrollPercent * 50);
            pJS.particles.number.value = targetDensity;
            
            // Refresh particles
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                pJS.fn.particlesRefresh();
            }, 150);
        }
    });

    // Particle color themes based on section
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                updateParticleTheme(sectionId);
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });

    function updateParticleTheme(sectionId) {
        if (!window.pJSDom || !window.pJSDom[0] || !window.pJSDom[0].pJS) return;

        const pJS = window.pJSDom[0].pJS;
        let colors;

        switch(sectionId) {
            case 'home':
                colors = ['#6C63FF', '#FF6584', '#00D4FF'];
                break;
            case 'about':
                colors = ['#10b981', '#f59e0b', '#8b5cf6'];
                break;
            case 'portfolio':
                colors = ['#ef4444', '#3b82f6', '#f59e0b'];
                break;
            case 'cv':
                colors = ['#8b5cf6', '#06b6d4', '#84cc16'];
                break;
            case 'contact':
                colors = ['#ec4899', '#f97316', '#84cc16'];
                break;
            default:
                colors = ['#6C63FF', '#FF6584', '#00D4FF'];
        }

        pJS.particles.color.value = colors;
        pJS.fn.particlesRefresh();
    }

    // Particle speed based on mouse velocity
    let lastMouseX = 0;
    let lastMouseY = 0;
    let mouseVelocity = 0;

    function calculateMouseVelocity(e) {
        const deltaX = e.clientX - lastMouseX;
        const deltaY = e.clientY - lastMouseY;
        mouseVelocity = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;

        // Update particle speed based on mouse velocity
        if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
            const pJS = window.pJSDom[0].pJS;
            const baseSpeed = 1.5;
            const speedMultiplier = Math.min(3, 1 + mouseVelocity / 100);
            pJS.particles.move.speed = baseSpeed * speedMultiplier;
        }
    }

    canvas.addEventListener('mousemove', calculateMouseVelocity);

    // Particle connection lines based on element proximity
    function updateParticleConnections() {
        if (!window.pJSDom || !window.pJSDom[0] || !window.pJSDom[0].pJS) return;

        const pJS = window.pJSDom[0].pJS;
        const interactiveElements = document.querySelectorAll('.card-3d, .portfolio-item, .btn');
        
        interactiveElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const elementCenter = {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            };

            // Attract particles to interactive elements
            pJS.particles.array.forEach(particle => {
                const dx = particle.x - elementCenter.x;
                const dy = particle.y - elementCenter.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 200) {
                    const force = (200 - distance) / 200;
                    particle.vx -= dx * force * 0.01;
                    particle.vy -= dy * force * 0.01;
                }
            });
        });
    }

    // Update connections on animation frame
    function animate() {
        updateParticleConnections();
        requestAnimationFrame(animate);
    }
    animate();
});