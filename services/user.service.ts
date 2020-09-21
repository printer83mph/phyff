import { TeamMemberModel } from '../models/teammember.model';
import TeamMembers from '../data/teammembers';

import { SubmissionStatusModel } from '../models/submissionstatus.model';
import SubmissionStatus from '../data/submissionstatus';

export function getTeamMembers(): TeamMemberModel[] {
  return TeamMembers.teamMembers;
}

export function getSubmissionStatus(): SubmissionStatusModel {
  return SubmissionStatus;
}
