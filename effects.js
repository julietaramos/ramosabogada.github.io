document.addEventListener("DOMContentLoaded", function () {
    // Función para animar los textos de la presentación
    function animateText(selector, delay) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            element.style.opacity = 0;
            element.style.transform = "translateY(20px)";
            element.style.transition = "opacity 1s ease-out, transform 1s ease-out";
            
            setTimeout(() => {
                element.style.opacity = 1;
                element.style.transform = "translateY(0)";
            }, index * delay);
        });
    }

    animateText(".presentation h1, .presentation p", 600);

    // Función para animar la sección de servicios al hacer scroll
    const servicesSection = document.getElementById("servicesInfo");

    const observerServices = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                servicesSection.classList.add("visible", "animate__animated", "animate__backInLeft");
            }
        });
    }, { threshold: 0.5 });

    observerServices.observe(servicesSection);

    // Función para animar el formulario de contacto al hacer scroll
    const contactForm = document.getElementById("constactInfo");

    const observerContact = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactForm.classList.add("visible", "animate__animated", "animate__backInUp"); // Cambié el efecto para que sea desde abajo
            }
        });
    }, { threshold: 0.5 });

    observerContact.observe(contactForm);

    // Función para animar la sección "About" al hacer scroll
    const aboutSection = document.getElementById("aboutInfo");

    const observerAbout = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add("visible", "animate__animated", "animate__backInRight"); // Animación desde la derecha
            }
        });
    }, { threshold: 0.5 });

    observerAbout.observe(aboutSection);
});