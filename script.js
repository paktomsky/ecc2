document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("show");
        }
    });
});
