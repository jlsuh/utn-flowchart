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
    <Button variant="outlined" onClick={handleClickShowDigraph}>
      {isLoadingDigraph ? (
        <CircularProgress sx={{ mr: 1 }} size={22} />
      ) : (
        <PolylineIcon sx={{ mr: 1, fontSize: 22 }} />
      )}
      <Typography>Ver Digrafo</Typography>
    </Button>
  );
}

export default ShowDigraphButton;
