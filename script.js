
// Adding interactive functionalities and Bootstrap enhancements
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página de PepsiCo cargada');

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Hover effect for product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.backgroundColor = '#ff5722'; // Naranja
            card.style.color = '#fff'; // Blanco
        });
        card.addEventListener('mouseout', () => {
            card.style.backgroundColor = '#ffeb3b'; // Amarillo/Naranja brillante
            card.style.color = '#000'; // Negro
        });
    });
});
