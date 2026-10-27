console.log("Portfolio berhasil dijalankan!");


// Tahun footer otomatis
const footer = document.querySelector("footer p");
const year = new Date().getFullYear();

footer.innerHTML =
    `© ${year} Rina Adella Pratiwi. All Rights Reserved.`;


// Menu mobile
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open);
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// Gambar yang belum diganti: sembunyikan ikon rusak, tampilkan placeholder
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("error", () => {
        img.style.display = "none";
        img.parentElement.classList.add("no-image");
    });
});
