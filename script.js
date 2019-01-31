var backUp, topBtn;

window.onload = function () {
    backUp = document.getElementById("back-up");
    topBtn = document.getElementById("top");

    document.addEventListener("scroll", function () {
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

    var els = document.getElementsByClassName("expand-btn");

    for (let i = 0; i < els.length; i++) {
        els[i].addEventListener("click", function () {
            var text = this.nextElementSibling;
            text.style.maxHeight = (text.style.maxHeight ? null : text.scrollHeight + 10 + "px");
            text.classList.toggle("open");
        });
    }

}