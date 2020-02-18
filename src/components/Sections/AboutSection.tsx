import React from 'react';

function AboutSection(): React.ReactElement {
    return (
        <section className="section learn">
            <div className="minus" id="learn"></div>
            <article>
                <h1> ABOUT PHYFF </h1>
                <div className="about-phyff">
                    <p> PHYFF is a student-run event dedicated to helping teenage creatives find their voice in a
                        rapidly expanding
                        community of young filmmakers. We seek to create an environment where our peers could have their
                        work
                        recognized without massive budgets or extensive training. We have received submissions from
                        Philadelphia
                        schools and ones across the world.</p>
                    <p> This festival is a great opportunity to show off work and get critiques, as well as to network
                        with peers
                        from the area and make connections. Filmmaking experts will judge and rank submitted films in
                        four categories:
                        narrative, documentary, experimental, and screenplay. At each festival, we offer several
                        workshops on a
                        variety of common and niche filmmaking focuses.</p>
                    <p>The Festival is open to high school students in the greater Philadelphia area and beyond with
                        free
                        participation for all students, and it includes an awards ceremony for the winning films. </p>
                </div>
                <h1> LAST YEAR'S FEST </h1>
                <h3> Check out our <a href="https://www.youtube.com/watch?v=tNEeq406aO0&feature=youtu.be"> highlight
                    reel! </a></h3>
                <div className="prev-winners">
                    <div className="narrative">
                        <h2>NARRATIVE</h2>
                        <p>1st <span>Have You Ever Been In Love?</span> Kaya Trefz</p>
                        <p>2nd <span>Welcomer</span> Sam Gualtieri & Jalen Ramseur-Williams</p>
                        <p>3rd <span>The Guitar</span> Brianna Quimby</p>
                    </div>
                    <div className="experimental">
                        <h2>EXPERIMENTAL</h2>
                        <p>1st <span>iRony</span> Radheya Jegatheva</p>
                        <p>2nd <span><a href="https://vimeo.com/265272751"
                                        target="_blank">Fictional Characters</a></span> Ivana Noa
                        </p>
                        <p>3rd <span>Journey</span> Radheya Jegatheva</p>
                    </div>
                    <div className="documentary">
                        <h2>DOCUMENTARY</h2>
                        <p>1st <span>Maya</span> Rajkishore Mohapatra</p>
                        <p>2nd <span><a href="https://www.youtube.com/watch?v=z-i9p6yv5o4" target="_blank">The Island of
                Music</a></span> Lily Annenberg</p>
                        <p>3rd <span>We Are Now</span> Carlos Escobar, Kimberly Gonzalez-Ramirez, Verite Igiraneza,
                            Yohannes Gezahegn,
                            Merry Hailegeorgies</p>
                    </div>
                    <div className="screenplay">
                        <h2>SCREENPLAY</h2>
                        <p>1st <span>Gone Fishing</span> Noah Eisenstein</p>
                        <p>2nd <span>Hearing Aid</span> Juliana Santamauro</p>
                        <p>3rd <span>Have You Ever Been In Love?</span> Kaya Trefz</p>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default AboutSection;