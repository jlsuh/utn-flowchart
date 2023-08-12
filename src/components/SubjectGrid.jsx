import { Grid } from "@mui/material";
import { Subject } from ".";

export const SubjectGrid = ({ levelSubjects }) => {
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
