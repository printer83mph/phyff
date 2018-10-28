var img;

window.onload = function() {

    img = document.getElementById("top");

    window.addEventListener("scroll", function() {
        var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        if (scrollTop === 0) {
            img.classList.remove("smaller");
        } else {
            img.classList.add("smaller");
        }
    });

}