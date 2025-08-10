const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".progress-circle").forEach((circle) => {
        let percent = circle.getAttribute("data-percent");
        circle.style.setProperty("--percent", percent + "%");
    });
});
let lastScrollTop = 0;
const skillsSection = document.querySelector(".skills-section");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling Down - Hide Section
        skillsSection.classList.add("hidden");
    } else {
        // Scrolling Up - Show Section
        skillsSection.classList.remove("hidden");
    }
    lastScrollTop = scrollTop;
});
