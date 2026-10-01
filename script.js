// ==========================================
// BRASA BURGER - JAVASCRIPT
// ==========================================


// ==========================================
// ANO AUTOMÁTICO
// ==========================================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ==========================================
// HEADER AO ROLAR
// ==========================================

const header = document.getElementById("header");

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


// ==========================================
// MENU MOBILE
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {

    menuToggle.addEventListener("click", () => {

        menu.classList.toggle("active");

        if (menu.classList.contains("active")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }

    });


    // Fecha o menu quando clicar em algum link

    const menuLinks = menu.querySelectorAll("a");

    menuLinks.forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");

            menuToggle.textContent = "☰";

        });

    });

}


// ==========================================
// SCROLL SUAVE
// ==========================================

const internalLinks = document.querySelectorAll(
    'a[href^="#"]'
);

internalLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// ==========================================
// ANIMAÇÕES AO ENTRAR NA TELA
// ==========================================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {
    observer.observe(element);
});


// ==========================================
// EFEITO NOS BOTÕES
// ==========================================

const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.add("clicked");

        setTimeout(() => {
            button.classList.remove("clicked");
        }, 180);

    });

});


// ==========================================
// PARALLAX DO HERO
// ==========================================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (!hero) return;

    // Desativa o efeito em telas pequenas
    if (window.innerWidth <= 900) {
        hero.style.backgroundPosition = "center";
        return;
    }

    const scrollPosition = window.scrollY;

    hero.style.backgroundPosition =
        `center calc(50% + ${scrollPosition * 0.12}px)`;

});


// ==========================================
// FALLBACK PARA IMAGENS
// Se alguma imagem externa falhar,
// mantém um fundo escuro em vez de
// deixar um espaço quebrado.
// ==========================================

const images = document.querySelectorAll("img");

images.forEach(image => {

    image.addEventListener("error", () => {

        image.style.display = "none";

        if (image.parentElement) {
            image.parentElement.classList.add("image-error");
        }

    });

});
