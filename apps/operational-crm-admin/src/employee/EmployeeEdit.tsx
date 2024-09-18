import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TeamTitle } from "../team/TeamTitle";

export const EmployeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="contactInfo" source="contactInfo" />
        <TextInput label="name" source="name" />
        <TextInput label="role" source="role" />
        <ReferenceInput source="team.id" reference="Team" label="team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
