// ==================== Fade-in ====================
window.addEventListener('load', function() {
    const images = document.querySelectorAll('.fade-in');

    function fadeInImages() {
        images.forEach((img, index) => {
            const rect = img.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                // sekvencijalni delay: svaka slika malo kasni
                setTimeout(() => {
                    img.classList.add('visible');
                }, index * 200); // 0ms, 200ms, 400ms ...
            }
        });
    }

    fadeInImages(); // odmah kad se ucita
    window.addEventListener('scroll', fadeInImages); // i dok scrollaš
});

// ==================== Menu toggle ====================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("show"); // ovo se izvršava pri kliku
  });
}

    




    // ==================== Lightbox ====================
	
const gallimages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');

    if (gallimages.length > 0) {
        gallimages.forEach(img => {
            img.addEventListener('click', () => {
                lightbox.classList.remove('hidden');
                lightboxImg.src = img.src;
            });
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            lightbox.classList.add('hidden');
        });
    }
