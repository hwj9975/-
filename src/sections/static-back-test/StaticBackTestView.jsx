import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import PageContainer from 'src/components/container/PageContainer';

export default function StaticBackTestView() {
  const strategyPresets = [
    { name: '올시즌', values: [{etf:"QQQ", value:23}, {etf:"EFA", value:50}, {etf:"HYG", value:27}] },
    { name: '올웨더', values: [{etf:"IWD", value:12}, {etf:"EFA", value:50}, {etf:"IWD", value:5}, {etf:"TLT", value:37}] },
    { name: '0040', values: [{etf:"EZU", value:23}, {etf:"XLP", value:50}] }
  ];
  const [assets, setAssets] = useState([]);

  const params = useParams();

  const navigate = useNavigate();

  const onAssetAddClick = (name = undefined) => {
    setAssets([
      ...assets,
      {
        id: assets.length + 1,
        name: name ? `${name} ${assets.length + 1}` : `자산 ${assets.length + 1}`,
        rate: 0,
      },
    ]);
  };

  const onStrategyPresetClick = (strategy) => {
    setAssets(strategy.values?.map((val, index) => {
      return {
        id: index + 1,
        name: val.etf,
        etf: val.etf,
        rate: val.value,
      }
    }));
  };

  const onAssetDeleteClick = (id) => {
    setAssets(assets.filter((asset) => asset.id !== id));
  };

  const onAssetRateChange = (id, newRate) => {
    setAssets(assets.map((asset) => (asset.id !== id ? asset : { ...asset, rate: newRate })));
  };

  const onBackTestClick = () => {
    navigate('/back-test');
  };

  const onStrategySaveClick = () => {
    const isValid = assets.reduce((prev, cur) => prev + Number(cur.rate), 0) === 100;
    if (!isValid) {
      alert('rate합이 100이 아닙니다');
      return;
    }
    alert('전략 저장!');
  };

  const onStrategyDeleteClick = () => {
    alert('전략 삭제!');
  };

  const [name, setName] = useState(undefined);

  useEffect(() => {
    // testId 를 이용한 api호출
    const testId = params.id;
    if (testId) {
      setName('내 자산');
    }
  }, []);

  return (
    <PageContainer>
      <Card
        sx={{
          width: '800px',
        }}
      >
        <CardHeader title="정적 자산배분 백테스팅" />
        <CardContent>
          <Stack spacing={2}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>전략 따라하기: </Typography>
              {strategyPresets.map((strategyType) => (
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => onStrategyPresetClick(strategyType)}
                >
                  {strategyType.name}
                </Button>
              ))}
            </Stack>
            <TextField
              label="전략 이름"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                width: '40%',
              }}
            />
            <Card>
              <CardHeader
                title="자산 설정"
                action={
                  <Button variant="outlined" onClick={() => onAssetAddClick()}>
                    추가
                  </Button>
                }
              />
              <CardContent>
                {assets.map((asset) => (
                  <Stack
                    direction="row"
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={2}
                    my={2}
                  >
                    <Typography
                      sx={{
                        width: '15%',
                      }}
                    >
                      {asset?.name}
                    </Typography>
                    <Autocomplete
                      label="EFT"
                      size="small"
                      value={asset?.etf}
                      options={[
                        'SPY',
                        'QQQ',
                        'VT',
                        'VEU',
                        'EFA',
                        'EEM',
                        'VWO',
                        'IWD',
                        'IWF',
                        'IWN',
                        'IWO',
                        'MTUM',
                        'SCZ',
                        'XLE',
                        'XLB',
                        'XLI',
                        'XLY',
                        'XLP',
                        'XLV',
                        'XLF',
                        'XLK',
                        'XLU',
                        'VGK',
                        'EZU',
                        'EWJ',
                        'BND',
                        'AGG',
                        'SHY',
                        'SHV',
                        'BIL',
                        'IEF',
                        'TLT',
                        'TIP',
                        'LQD',
                        'HYG',
                        'BNDX',
                        'EMB',
                        'BWX',
                        'GSG',
                        'PDBC',
                        'GLD',
                        'VNQ',
                        'IYR',
                        'SCHH',
                        'REM',
                        'RWX',
                      ]}
                      renderInput={(renderParams) => (
                        <TextField
                          label="EFT"
                          {...renderParams}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      )}
                      sx={{
                        width: '30%',
                      }}
                    />
                    <TextField
                      size="small"
                      label="비율"
                      value={asset.rate}
                      onChange={(e) => onAssetRateChange(asset.id, e.target.value)}
                      sx={{
                        width: '30%',
                      }}
                    />
                    <Button size="small" color="error" onClick={() => onAssetDeleteClick(asset.id)}>
                      삭제
                    </Button>
                  </Stack>
                ))}
              </CardContent>
              {name && (
                <Box p={2}>
                  <Typography variant="subtitle2">{name}</Typography>
                </Box>
              )}
            </Card>
            <Stack direction="row" spacing={1} alignItems="center">
              <DatePicker
                label="시작 날짜"
                renderInput={(renderParams) => (
                  <TextField
                    size="small"
                    {...renderParams}
                    sx={{
                      width: '200px',
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                )}
              />
              <DatePicker
                label="종료 날짜"
                renderInput={(renderParams) => (
                  <TextField
                    size="small"
                    {...renderParams}
                    sx={{
                      width: '200px',
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                )}
              />
              <TextField
                label="초기 자산"
                size="small"
                sx={{
                  width: '200px',
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="리밸런싱 기준"
                select
                size="small"
                sx={{
                  width: '200px',
                }}
                defaultValue={'Year'}
                InputLabelProps={{
                  shrink: true,
                }}
              >
                <MenuItem value={'Year'}>Year</MenuItem>
                <MenuItem value={'Month'}>Month</MenuItem>
                <MenuItem value={'Quater'}>Quater</MenuItem>
              </TextField>
            </Stack>
          </Stack>
        </CardContent>
        <CardActions>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            width="100%"
            spacing={2}
          >
            <Button variant="outlined" onClick={onBackTestClick}>
              백테스트
            </Button>
            <Button variant="outlined" onClick={onStrategySaveClick}>
              전략 저장하기
            </Button>
            {name && (
            <Button variant="outlined" onClick={onStrategySaveClick}>
              전략 수정하기
            </Button>)}
            {name && (
              <Button
                variant="outlined"
                color="error"
                onClick={onStrategyDeleteClick}
                sx={{
                  width: '120px',
                }}
              >
                전략 삭제하기
              </Button>
            )}
          </Stack>
        </CardActions>
      </Card>
    </PageContainer>
  );
}
