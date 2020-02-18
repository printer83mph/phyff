import React from 'react';
import AboutSection from './AboutSection';
import AttendSection from './AttendSection';
import SubmitSection from './SubmitSection';
import TeamSection from './TeamSection';

function Sections(): React.ReactElement {

    function backToTop(e) {
        document.body.scrollIntoView(true);
    }

    return (
        <div>
            <a className="back-up" id="back-up" onClick={backToTop}></a>
            <SubmitSection />
            <AttendSection />
            <AboutSection />
            <TeamSection />
        </div>
    );
}

export default Sections;