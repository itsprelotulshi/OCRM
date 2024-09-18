import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";

export const TaskList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Tasks"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
