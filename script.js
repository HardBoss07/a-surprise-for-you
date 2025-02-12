document.addEventListener("DOMContentLoaded", function () {
    const heart = document.querySelector(".heart");
    const arrow = document.querySelector(".arrow");

    function shootArrow() {
        arrow.classList.add("animate-arrow");
        heart.removeEventListener("click", shootArrow);
    }

    heart.addEventListener("click", shootArrow);
});