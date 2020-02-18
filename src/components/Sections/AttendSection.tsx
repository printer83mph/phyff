import React from 'react';

function AttendSection(): React.ReactElement {
    return (
        <section className="section attend">
            <div className="minus" id="attend"></div>
            <article>
                <h1> ATTEND THE FEST </h1>
                <a className="button" href="https://forms.gle/PZv6jYAz3STYUW3a6" target="_blank"> Sign-up </a>
                <div className="attend-grid">
                    <div className="info">
                        <h2> WHO? </h2>
                        <p> You! The Fest is free and open to all high-school students. Whether you make films or just
                            like watching them we'd love to see you at the Fest.</p>
                        <h2> WHAT? </h2>
                        <p> The Fest features a keynote speaker, workshops with local professionals, and
                            screenings/awards for the best submissions! </p>
                        <h2> WHERE? </h2>
                        <p> The Fest is hosted on the campus of
                            <a href="https://goo.gl/maps/6ktWFaRjn5dEVfN37" target="_blank"> Germantown Friends School</a>
                            , in the Sharpless building.
                        </p>
                        <h2> WHEN? </h2>
                        <p> The Fest will take place on <b>Saturday, February 22nd, 2020.</b></p>
                        <h2> WHY? </h2>
                        <p>
                            The Fest is a great opportunity to make connections or just chat with local filmmakers and
                            similarly passionate students. You might also have a chance to show off your film on the
                            big-screen!
                        </p>
                    </div>
                    <div className="workshop-list">
                        <h1> 1:15 WORKSHOPS </h1>
                        <ul>
                            <li>
                                <p><b> Style & Substance - documentary </b> <br></br> with Gage Johnston </p>
                            </li>
                            <li>
                                <p><b> How to be a Student Entrepreneur in the Film Industry </b> <br></br> with Alex Favin </p>
                            </li>
                            <li>
                                <p><b> Essentials of Post Production Work Flow </b> <br></br> with Paul Bastin </p>
                            </li>
                            <li>
                                <p><b> Scene Analysis 101 </b> <br></br> with Jacob Mazer </p>
                            </li>
                            <li>
                                <p><b> Producing Television for Broadcast TV! </b> <br></br> with Victor C. Reyes </p>
                            </li>
                        </ul>
                        <h1> 2:15 WORKSHOPS </h1>
                        <ul>
                            <li>
                                <p><b> Screenwriting 101 </b> <br></br> with Kathy Van Cleve </p>
                            </li>
                            <li>
                                <p><b> Lighting Tips for Student Filmmakers </b> <br></br> with Emory Van Cleve </p>
                            </li>
                            <li>
                                <p><b> Can I Use This YouTube Video In My Documentary? </b> <br></br> with Frauke Levin </p>
                            </li>
                            <li>
                                <p><b> Making a Feature Film as a High Schooler: It's Possible - Here's How </b> <br></br> with Caden Hollander </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default AttendSection;