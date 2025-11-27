// JavaScript para funcionalidades do site
document.addEventListener('DOMContentLoaded', function() {
    // Menu responsivo
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link (em dispositivos móveis)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });
    
    // Header com efeito de scroll
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 15, 30, 0.98)';
            header.style.backdropFilter = 'blur(15px)';
            header.style.boxShadow = '0 4px 25px rgba(0, 0, 0, 0.4)';
        } else {
            header.style.background = 'rgba(10, 15, 30, 0.95)';
            header.style.backdropFilter = 'blur(15px)';
            header.style.boxShadow = '0 4px 25px rgba(0, 0, 0, 0.4)';
        }
        
        // Efeito de hide/show no scroll
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = window.scrollY;
    });
    
    // Animação de entrada das seções
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animação para cards de projetos
                if (entry.target.id === 'projetos') {
                    const projetoCards = entry.target.querySelectorAll('.projeto-card');
                    projetoCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 200);
                    });
                }
                
                // Animação para habilidades
                if (entry.target.id === 'habilidades') {
                    const habilidadeTags = entry.target.querySelectorAll('.habilidade-tag');
                    habilidadeTags.forEach((tag, index) => {
                        setTimeout(() => {
                            tag.style.opacity = '1';
                            tag.style.transform = 'scale(1)';
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Aplicar animação às seções
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
    
    // Preparar animação dos cards de projetos
    const projetoCards = document.querySelectorAll('.projeto-card');// JavaScript para funcionalidades do site
    document.addEventListener('DOMContentLoaded', function() {
        // Menu responsivo
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (menuToggle) {
            menuToggle.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                menuToggle.classList.toggle('active');
            });
        }
        
        // Fechar menu ao clicar em um link (em dispositivos móveis)
        const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });
        
        // Header com efeito de scroll
        const header = document.querySelector('header');
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(10, 15, 30, 0.98)';
                header.style.backdropFilter = 'blur(15px)';
                header.style.boxShadow = '0 4px 25px rgba(0, 0, 0, 0.4)';
            } else {
                header.style.background = 'rgba(10, 15, 30, 0.95)';
                header.style.backdropFilter = 'blur(15px)';
                header.style.boxShadow = '0 4px 25px rgba(0, 0, 0, 0.4)';
            }
            
            // Efeito de hide/show no scroll
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollY = window.scrollY;
        });
        
        // Animação de entrada das seções
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Animação para cards de projetos
                    if (entry.target.id === 'projetos') {
                        const projetoCards = entry.target.querySelectorAll('.projeto-card');
                        projetoCards.forEach((card, index) => {
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            }, index * 200);
                        });
                    }
                    
                    // Animação para habilidades
                    if (entry.target.id === 'habilidades') {
                        const habilidadeTags = entry.target.querySelectorAll('.habilidade-tag');
                        habilidadeTags.forEach((tag, index) => {
                            setTimeout(() => {
                                tag.style.opacity = '1';
                                tag.style.transform = 'scale(1)';
                            }, index * 100);
                        });
                    }
                }
            });
        }, observerOptions);
        
        // Aplicar animação às seções
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(section);
        });
        
        // Preparar animação dos cards de projetos
        const projetoCards = document.querySelectorAll('.projeto-card');
        projetoCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        // Preparar animação das tags de habilidades
        const habilidadeTags = document.querySelectorAll('.habilidade-tag');
        habilidadeTags.forEach(tag => {
            tag.style.opacity = '0';
            tag.style.transform = 'scale(0.8)';
            tag.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        });
        
        // Formulário de contato
        const formulario = document.querySelector('.formulario');
        if (formulario) {
            formulario.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Simulação de envio
                const button = this.querySelector('button[type="submit"]');
                const originalText = button.textContent;
                const originalBg = button.style.background;
                
                button.textContent = 'Enviando...';
                button.disabled = true;
                button.style.background = 'linear-gradient(135deg, #7c3aed, #6d28d9)';
                
                setTimeout(() => {
                    button.textContent = 'Mensagem Enviada! ✓';
                    button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                    
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.disabled = false;
                        button.style.background = originalBg;
                        formulario.reset();
                    }, 3000);
                }, 2000);
            });
        }
        
        // Efeito de digitação no título
        const titulo = document.querySelector('#inicio h1');
        if (titulo) {
            const textoOriginal = titulo.textContent;
            titulo.textContent = '';
            let i = 0;
            
            function typeWriter() {
                if (i < textoOriginal.length) {
                    titulo.textContent += textoOriginal.charAt(i);
                    i++;
                    setTimeout(typeWriter, 80);
                } else {
                    // Adicionar cursor piscante após terminar
                    titulo.style.borderRight = '2px solid #8b5cf6';
                    setInterval(() => {
                        titulo.style.borderRightColor = titulo.style.borderRightColor === 'transparent' ? '#8b5cf6' : 'transparent';
                    }, 500);
                }
            }
            
            // Iniciar efeito após um breve delay
            setTimeout(typeWriter, 1000);
        }
        
        // Efeito de partículas no background (simples)
        function createParticles() {
            const inicioSection = document.getElementById('inicio');
            if (!inicioSection) return;
            
            for (let i = 0; i < 15; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = Math.random() * 4 + 2 + 'px';
                particle.style.height = particle.style.width;
                particle.style.background = 'rgba(139, 92, 246, 0.3)';
                particle.style.borderRadius = '50%';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.pointerEvents = 'none';
                particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
                
                // Adicionar animação flutuante
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes float {
                        0%, 100% { transform: translate(0, 0) rotate(0deg); }
                        25% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) rotate(90deg); }
                        50% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) rotate(180deg); }
                        75% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) rotate(270deg); }
                    }
                `;
                document.head.appendChild(style);
                
                inicioSection.appendChild(particle);
            }
        }
        
        // Contador de visitas (simulado)
        let visitas = localStorage.getItem('visitas') || 0;
        visitas = parseInt(visitas) + 1;
        localStorage.setItem('visitas', visitas);
        
        console.log(`👋 Bem-vindo! Esta é sua visita número: ${visitas}`);
        
        // Iniciar partículas
        createParticles();
        
        // Smooth scroll para links internos
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
        
        // Efeito de hover nos cards melhorado
        projetoCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(-10px) scale(1)';
            });
        });
        
        // Loading inicial
        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });
    });
    
    // Adicionar efeito de parallax simples
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('#inicio');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    projetoCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Preparar animação das tags de habilidades
    const habilidadeTags = document.querySelectorAll('.habilidade-tag');
    habilidadeTags.forEach(tag => {
        tag.style.opacity = '0';
        tag.style.transform = 'scale(0.8)';
        tag.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });
    
    // Formulário de contato
    const formulario = document.querySelector('.formulario');
    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio
            const button = this.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            const originalBg = button.style.background;
            
            button.textContent = 'Enviando...';
            button.disabled = true;
            button.style.background = 'linear-gradient(135deg, #7c3aed, #6d28d9)';
            
            setTimeout(() => {
                button.textContent = 'Mensagem Enviada! ✓';
                button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                    button.style.background = originalBg;
                    formulario.reset();
                }, 3000);
            }, 2000);
        });
    }
    
    // Efeito de digitação no título
    const titulo = document.querySelector('#inicio h1');
    if (titulo) {
        const textoOriginal = titulo.textContent;
        titulo.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < textoOriginal.length) {
                titulo.textContent += textoOriginal.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            } else {
                // Adicionar cursor piscante após terminar
                titulo.style.borderRight = '2px solid #8b5cf6';
                setInterval(() => {
                    titulo.style.borderRightColor = titulo.style.borderRightColor === 'transparent' ? '#8b5cf6' : 'transparent';
                }, 500);
            }
        }
        
        // Iniciar efeito após um breve delay
        setTimeout(typeWriter, 1000);
    }
    
    // Efeito de partículas no background (simples)
    function createParticles() {
        const inicioSection = document.getElementById('inicio');
        if (!inicioSection) return;
        
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 4 + 2 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = 'rgba(139, 92, 246, 0.3)';
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.pointerEvents = 'none';
            particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
            
            // Adicionar animação flutuante
            const style = document.createElement('style');
            style.textContent = `
                @keyframes float {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    25% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) rotate(90deg); }
                    50% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) rotate(180deg); }
                    75% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) rotate(270deg); }
                }
            `;
            document.head.appendChild(style);
            
            inicioSection.appendChild(particle);
        }
    }
    
    // Contador de visitas (simulado)
    let visitas = localStorage.getItem('visitas') || 0;
    visitas = parseInt(visitas) + 1;
    localStorage.setItem('visitas', visitas);
    
    console.log(`👋 Bem-vindo! Esta é sua visita número: ${visitas}`);
    
    // Iniciar partículas
    createParticles();
    
    // Smooth scroll para links internos
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
    
    // Efeito de hover nos cards melhorado
    projetoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-10px) scale(1)';
        });
    });
    
    // Loading inicial
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
});

// Adicionar efeito de parallax simples
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('#inicio');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});