import React, {useEffect, useState} from 'react';
import { getSubmissionStatus } from "../../services/user.service";
import {SubmissionStatusModel} from "../../models/submissionstatus.model";

function SubmitSection(): React.ReactElement {
    const [ submissionStatus, setSubmissionStatus ] = useState<SubmissionStatusModel>();

    useEffect(() => {
        setSubmissionStatus(getSubmissionStatus());
    });

    function getSubmissionsOpen(): boolean {
        if (submissionStatus != null) {
            return submissionStatus.submissionsOpen;
        } else {
            return false;
        }
    }

    function guardSubmissionStatus(): SubmissionStatusModel {
        if (submissionStatus != null) {
            return submissionStatus
        } else {
            return {
                submissionsOpen: false,
                filmFreewayLink: "",
                submitLink: ""
            };
        }
    }

    return (
        <section className="section submit">
            <div className="minus" id="submit"></div>
            <article>
                <h1>{ getSubmissionsOpen() ? "SUBMIT TO PHYFF" : "SUBMISSIONS ARE CLOSED" }</h1>
                <a
                    href={getSubmissionsOpen() ? guardSubmissionStatus().submitLink : guardSubmissionStatus().filmFreewayLink}
                    target="_blank">{
                    getSubmissionsOpen() ? <p>Submit your film on <b> Film Freeway </b></p> : <p>Visit our <b> Film Freeway </b> page</p>
                    }
                </a>
                <div className="submit-list">
                    <ul>
                        <li> NARRATIVE</li>
                        <li> EXPERIMENTAL</li>
                        <li> DOCUMENTARY</li>
                        <li> SCREENPLAY</li>
                    </ul>
                    <div>
                        <p>
                            Submissions are open to high schoolers, 14 to 19 years of age. Only secondary roles (such as
                            talent) may be outside this range. Adults may provide assistance and advise in the
                            production of submissions, but their help must be minimal.
                        </p>
                        <p>
                            All music copyright, talent, and location releases must be submitted with each entry.
                        </p>
                        <p> Accurate and complete credits are required on-screen and on-file. Films should be at/under
                            12 minutes, and screenplays should be at most 15-20 pages long.
                        </p>
                    </div>
                </div>
                <h2> Thanks to all those who submitted! We can't wait to see you at the Festival!</h2>
            </article>
        </section>
    );
}

export default SubmitSection;