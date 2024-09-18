import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProjectTitle } from "../project/ProjectTitle";
import { TeamTitle } from "../team/TeamTitle";

export const TaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="assignedEmployee" source="assignedEmployee" />
        <NumberInput label="progress" source="progress" />
        <ReferenceInput source="project.id" reference="Project" label="project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
        <TextInput label="status" source="status" />
        <ReferenceInput source="team.id" reference="Team" label="team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
        <TextInput label="teamLeader" source="teamLeader" />
      </SimpleForm>
    </Create>
  );
};
