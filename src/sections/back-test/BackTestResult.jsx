import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export default function BackTestResult() {
  const [sharpIndex, setSharpIndex] = useState(0);
  const [income, setIncome] = useState(0);
  const [changeRate, setChangeRate] = useState(0);

  useEffect(() => {
    setSharpIndex(Math.random().toFixed(2));
    setIncome((Math.random() * 100).toFixed(2));
    setChangeRate((Math.random() * 100).toFixed(2));
  }, []);

  return (
    <Card
      sx={{
        mt: 2,
      }}
    >
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="h5">{`샤프 지수: ${sharpIndex}`}</Typography>
          <Typography variant="h5">{`수익률: ${income}%`}</Typography>
          <Typography variant="h5">{`변동률: ${changeRate}%`}</Typography>
          <Box>Image will come here</Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
