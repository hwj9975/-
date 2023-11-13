import { Box, CardContent, Stack, Typography } from '@mui/material';
import StrategyCard from './StrategyCard';

export default function IntroduceCard({ strategies }) {
  return (
    <Box
      style={{
        width: '100%',
      }}
    >
      <Typography variant="h5">전략 설명 페이지</Typography>
      <CardContent>
        <Stack spacing={2}>
          {strategies.map((strategy) => (
            <StrategyCard strategy={strategy} />
          ))}
        </Stack>
      </CardContent>
    </Box>
  );
}
