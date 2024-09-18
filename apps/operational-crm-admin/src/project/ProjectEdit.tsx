import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TeamTitle } from "../team/TeamTitle";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="team.id" reference="Team" label="team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
