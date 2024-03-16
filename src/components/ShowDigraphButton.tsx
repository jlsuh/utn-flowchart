import { useDigraph } from '@/hooks';
import { renderSVG } from '@/services';
import { composeSVGObjectURL } from '@/utils';
import PolylineIcon from '@mui/icons-material/Polyline';
import { Button, Typography } from '@mui/material';

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
}

export default ShowDigraphButton;
