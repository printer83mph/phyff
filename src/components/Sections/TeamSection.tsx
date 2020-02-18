import React, {useEffect, useState} from 'react';
import TeamMember from './TeamMember/TeamMember';
import { getTeamMembers } from "../../services/user.service";
import { TeamMemberModel } from '../../models/teammember.model'

function TeamSection(): React.ReactElement {
    const [ teamMembers, setTeamMembers ] = useState<TeamMemberModel[]>([]);

    useEffect(() => {
        setTeamMembers(getTeamMembers())
    }, []);

    return (
        <section className="section people">
            <div className="minus" id="people"></div>
            <article>
                <h1> THE PHYFF TEAM </h1>
                <div className="peoplediv">
                    {
                        teamMembers ?
                            teamMembers.map((teamMember, i) => <TeamMember teamMember={teamMember} key={i}/>) :
                            <h4>No team members.</h4>
                    }
                </div>
            </article>
        </section>
    );
}

export default  TeamSection;