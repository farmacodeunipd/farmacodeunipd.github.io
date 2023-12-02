menuIsOpen = false;
const m = document.getElementById("mobile");
const g = document.getElementById("glossario-main");
const b = document.getElementById("back-to-top");
const bg = document.getElementById("back-to-top-glossario");

const k = document.getElementsByClassName("keyword");
const s = document.getElementById("search-input");

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

function backToTopGlossario() {
    g.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

g.addEventListener("scroll", () => {
    if (g.scrollTop > 300) {
        bg.classList.remove("invisible");
        bg.classList.remove("opacity-0");
        bg.classList.add("visible");
        bg.classList.add("opacity-100");
    } else {
        bg.classList.remove("visible");
        bg.classList.remove("opacity-100");
        bg.classList.add("invisible");
        bg.classList.add("opacity-0");
    }
});

s.addEventListener("keyup", () => {
    let p = s.value.toLowerCase();
    let l = p.length;
    var i = 0;
    for (; i < k.length; i++) {
        let key = k[i].innerHTML;
        if (!p.trim()) {
            return;
        }
        key = key.toLowerCase();
        key = key.trim();
        key = key.substring(0, l);
        if (key == p) {
            k[i].scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            break;
        }
    }
});
