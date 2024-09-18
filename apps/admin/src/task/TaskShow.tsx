import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";

export const TaskShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="assignedEmployee" source="assignedEmployee" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="progress" source="progress" />
        <ReferenceField label="project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <ReferenceField label="team" source="team.id" reference="Team">
          <TextField source={TEAM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="teamLeader" source="teamLeader" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
