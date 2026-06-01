const navToggler = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
const overlay = document.querySelector(".overlay");

navToggler.addEventListener("click", () =>
{
    aside.classList.toggle("open");
    overlay.classList.toggle("show");
});

overlay.addEventListener("click", () =>
{
    aside.classList.remove("open");
    overlay.classList.remove("show");
});
document.querySelectorAll(".nav a").forEach(link =>
{
    link.addEventListener("click", () =>
    {
        aside.classList.remove("open");
        overlay.classList.remove("show");
    });
});