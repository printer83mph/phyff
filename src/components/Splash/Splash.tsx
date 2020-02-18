import React, {useEffect, useState} from 'react';
import { getSubmissionStatus } from "../../services/user.service";
import {SubmissionStatusModel} from "../../models/submissionstatus.model";
import SponsorList from "./SponsorList/SponsorList"

function Splash(): React.ReactElement {
    const [ submissionStatus, setSubmissionStatus ] = useState<SubmissionStatusModel>();

    useEffect(() => {
        setSubmissionStatus(getSubmissionStatus());
    }, []);


    function handleSubmit(e) {
        document.getElementById('submit')!.scrollIntoView(true);
    }

    function handleAttend(e) {
        document.getElementById('attend')!.scrollIntoView(true);
    }

    function handleLearn(e) {
        document.getElementById('learn')!.scrollIntoView(true);
    }

    function handleTeam(e) {
        document.getElementById('people')!.scrollIntoView(true);
    }

    function getSubmissionsOpen(): boolean {
        if (submissionStatus != null) {
            return submissionStatus.submissionsOpen;
        } else {
            return false;
        }
    }

    return (
        <section className="splash" id="splash">
            <article>
                <a className="submitc" onClick={handleSubmit}>
                    <div></div>
                    <h1>SUBMIT</h1>
                    <h3>{ !getSubmissionsOpen() ? "SUBMISSIONS CLOSED!" : "" }</h3>
                </a>
                <a className="attendc" onClick={handleAttend}>
                    <div></div>
                    <h1>ATTEND</h1>
                </a>
                <a className="learnc" onClick={handleLearn}>
                    <div></div>
                    <h1>LEARN</h1>
                </a>
            </article>
            <footer className="footer">
                <SponsorList />
            </footer>
        </section>
    );
}

export default Splash;