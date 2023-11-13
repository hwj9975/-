import { Box, Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import BackTestResult from './BackTestResult';

export default function BackTestView() {
  return (
    <PageContainer>
      <Box
        style={{
          width: '800px',
        }}
      >
        <Typography variant="h5">백테스트 결과</Typography>
        <BackTestResult />
      </Box>
    </PageContainer>
  );
}
