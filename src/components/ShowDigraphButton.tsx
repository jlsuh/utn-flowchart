import { useDigraph } from '@/hooks';
import { renderSVG } from '@/services';
import { composeSVGObjectURL } from '@/utils';
import PolylineIcon from '@mui/icons-material/Polyline';
import { Button, CircularProgress, Typography } from '@mui/material';
import { useState } from 'react';

const continuation = (svg: SVGElement) => {
  const url = composeSVGObjectURL(svg);
  const newWindow = window.open(url);
  if (newWindow) {
    newWindow.onload = () => URL.revokeObjectURL(url);
  } else {
    window.location.assign(url);
  }
};

function ShowDigraphButton() {
  const [isLoadingDigraph, setIsLoadingDigraph] = useState(false);

  const { composeDigraph } = useDigraph();

  const handleClickShowDigraph = async () => {
    setIsLoadingDigraph(true);
    const digraph = composeDigraph();
    await renderSVG(digraph, continuation);
    setIsLoadingDigraph(false);
  };

  return (
    <Button
      disabled={isLoadingDigraph}
      onClick={handleClickShowDigraph}
      variant="outlined"
    >
      {isLoadingDigraph ? (
        <CircularProgress size={22} sx={{ mr: 1 }} />
      ) : (
        <PolylineIcon sx={{ fontSize: 22, mr: 1 }} />
      )}
      <Typography>Ver Digrafo</Typography>
    </Button>
  );
}

export default ShowDigraphButton;
