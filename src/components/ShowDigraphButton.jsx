import PolylineIcon from "@mui/icons-material/Polyline";
import { Button, Typography } from "@mui/material";
import { useDigraph, useViz } from "../hooks";
import { composeSVGObjectURL } from "../utils";

const continuation = (svg) => {
  const url = composeSVGObjectURL(svg);
  const newWindow = open(url);
  newWindow.onload = () => URL.revokeObjectURL(url);
};

export const ShowDigraphButton = () => {
  const { renderSVG } = useViz();
  const { composeDigraph } = useDigraph();

  const handleClickShowDigraph = () => {
    const digraph = composeDigraph();
    renderSVG(digraph, continuation);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickShowDigraph}>
        <PolylineIcon sx={{ mr: 1, fontSize: 22 }} />
        <Typography>Ver Digrafo</Typography>
      </Button>
    </>
  );
};
