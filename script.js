var backUp, topBtn;

window.onload = function() {
    backUp = document.getElementById("back-up");
    topBtn = document.getElementById("top");
    document.addEventListener("scroll", function() {
        if (window.scrollY > window.innerHeight) {
            backUp.classList.add("floating-back-up");
            topBtn.classList.add("small");
        } else {
            backUp.classList.remove("floating-back-up");
            if (window.scrollY > 45) {
                topBtn.classList.add("small");
            } else {
                topBtn.classList.remove("small");
            }
        }
    });
}