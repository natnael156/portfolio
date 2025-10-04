// Fixed Professional Portfolio - All Buttons Working with Mobile Fixes
class ProfessionalPortfolio {
    constructor() {
        this.currentTheme = 'dark';
        this.isLoading = true;
        this.init();
    }

    init() {
        this.initLoadingScreen();
        this.initCoreFeatures();
        this.loadAllContent();
        this.initAnimations();
        this.initMobileLayout(); // Added mobile layout initialization
    }

    initLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        const progressFill = document.querySelector('.progress-fill');
        const loadingText = document.getElementById('loadingText');
        
        if (!loadingScreen) {
            this.hideLoadingScreen();
            return;
        }

        const steps = [
            { text: 'Loading Portfolio...', progress: 15 },
            { text: 'Initializing Components...', progress: 45 },
            { text: 'Finalizing Setup...', progress: 65 },
            { text: 'Ready!', progress: 90 }
        ];

        let currentStep = 0;

        const updateProgress = () => {
            if (currentStep < steps.length) {
                const step = steps[currentStep];
                if (loadingText) loadingText.textContent = step.text;
                if (progressFill) progressFill.style.width = `${step.progress}%`;
                currentStep++;
                setTimeout(updateProgress, 500);
            } else {
                setTimeout(() => {
                    this.hideLoadingScreen();
                }, 500);
            }
        };

