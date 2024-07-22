document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Deja de observar una vez que el elemento es visible
            }
        });
    }, { threshold: 0.1 }); // Ajusta el umbral según tus necesidades

    elements.forEach(element => {
        observer.observe(element);
    });
});