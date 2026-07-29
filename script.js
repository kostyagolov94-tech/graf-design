document.addEventListener("DOMContentLoaded", () => {

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.8s ease";
    observer.observe(card);
});

const button = document.querySelector(".btn");

button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.08)";
});

button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
});

});
