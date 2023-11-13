import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import PageContainer from 'src/components/container/PageContainer';
import IntroduceCard from './IntroduceCard';

const tempData = [
  {
    id: 1,
    name: 'AAA',
    efts: ['SPY', 'EFM', 'PGY'],
    sharpIndex: 0.57,
    yearIncomeRate: 0.3,
    note: 'AAA is a good strategy',
  },
  {
    id: 2,
    name: 'BBB',
    efts: ['SPY2', 'EFM2', 'PGY2'],
    sharpIndex: 0.32,
    yearIncomeRate: 0.23,
    note: 'gear with monster',
  },
  {
    id: 3,
    name: 'CCC',
    efts: ['SPY3', 'EFM3', 'PGY3'],
    sharpIndex: 0.43,
    yearIncomeRate: 0.5,
    note: 'Campus Couple Cutter',
  },
  {
    id: 4,
    name: 'DDD',
    efts: ['SPY1', 'EFM2', 'PGY3'],
    sharpIndex: 0.43,
    yearIncomeRate: 0.5,
    note: 'Campus Couple Cutter',
  },
  {
    id: 5,
    name: 'EEE',
    efts: ['SPY3', 'EFM3', 'PGY1'],
    sharpIndex: 0.43,
    yearIncomeRate: 0.5,
    note: 'Campus Couple Cutter',
  },
  {
    id: 6,
    name: 'FFF',
    efts: ['SPY2', 'EFM1', 'PGY3'],
    sharpIndex: 0.43,
    yearIncomeRate: 0.5,
    note: 'Campus Couple Cutter',
  },
  {
    id: 7,
    name: 'GGG',
    efts: ['SPY1', 'EFM3', 'PGY1'],
    sharpIndex: 0.43,
    yearIncomeRate: 0.5,
    note: 'Campus Couple Cutter',
  },
  {
    id: 8,
    name: 'HHH',
    efts: ['SPY3', 'EFM2', 'PGY1'],
    sharpIndex: 0.43,
    yearIncomeRate: 0.5,
    note: 'Campus Couple Cutter',
  },
];

export default function IntroduceView() {
  const [strategies, setStrategies] = useState([]);

  useEffect(() => {
    setTimeout(() => setStrategies(tempData), 10);
  });

  return (
    <PageContainer>
      <Box width="800px" minHeight="400px">
        <IntroduceCard strategies={strategies} />
      </Box>
    </PageContainer>
  );
}
