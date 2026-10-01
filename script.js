/* =========================================
   BRASA BURGER — JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       ANO AUTOMÁTICO DO FOOTER
       ========================================= */

    const footerText = document.querySelector(".footer p");

    if (footerText) {
        footerText.textContent =
            `© ${new Date().getFullYear()} Brasa Burger. Todos os direitos reservados.`;
    }


    /* =========================================
       HEADER AO ROLAR A PÁGINA
       ========================================= */

    const header = document.querySelector(".header");

    function updateHeader() {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /* =========================================
       SCROLL SUAVE
       ========================================= */

    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (targetId === "#") {
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


    /* =========================================
       ANIMAÇÕES AO ENTRAR NA TELA
       ========================================= */

    const animatedElements = document.querySelectorAll(
        ".feature, .burger-card, .about-image, .about-content, .contact-item"
    );

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    animatedElements.forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });


    /* =========================================
       EFEITO PARALLAX LEVE NO HERO
       ========================================= */

    const hero = document.querySelector(".hero");

    if (hero && window.innerWidth > 768) {

        window.addEventListener("scroll", () => {

            const scrollPosition = window.scrollY;

            if (scrollPosition < 800) {

                hero.style.backgroundPosition =
                    `center calc(50% + ${scrollPosition * 0.15}px)`;

            }

        });

    }


    /* =========================================
       BOTÕES DE PEDIDO
       ========================================= */

    const orderButtons = document.querySelectorAll(
        'a[href*="wa.me"]'
    );

    orderButtons.forEach(button => {

        button.addEventListener("click", () => {

            button.classList.add("clicked");

            setTimeout(() => {
                button.classList.remove("clicked");
            }, 400);

        });

    });

});
