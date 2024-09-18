import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TeamTitle } from "../team/TeamTitle";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="contactInfo" source="contactInfo" />
        <TextInput label="name" source="name" />
        <TextInput label="role" source="role" />
        <ReferenceInput source="team.id" reference="Team" label="team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
