(function () {

    window.onload = function () {
        var backUp = document.getElementById("back-up");
        var topBtn = document.getElementById("top");

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

        // ENABLE WHEN WE ADD THE WORKSHOP LIST BACK IN

        // var els = document.getElementById("workshop-list").childNodes;

        // for (let i = 0; i < els.length; i++) {
        //     els[i].addEventListener("click", function () {
        //         var text = this.childNodes[3];
        //         text.style.maxHeight = (text.style.maxHeight ? null : text.scrollHeight + 10 + "px");
        //         this.classList.toggle("open");
        //     });
        // }

    }
})();