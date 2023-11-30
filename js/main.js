menuIsOpen = false;
const m = document.getElementById("mobile");
const b = document.getElementById("back-to-top");

function menuToggle() {
    if (!menuIsOpen) {
        m.classList.remove("hidden");
        m.classList.add("block");
        menuIsOpen = !menuIsOpen;
    } else {
        m.classList.remove("block");
        m.classList.add("hidden");
        menuIsOpen = !menuIsOpen;
    }
}

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        b.classList.remove("invisible");
        b.classList.remove("opacity-0");
        b.classList.add("visible");
        b.classList.add("opacity-100");
    } else {
        b.classList.remove("visible");
        b.classList.remove("opacity-100");
        b.classList.add("invisible");
        b.classList.add("opacity-0");
    }
});
