document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.animate__animated');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const animation = card.dataset.animation;
                card.classList.add(animation);
                card.style.opacity = "1";
                observer.unobserve(card);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the card is visible
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});