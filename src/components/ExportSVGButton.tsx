import { useDigraph } from '@/hooks';
import { renderSVG } from '@/services';
import { composeSVGObjectURL } from '@/utils';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Button, CircularProgress, Typography } from '@mui/material';
import { useState } from 'react';

const continuation = (svg: SVGElement) => {
  const url = composeSVGObjectURL(svg);
  const anchor = document.createElement('a');
  anchor.download = 'digraph.svg';
  anchor.href = url;
  anchor.click();
  URL.revokeObjectURL(url);
};

function ExportSVGButton() {
  const [isLoadingDigraph, setIsLoadingDigraph] = useState(false);

  const { composeDigraph } = useDigraph();

  const handleClickExportSVG = async () => {
    setIsLoadingDigraph(true);
    const digraph = composeDigraph();
    await renderSVG(digraph, continuation);
    setIsLoadingDigraph(false);
  };

  return (
    <Button
      disabled={isLoadingDigraph}
      onClick={handleClickExportSVG}
      sx={{
        boxShadow: 'none',
      }}
      variant="contained"
    >
      {isLoadingDigraph ? (
        <CircularProgress color="inherit" size={22} sx={{ mr: 1 }} />
      ) : (
        <FileDownloadIcon sx={{ fontSize: 22, mr: 1 }} />
      )}
      <Typography>Exportar</Typography>
    </Button>
  );
}

export default ExportSVGButton;
