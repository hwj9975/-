import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Link,
  Stack,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import PageContainer from 'src/components/container/PageContainer';

export default function LoginView() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    alert(`id: ${id}, password: ${password} 로그인!`);
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
            height: '330px',
            alignItems: 'center',
          }}
        >
          <CardHeader title="로그인" />
          <CardContent>
            <Stack spacing={2}>
              <TextField label="아이디" value={id} onChange={(e) => setId(e.target.value)} />
              <TextField
                label="비밀번호"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Stack>
          </CardContent>
          <CardActions>
            <Stack spacing={2} width={'100%'} p={1} alignItems="center">
              <Button fullWidth variant="outlined" onClick={handleSubmit}>
                로그인
              </Button>
              <Link fullWidth href="/auth/register">
                회원가입
              </Link>
            </Stack>
          </CardActions>
        </Card>
      </Box>
    </PageContainer>
  );
}
