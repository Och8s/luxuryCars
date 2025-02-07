document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.image-container img');

    images.forEach(img => {
        const container = img.parentElement;
        const zoomInBtn = container.querySelector('.zoom-in');
        const zoomOutBtn = container.querySelector('.zoom-out');

        zoomInBtn.addEventListener("click", function () {
            img.style.transform = 'scale(1.2)';
        });

        zoomOutBtn.addEventListener("click", function () {
            img.style.transform = 'scale(1)';
        });
    });
});
