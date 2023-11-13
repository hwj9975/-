import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import PageContainer from 'src/components/container/PageContainer';
import { fDate } from 'src/utils/fDate';

const tempData = [
  {
    id: 1,
    name: 'AAA',
    efts: ['SPY', 'EFM', 'PGY'],
    sharpIndex: 0.57,
    yearIncomeRate: 0.3,
    note: 'AAA is a good strategy',
    createdDate: new Date(),
    isStatic: true,
  },
  {
    id: 2,
    name: 'BBB',
    efts: ['SPY2', 'EFM2', 'PGY2'],
    sharpIndex: 0.32,
    yearIncomeRate: 0.23,
    note: 'gear with monster',
    createdDate: new Date(),
    isStatic: true,
  },
  {
    id: 3,
    name: 'CCC',
    efts: ['SPY3', 'EFM3', 'PGY3'],
    sharpIndex: 0.43,
    yearIncomeRate: 0.5,
    note: 'Campus Couple Cutter',
    createdDate: new Date(),
    isStatic: false,
  },
  {
    id: 4,
    name: 'DDD',
    efts: ['SPY1', 'EFM2', 'PGY3'],
    sharpIndex: 0.43,
    yearIncomeRate: 0.5,
    note: 'Campus Couple Cutter',
    createdDate: new Date(),
    isStatic: false,
  },
  {
    id: 5,
    name: 'EEE',
    efts: ['SPY3', 'EFM3', 'PGY1'],
    sharpIndex: 0.43,
    yearIncomeRate: 0.5,
    note: 'Campus Couple Cutter',
    createdDate: new Date(),
    isStatic: true,
  },
  {
    id: 6,
    name: 'FFF',
    efts: ['SPY2', 'EFM1', 'PGY3'],
    sharpIndex: 0.43,
    yearIncomeRate: 0.5,
    note: 'Campus Couple Cutter',
    createdDate: new Date(),
    isStatic: false,
  },
  {
    id: 7,
    name: 'GGG',
    efts: ['SPY1', 'EFM3', 'PGY1'],
    sharpIndex: 0.43,
    yearIncomeRate: 0.5,
    note: 'Campus Couple Cutter',
    createdDate: new Date(),
    isStatic: false,
  },
  {
    id: 8,
    name: 'HHH',
    efts: ['SPY3', 'EFM2', 'PGY1'],
    sharpIndex: 0.43,
    yearIncomeRate: 0.5,
    note: 'Campus Couple Cutter',
    createdDate: new Date(),
    isStatic: false,
  },
];

export default function MyStrategyView() {
  const [strategies, setStrategies] = useState([]);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    // call delete api
    setStrategies(strategies.filter((strategy) => strategy.id !== id));
  };

  useEffect(() => {
    setTimeout(() => setStrategies(tempData), 10);
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5, editable: true },
    { field: 'name', headerName: '전략 이름', flex: 1, editable: true },
    {
      field: 'createdDate',
      headerName: '만들어진 날짜',
      valueGetter: (params) => fDate(params.value, 'yyyy-mm-dd'),
      flex: 1,
    },
    {
      field: 'isStatic',
      headerName: '타입',
      valueGetter: (params) => (params.value ? '정적' : '동적'),
      flex: 1,
    },
    {
      field: 'actions',
      type: 'actions',
      getActions: (params) => [
        <GridActionsCellItem
          key={`${params.row.id}-update`}
          icon={<Typography color="primary">수정</Typography>}
          label="edit"
          onClick={() =>
            navigate(
              params.row.isStatic
                ? `/static-back-test/${params.row.id}`
                : `/dynamic-back-test/${params.row.id}`,
            )
          }
        />,
        <GridActionsCellItem
          key={`${params.row.id}-delete`}
          icon={<Typography color="error">삭제</Typography>}
          label="delete"
          onClick={() => handleDelete(params.id)}
        />,
      ],
      flex: 0.5,
    },
  ];

  return (
    <PageContainer>
      <Box
        sx={{
          p: 2,
          width: '800px',
        }}
      >
        <Box
          sx={{
            mb: 2,
          }}
        >
          <Typography variant="h4">내 전략 확인</Typography>
        </Box>
        <Card elevation={5}>
          <CardHeader title="내 전략" />
          <CardContent>
            <DataGrid rows={strategies} columns={columns} />
          </CardContent>
        </Card>
      </Box>
    </PageContainer>
  );
}
