/* ------------------ SLIDESHOW (Manual) ------------------ */
let slideIndex = 1;

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    if (slides.length === 0) return;

    // Loop slide index agar tetap valid
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    // Sembunyikan semua slide
    Array.from(slides).forEach(slide => {
        slide.style.display = "none";
        slide.style.opacity = "0";
        slide.style.transition = "opacity 0.5s ease";
    });

    // Tampilkan slide aktif
    const active = slides[slideIndex - 1];
    active.style.display = "block";
    setTimeout(() => (active.style.opacity = "1"), 50);
}

function plusSlides(n) {
    showSlide(slideIndex += n);
}

// Jalankan saat dokumen siap
document.addEventListener("DOMContentLoaded", () => {
    showSlide(slideIndex);

    /* ------------------ TRANSISI SECTION ------------------ */
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll("nav ul li a");
    let activeSection = document.getElementById("tentang");

    // Pastikan semua section tersembunyi di awal
    sections.forEach(sec => {
        sec.classList.add("hidden");
        sec.style.display = "none";
    });

    // Tampilkan section awal
    activeSection.classList.remove("hidden");
    activeSection.style.display = "block";
    activeSection.classList.add("active");

    function tampilkanSection(id) {
        if (activeSection.id === id) return;

        const targetSection = document.getElementById(id);
        if (!targetSection) return;

        // Sembunyikan section aktif sekarang
        activeSection.classList.remove("active");
        activeSection.style.opacity = "0";
        activeSection.style.transition = "opacity 0.4s ease";

        setTimeout(() => {
            activeSection.style.display = "none";

            // Tampilkan target section dengan animasi halus
            targetSection.style.display = "block";
            targetSection.style.opacity = "0";
            targetSection.classList.add("active");
            setTimeout(() => (targetSection.style.opacity = "1"), 50);

            activeSection = targetSection;
        }, 400);
    }

    // Navigasi via klik menu
    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            tampilkanSection(targetId);
        });
    });

    /* ------------------ RESPONSIVE NAV TOGGLE (Optional) ------------------ */
    const nav = document.querySelector("nav ul");
    const burger = document.querySelector(".menu-toggle");

    if (burger) {
        burger.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    }
});
