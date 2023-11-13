import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  {
    name: '정적 백 테스팅',
    url: '/static-back-test',
    type: 'internal',
    color: 'secondary',
  },
  {
    name: '동적 백 테스팅',
    url: '/dynamic-back-test',
    type: 'internal',
    color: 'primary',
  },
];

export default function MenuGrid() {
  const navigate = useNavigate();

  const handleClick = (menuItem) => {
    navigate(menuItem.url);
  };

  return (
    <Grid container justifyContent="center" spacing={2} sx={{ width: '800px', my: 2 }}>
      {menuItems.map((menuItem) => (
        <Grid key={menuItem.name} item sx={{ display: 'flex', justifyContent: 'center', p: 0 }}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              borderRadius: 5,
              width: '350px',
              height: '350px',
              color: 'white',
              p: 0,
            }}
            color={menuItem.color}
            onClick={() => handleClick(menuItem)}
          >
            <Typography variant="h5">{menuItem?.name}</Typography>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
