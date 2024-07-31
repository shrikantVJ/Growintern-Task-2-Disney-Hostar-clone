
const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach((card) => {
        const video = card.querySelector('video');
        card.addEventListener('mouseover', () => {
            video.play();
        });
        card.addEventListener('mouseleave', () => {
            video.pause();
        });
    });
