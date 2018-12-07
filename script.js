var backUp;

window.onload = function() {
    backUp = document.getElementById("back-up");
    document.addEventListener("scroll", function() {
        if (window.scrollY > window.innerHeight) {
            backUp.classList.add("floating-back-up");
        } else {
            backUp.classList.remove("floating-back-up");
        }
    });
}