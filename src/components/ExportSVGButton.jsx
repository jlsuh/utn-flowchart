import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Button, Typography } from "@mui/material";
import { useDigraph, useViz } from "../hooks";
import { composeSVGObjectURL } from "../utils";

const continuation = (svg) => {
  const url = composeSVGObjectURL(svg);
  const anchor = document.createElement("a");
  anchor.download = "digraph.svg";
  anchor.href = url;
  anchor.click();
  URL.revokeObjectURL(url);
};

export const ExportSVGButton = () => {
  const { renderSVG } = useViz();
  const { composeDigraph } = useDigraph();

  const handleClickExportSVG = () => {
    const digraph = composeDigraph();
    renderSVG(digraph, continuation);
  };

  return (
    <Button variant="contained" onClick={handleClickExportSVG}>
      <FileDownloadIcon sx={{ mr: 1, fontSize: 22 }} />
      <Typography>Exportar</Typography>
    </Button>
  );
};
