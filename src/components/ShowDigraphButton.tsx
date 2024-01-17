import PolylineIcon from "@mui/icons-material/Polyline";
import { Button, Typography } from "@mui/material";
import { useDigraph } from "../hooks";
import { renderSVG } from "../services";
import { composeSVGObjectURL } from "../utils";

const continuation = (svg: SVGElement) => {
  const url = composeSVGObjectURL(svg);
  const newWindow =
    open(url) ??
    (() => {
      throw new Error("Failed to open resource");
    })();
  newWindow!.onload = () => URL.revokeObjectURL(url);
};

export const ShowDigraphButton = () => {
  const { composeDigraph } = useDigraph();

  const handleClickShowDigraph = () => {
    const digraph = composeDigraph();
    renderSVG(digraph, continuation);
  };

  return (
    <Button variant="outlined" onClick={handleClickShowDigraph}>
      <PolylineIcon sx={{ mr: 1, fontSize: 22 }} />
      <Typography>Ver Digrafo</Typography>
    </Button>
  );
};
