import CircleIcon from "@mui/icons-material/Circle";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { PlanContext } from "../context";
import { PlanContextProps, Subject as SubjectProps } from "../types/types";
import { ModeSelect } from "./ModeSelect";
import { StatusRadioGroup } from "./StatusRadioGroup";

export const Subject = ({ subject }: { subject: SubjectProps }) => {
  const { contextPlan } = useContext<PlanContextProps>(PlanContext);
  const { subjects } = contextPlan;
  const contextSubject = subjects[subject.id as keyof typeof subjects];

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card
        variant="outlined"
        sx={{
          borderRadius: 0,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <CardContent
          sx={{
            p: 0,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography component="h4" variant="h6">
            {subject.name}
          </Typography>
          <CircleIcon
            sx={{
              fontSize: 24,
              ml: 1,
              color: contextSubject.status.color,
            }}
          />
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 2,
            p: 0,
            width: "100%",
          }}
        >
          <StatusRadioGroup subject={subject} />
          <ModeSelect subject={subject} />
        </CardActions>
      </Card>
    </Grid>
  );
};
