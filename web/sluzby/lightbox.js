// Lightbox functionality for service pages
let currentImageIndex = 0;
let currentImages = [];

function openLightbox(clickedImg) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-image');
    
    // Get all gallery images
    currentImages = Array.from(document.querySelectorAll('.service-gallery-item img'));
    currentImageIndex = currentImages.indexOf(clickedImg);
    
    lightboxImg.src = clickedImg.src;
    lightboxImg.alt = clickedImg.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function nextImage() {
    if (currentImageIndex < currentImages.length - 1) {
        currentImageIndex++;
        const lightboxImg = document.getElementById('lightbox-image');
        const nextImg = currentImages[currentImageIndex];
        lightboxImg.src = nextImg.src;
        lightboxImg.alt = nextImg.alt;
    }
}

function previousImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        const lightboxImg = document.getElementById('lightbox-image');
        const prevImg = currentImages[currentImageIndex];
        lightboxImg.src = prevImg.src;
        lightboxImg.alt = prevImg.alt;
    }
}

// Initialize lightbox event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Close lightbox on background click
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === this) {
                closeLightbox();
            }
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const lightbox = document.getElementById('lightbox');
        if (lightbox && lightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') previousImage();
        }
    });
});