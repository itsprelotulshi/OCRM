import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EmployeeTitle } from "../employee/EmployeeTitle";
import { ProjectTitle } from "../project/ProjectTitle";
import { TeamLeaderTitle } from "../teamLeader/TeamLeaderTitle";

export const TeamCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="employees" reference="Employee">
          <SelectArrayInput
            optionText={EmployeeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput source="projects" reference="Project">
          <SelectArrayInput
            optionText={ProjectTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="teamLeader.id"
          reference="TeamLeader"
          label="teamLeader"
        >
          <SelectInput optionText={TeamLeaderTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
