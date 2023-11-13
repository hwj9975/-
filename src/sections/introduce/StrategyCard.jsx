import { Box, Card, CardContent, CardHeader, Stack, Typography } from '@mui/material';

export default function StrategyCard({ strategy }) {
  return (
    <Card key={strategy.id} elevation={5}>
      <CardHeader title={strategy.name} />
      <CardContent>
        <Stack spacing={1} justifyContent="left">
          <Typography align="left">{`투자 EFT: ${strategy.efts.join(', ')}`}</Typography>
          <Typography align="left">{`샤프지수: ${strategy?.sharpIndex}`}</Typography>
          <Typography align="left">{`연환산 수익률: ${Math.floor(
            strategy?.yearIncomeRate * 100,
          )}%`}</Typography>
        </Stack>
        <Box
          sx={{
            mt: 2,
          }}
        >
          {strategy.note}
        </Box>
      </CardContent>
    </Card>
  );
}
