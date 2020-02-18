import React from 'react';
import TopBar from '../../components/TopBar/TopBar';
import Splash from '../../components/Splash/Splash';
import Sections from '../../components/Sections/Sections';

function Home(): React.ReactElement {

    function onLoad(e) {
        var backUp = document.getElementById("back-up");
        var topBtn = document.getElementById("top");

        document.addEventListener("scroll", function () {
            if (window.scrollY > window.innerHeight) {
                if (backUp !== null) { backUp.classList.add("floating"); }
                if (topBtn !== null) { topBtn.classList.add("small"); }
            } else {
                if (backUp !== null) { backUp.classList.remove("floating"); }

                if (topBtn !== null) {
                    if (window.scrollY > 45) {
                        topBtn.classList.add("small");
                    } else {
                        topBtn.classList.remove("small");
                    }
                }
            }
        });
    }

    return (
        <div onLoad={onLoad}>
            <TopBar />
            <Splash />
            <Sections />
        </div>
    );
}

export default Home;