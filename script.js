document.addEventListener("DOMContentLoaded", function () {
    const heart = document.querySelector(".heart");
    const arrow = document.querySelector(".arrow");
    const paper = document.querySelector(".paper");
    const letter = document.querySelector(".paper .letter");

    function shootArrow() {
        arrow.classList.add("animate-arrow");
        
        setTimeout(() => {
            heart.classList.add("scale-heart");
        }, 1000);
        setTimeout(() => {
            paper.style.opacity = 1;
            paper.style.visibility = "visible";
        }, 2000);

        setTimeout(() => {
            letter.style.opacity = 1;
        }, 3000);

        heart.removeEventListener("click", shootArrow);
    }

    heart.addEventListener("click", shootArrow);
});