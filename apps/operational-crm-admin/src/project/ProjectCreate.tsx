import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TeamTitle } from "../team/TeamTitle";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="team.id" reference="Team" label="team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
