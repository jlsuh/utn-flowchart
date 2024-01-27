import { Grid } from "@mui/material";
import { Subject } from ".";
import { Subject as SubjectProps } from "../types/types";

export const SubjectGrid = ({
  levelSubjects,
}: {
  levelSubjects: ReadonlyArray<SubjectProps>;
}) => {
  return (
    <Grid
      container
      item
      sx={{
        display: "flex",
        flexWrap: "wrap",
        pt: 1.5,
      }}
    >
      {levelSubjects.map((subject) => (
        <Subject key={subject.id} subject={subject} />
      ))}
    </Grid>
  );
};
