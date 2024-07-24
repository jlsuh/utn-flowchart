import { useDigraph } from '@/hooks';
import { renderSVG } from '@/services';
import { composeSVGObjectURL } from '@/utils';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Button, Typography } from '@mui/material';

const continuation = (svg: SVGElement) => {
  const url = composeSVGObjectURL(svg);
  const anchor = document.createElement('a');
  anchor.download = 'digraph.svg';
  anchor.href = url;
  anchor.click();
  URL.revokeObjectURL(url);
};

function ExportSVGButton() {
  const { composeDigraph } = useDigraph();

  const handleClickExportSVG = () => {
    const digraph = composeDigraph();
    renderSVG(digraph, continuation);
  };

  return (
    <Button
      variant="contained"
      onClick={handleClickExportSVG}
      sx={{
        boxShadow: 'none',
      }}
    >
      <FileDownloadIcon sx={{ mr: 1, fontSize: 22 }} />
      <Typography>Exportar</Typography>
    </Button>
  );
}

export default ExportSVGButton;
