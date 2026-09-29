// ==============================
// Typing Animation
// ==============================

const roles = [
    "Full-Stack Developer",
    "C# Developer",
    "ASP.NET Core Developer",
    "EF Core Developer",
    "API Developer",
    "Database Designer",
    "SQL Server Developer",
    "HTML , CSS , JS Developer",
];

const typingElement = document.getElementById("typing-text");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 50 : 100
    );
}

typeEffect();


// ==============================
// Navbar Scroll Effect
// ==============================

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5,8,22,0.95)";

        navbar.style.boxShadow =
            "0 0 20px rgba(0,217,255,.15)";

    } else {

        navbar.style.background =
            "rgba(5,8,22,.6)";

        navbar.style.boxShadow = "none";
    }
});


// ==============================
// Scroll Reveal Animation
// ==============================

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .about-card, .contact-card, .stat-card"
);

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0)";
        }
    });
}

revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        "all .7s ease";
});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


// ==============================
// Mobile Menu
// ==============================

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");
});


// ==============================
// Mouse Glow Effect
// ==============================

const glow = document.createElement("div");

glow.classList.add("mouse-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";
});


// ==============================
// Active Navbar Links
// ==============================

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 400;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");
        }
    });
});


// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = this.getAttribute("href");
        if (target === "#") {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            return;
        }
        const section = document.querySelector(target);
        if (section) {
            e.preventDefault();
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Certificate Modal Handler
const modal = document.getElementById('certModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close-modal');

document.querySelectorAll('.certificate-card').forEach(card => {
    card.addEventListener('click', function() {
        const certSrc = this.getAttribute('data-cert')
            || (this.querySelector('img') || {}).src;
        if (certSrc) {
            modalImg.src = certSrc;
            modal.classList.add('open');
        }
    });
});

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
    });
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('open');
        }
    });
}

// For flip cards
const cards=document.querySelectorAll(".skill-card");

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        cards.forEach(c=>{

            if(c!==card){

                c.classList.remove("active");

            }

        });

        card.classList.toggle("active");

    });

});

// Play a brief arrival effect when the skills section first enters view.
const skillsSection = document.querySelector("#skills");
if (skillsSection && cards.length > 0 && "IntersectionObserver" in window) {
    const skillsObserver = new IntersectionObserver((entries, observer) => {
        if (!entries.some(entry => entry.isIntersecting)) return;

        cards.forEach((card, index) => {
            card.style.setProperty("--skill-arrival-delay", `${index * 90}ms`);
            card.classList.add("skill-arrival");
        });
        observer.disconnect();
    }, { threshold: 0.15 });

    skillsObserver.observe(skillsSection);
}

// For return to the top
const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    if (scrollPosition >= pageHeight - 150) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

// To hide background
const aboutsection = document.querySelector(".about");

window.addEventListener("scroll", () => {
    const rect = aboutsection.getBoundingClientRect();
    if (rect.bottom <= 0) {
        document.body.classList.add("hide-planet");
    } else {
        document.body.classList.remove("hide-planet");
    }
});

