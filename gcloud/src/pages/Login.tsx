import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLoginMutation, setCredentials } from 'store/store';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function Login() {
  const params = useParams();
  // const path = localStorage.getItem('companyName');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login({
        userNameOrEmail: 'ahmet.aydar@gcode.com.tr',
        password: '1234',
      });

      if ('data' in res) {
        console.log(res.data.token);
        dispatch(setCredentials(res.data.token));
        if (params.companyName !== undefined) {
          localStorage.setItem('companyName', params.companyName);
        }
        Cookies.set('accessToken', res.data.token.accessToken);
        Cookies.set('refreshToken', res.data.token.refreshToken);
        navigate(`/${params.companyName}/dashboard`);
      } else {
        console.error('Error occurred during login:', res.error);
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };
 
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const companyName = data.get('companyName') as string | null;
  //   const username = data.get('username') as string | null;
  //   const password = data.get('password') as string | null;

  //   if (username === 'user' && password === 'pass'  && companyName) {
  //     localStorage.setItem('companyName', companyName);
  //     navigate(`/${companyName}/dashboard`);
  //   } else {
  //     alert('Invalid username or password.');
  //   }
  // };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userNameOrEmail"
              label="username"
              name="username"
              autoComplete="username"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

