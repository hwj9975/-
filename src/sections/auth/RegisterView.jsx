import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Stack,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import PageContainer from 'src/components/container/PageContainer';

export default function RegisterView() {
  const [id, setId] = useState('');
  const [isDuplicated, setIsDuplicated] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (isDuplicated) {
      alert('아이디 값을 확인해주세요');
      return;
    }
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    alert(`id: ${id}, password: ${password} 회원가입!`);
  };

  const duplicateCheck = () => {
    setIsChecked(true);
    // call duplicate check api
    if (Math.ceil(Math.random() * 10) % 2 === 0) {
      setIsDuplicated(false);
      return;
    }
    setIsDuplicated(true);
  };

  const getHelperText = () => {
    if (!isChecked) return '';
    return isDuplicated ? '중복된 아이디입니다.' : '사용할 수 있는 아이디입니다.';
  };

  return (
    <PageContainer>
      <Box
        sx={{
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
          height: '60vh',
        }}
      >
        <Card
          sx={{
            width: '400px',
            height: '380px',
            alignItems: 'center',
          }}
        >
          <CardHeader title="회원가입" />
          <CardContent>
            <Stack spacing={2}>
              <TextField
                label="아이디"
                value={id}
                onChange={(e) => setId(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <Button size="small" onClick={duplicateCheck}>
                      중복확인
                    </Button>
                  ),
                }}
                error={isDuplicated}
                helperText={getHelperText()}
              />
              <TextField
                label="비밀번호"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                label="비밀번호 확인"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Stack>
          </CardContent>
          <CardActions
            sx={{
              justifyContent: 'center',
            }}
          >
            <Stack spacing={2} width={'100%'} p={1} alignItems="center">
              <Button fullWidth variant="outlined" onClick={handleSubmit}>
                회원가입
              </Button>
            </Stack>
          </CardActions>
        </Card>
      </Box>
    </PageContainer>
  );
}
