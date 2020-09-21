import React from 'react';
import { TeamMemberModel } from '../../../models/teammember.model';

function TeamMember(props): React.ReactElement {
  const { teamMember } = props;

  return (
    <figure>
      <img src={`/media/people/${teamMember.image}`} alt={teamMember.name} />
      <figcaption>
        <em>{teamMember.name} ({teamMember.classYear})</em> {teamMember.description}
      </figcaption>
    </figure>
  );
}

export default TeamMember;