        updateProgress();
    }

    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.classList.add('loaded');
            setTimeout(() => {
                loadingScreen.remove();
                this.isLoading = false;
            }, 800);
        }
    }

    initCoreFeatures() {
        this.initEventListeners();
        this.initThemeSystem();
        this.initMobileMenu();
        this.initCustomCursor();
        this.initMagneticButtons();
        this.initScrollProgress();
        this.initTouchInteractions();
        this.initMainNavigationButtons(); 
    }

    // Initialize mobile-specific layout adjustments
    initMobileLayout() {
        // Adjust layout for mobile
        if (window.innerWidth <= 992) {
            this.adjustMobileLayout();
        }
        
        // Adjust floating animation speed on mobile
        if (window.innerWidth <= 768) {
            const floatingElements = document.querySelectorAll('.floating');
            floatingElements.forEach(el => {
                el.style.animationDuration = '8s';
            });
            
            // Make cards non-interactive on mobile
            const cards = document.querySelectorAll('.card-3d');
            cards.forEach(card => {
                card.style.pointerEvents = 'none';
            });
        }
        
        // Listen for resize events to adjust layout
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }
    
    adjustMobileLayout() {
        // Reposition hero visual elements for mobile
        const heroVisual = document.querySelector('.hero-visual');
        if (heroVisual && window.innerWidth <= 992) {
            heroVisual.style.position = 'relative';
            heroVisual.style.right = '0';
            heroVisual.style.top = '0';
            heroVisual.style.transform = 'none';
            heroVisual.style.width = '100%';
            heroVisual.style.height = '300px';
            heroVisual.style.marginTop = '40px';
            heroVisual.style.marginBottom = '40px';
        }
        
        // Adjust code editor for mobile
        const codeEditor = document.querySelector('.code-editor');
        if (codeEditor && window.innerWidth <= 992) {
            codeEditor.style.position = 'relative';
            codeEditor.style.left = '0';
            codeEditor.style.top = '0';
            codeEditor.style.transform = 'none';
            codeEditor.style.width = '100%';
            codeEditor.style.maxWidth = '400px';
            codeEditor.style.margin = '40px auto';
        }
        
        // Adjust tech cloud for mobile
        const techCloud = document.querySelector('.tech-cloud');
        if (techCloud && window.innerWidth <= 992) {
            techCloud.style.position = 'relative';
            techCloud.style.right = '0';
            techCloud.style.top = '0';
            techCloud.style.transform = 'none';
            techCloud.style.marginTop = '40px';
            techCloud.style.textAlign = 'center';
            
            // Make tech icons smaller and visible
            const techIcons = techCloud.querySelectorAll('.tech-icon');
            techIcons.forEach(icon => {
                icon.style.position = 'relative';
                icon.style.display = 'inline-block';
                icon.style.margin = '10px';
                icon.style.animation = 'none';
                icon.style.width = '40px';
                icon.style.height = '40px';
                icon.style.fontSize = '1.2rem';
            });
        }
        
        // Adjust stats layout for mobile
        const heroStats = document.querySelector('.hero-stats');
        if (heroStats && window.innerWidth <= 768) {
            heroStats.style.flexDirection = 'column';
            heroStats.style.gap = '20px';
            heroStats.style.alignItems = 'center';
        }
    }
    
    handleResize() {
        this.adjustMobileLayout();
        
        // Re-adjust floating animation speed
        if (window.innerWidth <= 768) {
            const floatingElements = document.querySelectorAll('.floating');
            floatingElements.forEach(el => {
                el.style.animationDuration = '8s';
            });
        } else {
            const floatingElements = document.querySelectorAll('.floating');
            floatingElements.forEach(el => {
                el.style.animationDuration = '6s';
            });
        }
    }

    // Initialize all specific buttons for smooth scrolling and actions
    initMainNavigationButtons() {
        this.initHeroButtons();
        this.initResumeButtons();
        this.initContactForm();
        this.initFooterButtons();
    }

    // Hero section buttons: 'explore my work', 'start project', 'View Resume'
    initHeroButtons() {
        const exploreWorkBtn = document.querySelector('a[href="#portfolio"]');
        const startProjectBtn = document.querySelector('a[href="#contact"]');
        const viewResumeBtn = document.querySelector('a[href="#cv"]');

        if (exploreWorkBtn) {
            const scrollPortfolio = () => this.smoothScrollTo('#portfolio');
            exploreWorkBtn.addEventListener('click', (e) => {
                e.preventDefault();
                scrollPortfolio();
            });
            
            exploreWorkBtn.addEventListener('touchend', (e) => {
                e.preventDefault();
                scrollPortfolio();
            });
        }

        if (startProjectBtn) {
            const scrollContact = () => this.smoothScrollTo('#contact');
            startProjectBtn.addEventListener('click', (e) => {
                e.preventDefault();
                scrollContact();
            });
            
            startProjectBtn.addEventListener('touchend', (e) => {
                e.preventDefault();
                scrollContact();
            });
        }

        if (viewResumeBtn) {
            const scrollCV = () => this.smoothScrollTo('#cv');
            viewResumeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                scrollCV();
            });
            
            viewResumeBtn.addEventListener('touchend', (e) => {
                e.preventDefault();
                scrollCV();
            });
        }
    }

    // Smooth scroll function
    smoothScrollTo(selector) {
        const target = document.querySelector(selector);
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
            this.closeMobileMenu();
        } else {
            console.error('Target not found:', selector);
        }
    }

    loadAllContent() {
        this.loadPortfolioItems();
        this.loadResumeData();
        this.initCounterAnimation();
        this.initSkillBars();
    }

    initAnimations() {
        this.initTypedText();
        this.initCodeAnimation();
        this.initScrollAnimations();
    }

    // Touch interactions for mobile (to manage visual feedback like 'touch-active' and ripple)
    initTouchInteractions() {
        const interactiveElements = document.querySelectorAll('.btn, .magnetic, .filter-btn, .cv-tab, .portfolio-link, .social-link, .nav-link');
        
        interactiveElements.forEach(element => {
            element.addEventListener('touchstart', (e) => {
                element.classList.add('touch-active');
                this.createRippleEffect(e, element);
            });

            element.addEventListener('touchend', (e) => {
                element.classList.remove('touch-active');
            });

            element.addEventListener('touchcancel', (e) => {
                element.classList.remove('touch-active');
            });
        });
    }

    // Ripple effect for touch interactions
    createRippleEffect(event, element) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        
        const touch = event.touches ? event.touches[0] : event;
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        
        ripple.style.cssText = `
            position: absolute;
            top: ${y}px;
            left: ${x}px;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: translate(-50%, -50%);
            pointer-events: none;
            animation: ripple 0.6s ease-out;
        `;
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Typed Text Animation
    initTypedText() {
        const texts = {
            line1: "Crafting Digital",
            line2: "Experiences",
            line3: "That Inspire",
            description: "Full-Stack UI/UX Developer with 5+ years of experience creating innovative digital solutions. Specializing in modern web technologies and user-centered design principles."
        };

        const typedText1 = document.getElementById('typed-text-1');
        const typedText2 = document.getElementById('typed-text-2');
        const typedText3 = document.getElementById('typed-text-3');
        const heroDescription = document.getElementById('hero-description');

        // Clear previous text
        if (typedText1) typedText1.textContent = '';
        if (typedText2) typedText2.textContent = '';
        if (typedText3) typedText3.textContent = '';
        if (heroDescription) heroDescription.textContent = '';

        // Start typing sequence
        this.typeText('typed-text-1', texts.line1, 80, () => {
            this.typeText('typed-text-2', texts.line2, 60, () => {
                this.typeText('typed-text-3', texts.line3, 80, () => {
                    this.typeText('hero-description', texts.description, 30, () => {
                        // 🔁 Restart after 5 seconds
                        setTimeout(() => {
                            this.initTypedText();
                        }, 5000);
                    });
                });
            });
        });
    }

    typeText(elementId, text, speed, onComplete = null) {
        const element = document.getElementById(elementId);
        if (!element) {
            if (onComplete) onComplete();
            return;
        }

        let i = 0;
        const type = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (onComplete) {
                onComplete();
            }
        };
        type();
    }

    // Code Animation
    initCodeAnimation() {
        const codeElement = document.getElementById('animatedCode');
        if (!codeElement) return;

        const code = `function createPortfolio() {\n  const innovation = true;\n  const design = 'beautiful';\n  const code = 'clean';\n  \n  return {\n    userExperience: 'seamless',\n    performance: 'optimized',\n    impact: 'memorable'\n  };\n}`;

        codeElement.textContent = '';
        let i = 0;

        const typeCode = () => {
            if (i < code.length) {
                codeElement.textContent += code.charAt(i);
                i++;
                setTimeout(typeCode, 30);
            } else {
                // 🔁 Restart after 5 seconds
                setTimeout(() => {
                    this.initCodeAnimation();
                }, 5000);
            }
        };

        setTimeout(typeCode, 2000);
    }

    // PORTFOLIO SECTION
    portfolioItems = [
        {
            id: 1,
            title: "Full stack resturant managment system",
            category: "web",
            description: "A Full-Stack Restaurant Management System is a complete, integrated software solution that digitizes all aspects of a restaurant's operations,",
            image: "assets/marc.png",
            technologies: ["PHP", "Laravel", "CSS3","JS", "Mysql"],
            liveUrl: "https://marccafe.com/",
           
            //featured: true
        },
       
        {
            id: 3,
            title: "Import Export Website",
            category: "web",
            description: "Informational / corporate / company profile website",
            image: "assets/mario.png",
            technologies: ["HTML5", " CSS", "js"],
            liveUrl: "https://marioimportexport.com/",
            
            featured: false
        },
        {
            id: 4,
            title: "Ful lstack E-commerce websites",
            category: "web",
            description: "A Full-Stack E-commerce Website is an online platform that allows users to browse, select, and purchase products or services, built using both front-end and back-end technologies",
            image: "assets/hilal.png",
            technologies: ["Laravel", "PHP", "Mysql","js","HTML5","CSS3"],
            liveUrl: "https://hillelshop.com/",
            
            featured: true
        },
        
        
    ];

    loadPortfolioItems() {
        const grid = document.getElementById('portfolioGrid');
        if (!grid) {
            console.error('Portfolio grid not found');
            return;
        }

        this.renderPortfolioItems('all');
        this.initPortfolioFilters();
    }

    renderPortfolioItems(filter) {
        const grid = document.getElementById('portfolioGrid');
        if (!grid) return;

        const filteredItems = filter === 'all' 
            ? this.portfolioItems 
            : this.portfolioItems.filter(item => item.category === filter);

        grid.innerHTML = filteredItems.map(item => `
            <div class="portfolio-item reveal" data-category="${item.category}">
                ${item.featured ? '<div class="featured-badge"><i class="fas fa-star"></i> Featured</div>' : ''}
                <img src="${item.image}" alt="${item.title}" class="portfolio-image">
                <div class="portfolio-content">
                    <span class="portfolio-category">${this.getCategoryName(item.category)}</span>
                    <h3 class="portfolio-title">${item.title}</h3>
                    <p class="portfolio-description">${item.description}</p>
                    <div class="portfolio-tech">
                        ${item.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="portfolio-links">
                        <a href="${item.liveUrl}" class="portfolio-link live-demo">
                            <i class="fas fa-external-link-alt"></i>
                            Go to website
                        </a>
                        
                    </div>
                </div>
            </div>
        `).join('');

        this.initPortfolioInteractions();
        this.initScrollAnimations();
    }

    // Portfolio filters are now working with both click and touchend
    initPortfolioFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        const handleFilterClick = (btn) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            this.renderPortfolioItems(btn.dataset.filter);
        };

        filterBtns.forEach(btn => {
            // Click handler for desktop
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                handleFilterClick(btn);
            });

            // Touchend handler for mobile
            btn.addEventListener('touchend', (e) => {
                e.preventDefault();
                handleFilterClick(btn);
            });
        });
    }

    initPortfolioInteractions() {
        const handleLinkActivation = (link) => {
            const url = link.getAttribute('href');
            if (url && url !== '#') {
                window.open(url, '_blank');
            } else {
                this.showNotification('Project details coming soon!', 'info');
            }
        };
        
        document.querySelectorAll('.portfolio-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                handleLinkActivation(link);
            });

            link.addEventListener('touchend', (e) => {
                e.preventDefault();
                handleLinkActivation(link);
            });
        });
    }

    getCategoryName(category) {
        const categories = {
            'web': 'Web Application',
            'mobile': 'Mobile App',
            'ui-ux': 'UI/UX Design'
        };
        return categories[category] || category;
    }

    // RESUME SECTION
    resumeData = {
        experience: [
            {
                period: "2022 - 2023",
                title: "Digitalization Assistant Worker  ",
                company: "Harambee University.",
                location: "Ethiopia, Adama",
                description: "Assist in implementing and managing digital tools to streamline workflows and improve efficiency.",
                achievements: [
                    "Successfully implemented digital tools",
                    "automate tasks,improve efficiency",
                    "enhance data management"

                ]
            },
            {
                period: "2023 - 2024",
                title: "Full stack Developer",
                company: "Melkassa Agricultural Research Center (MARC)",
                location: "Ethiopia, awash melkasa",
                description: "Developed responsive web applications using modern frameworks. Collaborated with UX team to implement design systems.",
                achievements: [
                    "Built component library used across projects",
                    "Improved resturant managment systems",
                    "Reduced bundle size by 35% through code splitting"
                ]
            },
            {
                period: "2024-present",
                title: "Full stck developer",
                company: "Mario Import Export",
                location: "Ethiopia, Adama",
                description: "Designs, develops, and maintains both front-end and back-end of web applications, ensuring seamless user experience, functionality, and performance across platforms.",
                achievements: [
                    "Optimized application performance, reducing load times and improving user engagement.",
                    "Built and deployed full-stack web applications using modern technologies (e.g., React, Node.js, PHP, MySQL).",
                    "Collaborated with teams to deliver projects on time, meeting client requirements."
                ]
            }
        ],
        education: [
            {
                period: "2019 - 2023",
                title: "Bachelor of Science in Computer Science",
                company: "Harambee University",
                location: "Ethiopia, Adama",
                description: "Specialized in  Web Technologies. Graduated  with GPA 3.72/4.0.",
                achievements: [
                    "Graduated with a strong academic record and practical experience in programming, software development, and data structures.",
                    "Completed projects and internships demonstrating proficiency in full-stack development and problem-solving.",
                    "Gained hands-on experience with modern technologies, algorithms, and database management."
                ]
            }
        ],
        certifications: [
            {
                title: "Android Developer",
                issuer: "Udacity",
                date: "2025",
                icon: "fab fa-android",
                
            },
            {
                title: "Artificial Intelligence ",
                issuer: "Udacity",
                date: "2025",
                icon: " fas fa-robot",
               
            },
            {
                title: "Programming ",
                issuer: "Udacity",
                date: "2025",
                icon: "fas fa-laptop-code",
             
            }
        ]
    };

    loadResumeData() {
        this.renderExperience();
        this.renderEducation();
        this.renderCertifications();
        this.initResumeTabs();
    }

    renderExperience() {
        const container = document.getElementById('experience-tab');
        if (!container) {
            console.error('Experience tab container not found');
            return;
        }

        container.innerHTML = `
            <div class="timeline">
                ${this.resumeData.experience.map((exp, index) => `
                    <div class="timeline-item reveal ${index === 0 ? 'current' : ''}">
                        <div class="timeline-marker">
                            <i class="fas fa-briefcase"></i>
                        </div>
                        <div class="timeline-content">
                            <div class="timeline-period">${exp.period}</div>
                            <h3 class="timeline-title">${exp.title}</h3>
                            <div class="timeline-company">
                                <span class="company-name">${exp.company}</span>
                                <span class="company-location">${exp.location}</span>
                            </div>
                            <p class="timeline-description">${exp.description}</p>
                            <div class="timeline-achievements">
                                <h4>Key Achievements:</h4>
                                <ul>
                                    ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderEducation() {
        const container = document.getElementById('education-tab');
        if (!container) {
            console.error('Education tab container not found');
            return;
        }

        container.innerHTML = `
            <div class="timeline">
                ${this.resumeData.education.map(edu => `
                    <div class="timeline-item reveal">
                        <div class="timeline-marker">
                            <i class="fas fa-graduation-cap"></i>
                        </div>
                        <div class="timeline-content">
                            <div class="timeline-period">${edu.period}</div>
                            <h3 class="timeline-title">${edu.title}</h3>
                            <div class="timeline-company">
                                <span class="company-name">${edu.company}</span>
                                <span class="company-location">${edu.location}</span>
                            </div>
                            <p class="timeline-description">${edu.description}</p>
                            <div class="timeline-achievements">
                                <h4>Notable Accomplishments:</h4>
                                <ul>
                                    ${edu.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderCertifications() {
        const container = document.getElementById('certifications-tab');
        if (!container) {
            console.error('Certifications tab container not found');
            return;
        }

        container.innerHTML = `
            <div class="certifications-grid">
                ${this.resumeData.certifications.map(cert => `
                    <div class="certification-item reveal">
                        <div class="certification-header">
                            <div class="certification-icon">
                                <i class="${cert.icon}"></i>
                            </div>
                            <div class="certification-info">
                                <h3 class="certification-title">${cert.title}</h3>
                                <div class="certification-issuer">${cert.issuer}</div>
                                <div class="certification-date">Issued: ${cert.date}</div>
                                
                            </div>
                        </div>
                        <div class="certification-actions">
                            <button class="btn btn-outline btn-sm view-certificate" data-cert="${cert.title}">
                                
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        document.querySelectorAll('.view-certificate').forEach(btn => {
            const handleCertClick = () => {
                const certName = btn.dataset.cert;
                this.showNotification(`Viewing certificate: ${certName}`, 'info');
            };
            
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                handleCertClick();
            });

            btn.addEventListener('touchend', (e) => {
                e.preventDefault();
                handleCertClick();
            });
        });
    }

    // Resume tabs are now working with both click and touchend
    initResumeTabs() {
        const tabs = document.querySelectorAll('.cv-tab');
        const tabContents = document.querySelectorAll('.cv-tab-content');

        const handleTabClick = (tab) => {
            const target = tab.dataset.tab;
            this.switchResumeTab(target, tab, tabs, tabContents);
        };

        tabs.forEach(tab => {
            // Click handler for desktop
            tab.addEventListener('click', () => {
                handleTabClick(tab);
            });

            // Touchend handler for mobile
            tab.addEventListener('touchend', (e) => {
                e.preventDefault();
                handleTabClick(tab);
            });
        });
    }

    switchResumeTab(target, activeTab, allTabs, tabContents) {
        allTabs.forEach(t => t.classList.remove('active'));
        activeTab.classList.add('active');
        
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === `${target}-tab`) {
                content.classList.add('active');
            }
        });
    }

    // Initialize resume download button
    initResumeButtons() {
        const downloadCvBtn = document.getElementById('downloadCvBtn');
        if (downloadCvBtn) {
            const download = () => this.downloadCV();
            
            downloadCvBtn.addEventListener('click', (e) => {
                e.preventDefault();
                download();
            });

            downloadCvBtn.addEventListener('touchend', (e) => {
                e.preventDefault();
                download();
            });
        }
    }

    // CONTACT SECTION
    initContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) {
            console.error('Contact form not found');
            return;
        }

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit(contactForm);
        });
    }

    handleFormSubmit(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        setTimeout(() => {
            this.showNotification(`Thank you, ${data.name}! Your message has been sent successfully. I'll get back to you within 24 hours.`, 'success');
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    // Initialize footer buttons (like 'backToTop') and header 'Hire Me' button
    initFooterButtons() {
        const backToTop = document.getElementById('backToTop');
        if (backToTop) {
            const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
            
            backToTop.addEventListener('click', scrollToTop);

            backToTop.addEventListener('touchend', (e) => {
                e.preventDefault();
                scrollToTop();
            });
        }

        // Hire me button in header
        const hireMeBtn = document.querySelector('.nav-cta');
        if (hireMeBtn) {
            const scrollContact = () => this.smoothScrollTo('#contact');
            
            hireMeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                scrollContact();
            });

            hireMeBtn.addEventListener('touchend', (e) => {
                e.preventDefault();
                scrollContact();
            });
        }
    }

    // Core Features
    initEventListeners() {
        // Handle generic navigation links (a[href^="#"])
        const handleNavLink = (link) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
                this.closeMobileMenu();
            }
        };
        
        // General click/touchend handler for links not covered by specific button initializers
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                handleNavLink(link);
            });

            link.addEventListener('touchend', (e) => {
                e.preventDefault();
                handleNavLink(link);
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            const backToTop = document.getElementById('backToTop');
            
            if (header) {
                header.classList.toggle('scrolled', window.scrollY > 50);
            }

            if (backToTop) {
                backToTop.style.opacity = window.scrollY > 300 ? '1' : '0';
                backToTop.style.visibility = window.scrollY > 300 ? 'visible' : 'hidden';
            }
        });
    }

    closeMobileMenu() {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');
        
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            if (hamburger) {
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    }

    initThemeSystem() {
        const themeToggle = document.getElementById('themeToggle');
        if (!themeToggle) return;
        
        const toggleTheme = () => {
            this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
            this.setTheme(this.currentTheme);
            localStorage.setItem('portfolio-theme', this.currentTheme);
        };

        const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
        this.setTheme(savedTheme);

        themeToggle.addEventListener('click', toggleTheme);

        themeToggle.addEventListener('touchend', (e) => {
            e.preventDefault();
            toggleTheme();
        });
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            icon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    initMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        const toggleMenu = () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        };

        if (hamburger && navLinks) {
            hamburger.addEventListener('click', toggleMenu);

            hamburger.addEventListener('touchend', (e) => {
                e.preventDefault();
                toggleMenu();
            });

            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => this.closeMobileMenu());
                link.addEventListener('touchend', () => this.closeMobileMenu());
            });
        }
    }

    initCustomCursor() {
        const cursor = document.getElementById('cursor');
        if (!cursor) return;

        if ('ontouchstart' in window || navigator.maxTouchPoints) {
            cursor.style.display = 'none';
            return;
        }

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        document.addEventListener('mousedown', () => {
            cursor.classList.add('click');
        });

        document.addEventListener('mouseup', () => {
            cursor.classList.remove('click');
        });

        const interactiveElements = document.querySelectorAll('a, button, .portfolio-item, .magnetic');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });
        });
    }

    initMagneticButtons() {
        const magneticElements = document.querySelectorAll('.magnetic');
        
        if ('ontouchstart' in window || navigator.maxTouchPoints) {
            return;
        }
        
        magneticElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                element.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translate(0, 0)';
            });
        });
    }

    initScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const winHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset;
            const scrollPercent = scrollTop / (docHeight - winHeight);
            const progress = Math.min(100, scrollPercent * 100);
            
            progressBar.style.width = progress + '%';
        });
    }

    // Animations
    initCounterAnimation() {
        const counters = document.querySelectorAll('.stat-number');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });

        counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(element) {
        const target = parseInt(element.dataset.count);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 16);
    }

    initSkillBars() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillItem = entry.target;
                    const skillLevel = skillItem.dataset.skill;
                    const progressBar = skillItem.querySelector('.skill-progress');
                    
                    if (progressBar) {
                        setTimeout(() => {
                            progressBar.style.width = `${skillLevel}%`;
                        }, 500);
                    }
                    observer.unobserve(skillItem);
                }
            });
        });

        skillItems.forEach(item => observer.observe(item));
    }

    initScrollAnimations() {
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        reveals.forEach(reveal => observer.observe(reveal));
    }

    async downloadCV() {
        try {
            const link = document.createElement('a');
            link.href = '/assets/nati.pdf';
            link.download = 'nati-cv.pdf';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            this.showNotification('CV download started!', 'success');
        } catch (error) {
            console.error('Error downloading CV:', error);
            this.showNotification('Error downloading CV', 'error');
        }
    }

    showNotification(message, type = 'success') {
        document.querySelectorAll('.notification').forEach(notification => notification.remove());

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            info: 'info-circle',
            warning: 'exclamation-triangle'
        };

        notification.innerHTML = `
            <i class="fas fa-${icons[type] || 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        document.body.appendChild(notification);

        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });

        notification.querySelector('.notification-close').addEventListener('touchend', (e) => {
            e.preventDefault();
            notification.remove();
        });
        
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }
}

// Initialize portfolio
let portfolio;

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded - initializing portfolio');
    portfolio = new ProfessionalPortfolio();
    window.portfolio = portfolio;
});

// Add ripple animation to CSS
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    @keyframes ripple {
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
    
    .touch-active {
        transform: scale(0.95) !important;
        transition: transform 0.1s ease !important;
    }
    
    /* Improve touch targets for mobile */
    @media (max-width: 768px) {
        .btn, .magnetic, .filter-btn, .cv-tab {
            min-height: 44px;
            min-width: 44px;
        }
        
        .portfolio-link {
            padding: 12px 20px !important;
            min-height: 44px;
        }
        
        .social-link {
            width: 44px;
            height: 44px;
        }
        
        /* Ensure buttons are properly styled */
        .hero-btns .btn {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
        }
    }
    
    /* Debug styles */
    .btn-debug {
        border: 2px solid red !important;
    }
`;
document.head.appendChild(rippleStyles);