/* =========================================================
   TIMELINE SCROLL OBSERVER
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".training-item");

    if (timelineItems.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: "-45% 0px -45% 0px",
            threshold: 0
        };

        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("scroll-active");
                } else {
                    entry.target.classList.remove("scroll-active");
                }
            });
        }, observerOptions);

        timelineItems.forEach(item => timelineObserver.observe(item));
    }
});

window.addEventListener("scroll", () => {
    const timeline = document.querySelector(".training-timeline");
    if (!timeline) return;

    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const startPoint = windowHeight / 2;
    const totalHeight = rect.height;
    
    let currentScroll = startPoint - rect.top;
    
    let progressPercentage = (currentScroll / totalHeight) * 100;
    progressPercentage = Math.max(0, Math.min(100, progressPercentage));

    timeline.style.setProperty("--line-progress", `${progressPercentage}%`);
});




// =========================================================
// NEON PARTICLES BACKGROUND (Cyberpunk / Space Vibe)
// =========================================================

const canvas = document.getElementById('bg-particles');
if (canvas) {
    const ctx = canvas.getContext('2d');

    let particlesArray = [];
    let cometsArray = [];
    const numberOfParticles = 65; 
    let animationFrameId;

    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    setCanvasSize();

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            setCanvasSize();
            init();
        }, 200);
    });

    // 1. كلاس النجوم (Particles)
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 1;
            this.speedY = (Math.random() - 0.5) * 1;
            
            const isCyan = Math.random() > 0.3;
            this.baseColor = isCyan ? 'rgba(0, 217, 255, ' : 'rgba(255, 255, 255, ';
            this.opacity = Math.random() * 0.6 + 0.2;
            this.isCyan = isCyan;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.baseColor + this.opacity + ')';

            if (this.isCyan) {
                ctx.shadowBlur = 4;
                ctx.shadowColor = '#00d9ff';
            } else {
                ctx.shadowBlur = 0;
            }

            ctx.fill();
        }
    }

    // 2. كلاس المذنبات (Comets)
    class Comet {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * (canvas.height / 2);
            this.length = Math.random() * 150 + 100;
            this.speed = Math.random() * 8 + 5;
            this.size = Math.random() * 1.5 + 1;
            this.active = false;
        }

        draw() {
            if (!this.active) return;

            let gradient = ctx.createLinearGradient(
                this.x, this.y, 
                this.x - this.length, this.y - this.length
            );
            gradient.addColorStop(0, '#00d9ff');
            gradient.addColorStop(1, 'rgba(0, 217, 255, 0)');

            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = this.size;
            ctx.lineCap = 'round';
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x - this.length, this.y - this.length);
            ctx.stroke();
        }

        update() {
            if (this.active) {
                this.x += this.speed;
                this.y += this.speed;

                if (this.x > canvas.width || this.y > canvas.height) {
                    this.reset();
                }
            } else {
                // نسبة ظهور المذنب (تظهر كل عدة ثوانٍ بشكل عشوائي)
                if (Math.random() < 0.005) { 
                    this.active = true;
                }
            }
        }
    }

    function init() {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }

        cometsArray = [new Comet()];
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // رسم وتحريك النجوم
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        
        ctx.shadowBlur = 0;

        // رسم وتحريك المذنبات
        for (let i = 0; i < cometsArray.length; i++) {
            cometsArray[i].update();
            cometsArray[i].draw();
        }

        animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();
}


// For Projects Slider
const slider = document.getElementById('projectsSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const scrollAmount = 615;

function centerMiddleCard() {
    const cards = slider.querySelectorAll('.project-card');
    if (cards.length > 0) {
        const middleIndex = Math.floor(cards.length / 2);
        const middleCard = cards[middleIndex];
        
        const scrollPosition = middleCard.offsetLeft - (slider.clientWidth / 2) + (middleCard.clientWidth / 2);
        slider.scrollLeft = scrollPosition;
    }
}

window.addEventListener('load', centerMiddleCard);

nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

// For Education Slider
document.addEventListener('DOMContentLoaded', () => {

    // 1. ظهور كل كارت بشكل مستقل وحاد مع حركة الـ Scroll
    const cards = document.querySelectorAll('.education-content-left .edu-card');

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // الكارت الحالي فقط ياخد show لما تنزل عنده بالظبط
                entry.target.classList.add('show');
                // عدم تكرار الحركة بعد إتمامها
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,                 // يلزم ظهور 20% من الكارت نفسه
        rootMargin: "0px 0px -100px 0px" // الكارت مش هيتحرك غير لما تقرب منه بالسكرول لتحت
    });

    cards.forEach((card) => {
        cardObserver.observe(card);
    });


    // 2. التبديل التلقائي بين اللوجو وصورة الكلية كل 5 ثواني
    const logoImg = document.querySelector('.img-logo');
    const buildingImg = document.querySelector('.img-building');

    if (logoImg && buildingImg) {
        logoImg.classList.add('active');

        setInterval(() => {
            logoImg.classList.toggle('active');
            buildingImg.classList.toggle('active');
        }, 5000); 
    }

});
