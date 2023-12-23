import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Button, Typography } from "@mui/material";
import { useDigraph } from "../hooks";
import { renderSVG } from "../services";
import { composeSVGObjectURL } from "../utils";

const continuation = (svg: SVGElement) => {
  const url = composeSVGObjectURL(svg);
  const anchor = document.createElement("a");
  anchor.download = "digraph.svg";
  anchor.href = url;
  anchor.click();
  URL.revokeObjectURL(url);
};

export const ExportSVGButton = () => {
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
