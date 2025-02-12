document.addEventListener("DOMContentLoaded", function () {
    const heart = document.querySelector(".heart");
    const arrow = document.querySelector(".arrow");

    function shootArrow() {
        arrow.classList.add("animate-arrow");
        
        setTimeout(() => {
            heart.classList.add("scale-heart");
            arrow.classList.add("scale-arrow");
        }, 1000);

        heart.removeEventListener("click", shootArrow);
    }

    heart.addEventListener("click", shootArrow);
});