import { Box, Grid, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const tempData = [
  {
    id: 1,
    name: 'VAP',
    returnRate: 0.3,
    sharpIndex: 0.57,
    mdd: 0.28,
  },
  {
    id: 2,
    name: 'BAP',
    returnRate: 0.2,
    sharpIndex: 0.31,
    mdd: -0.16,
  },
  {
    id: 3,
    name: '가속듀얼',
    returnRate: 0.3,
    sharpIndex: 0.24,
    mdd: -0.31,
  },
];

export default function StrategyCard() {
  const [strategies, setStrategies] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setStrategies(tempData);
    }, 10);
  }, []);

  return (
    <Grid
      spacing={3}
      sx={{
        my: 2,
      }}
      container
      justifyContent="center"
      alignItems="center"
    >
      {strategies.map((strategy) => (
        <Grid item spacing={1} display="center" justifyContent="center" alignItems="center">
          <Box
            sx={{
              backgroundColor: '#13DEB9',
              color: 'white',
              height: '240px',
              width: '223px',
              display: 'flex',
              borderRadius: 5,
              p: 4,
            }}
          >
            <Stack spacing={3}>
              <Stack spacing={2}>
                <Typography variant="h5">VAP</Typography>
                <Stack spacing={1} justifyContent="left">
                  <Typography align="left">{`수익률: ${Math.floor(
                    strategy?.returnRate * 100,
                  )}%`}</Typography>
                  <Typography align="left">{`샤프지수: ${strategy?.sharpIndex}`}</Typography>
                  <Typography align="left">{`MDD: ${Math.floor(strategy?.mdd * 100)}%`}</Typography>
                </Stack>
              </Stack>
              <Typography
                sx={{
                  fontWeight: 'bold',
                }}
              >
                최근 20년 수익률
              </Typography>
            </Stack>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
