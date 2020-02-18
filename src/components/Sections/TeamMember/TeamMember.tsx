import React from 'react';
import { TeamMemberModel } from "../../../models/teammember.model";

function TeamMember(props): React.ReactElement {

    const teamMember: TeamMemberModel = props.teamMember;

    return (
        <figure>
            <img src={`${process.env.PUBLIC_URL}/people/${teamMember.image}`} />
                <figcaption>
                    <em>{teamMember.name} ({teamMember.classYear})</em> {teamMember.description}
                </figcaption>
        </figure>
    );
}

export default TeamMember;