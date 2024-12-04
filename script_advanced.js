document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for navigation
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Contact form validation
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.");
        form.reset();
    });
});
