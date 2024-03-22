import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLoginMutation, setCredentials } from "store/store";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

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
        userNameOrEmail: "ahmet.aydar@gcode.com.tr",
        password: "1234",
      });

      if ("data" in res) {
        console.log(res.data.token);
        dispatch(setCredentials(res.data.token));
        if (params.companyName !== undefined) {
          localStorage.setItem("companyName", params.companyName);
        }
        Cookies.set("accessToken", res.data.token.accessToken);
        Cookies.set("refreshToken", res.data.token.refreshToken);
        navigate(`/${params.companyName}/dashboard`);
      } else {
        console.error("Error occurred during login:", res.error);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

  return (
    <div className="bg-background min-h-screen flex justify-center items-center">
      <Grid
        container
        component="main"
        maxWidth="xs"
        className="bg-background h-screen"
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          className="flex items-center justify-center"
        >
          <Box className="px-10 py-16 bg-white flex items-center w-1/2 border rounded-lg">
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              className="mt-1 w-full"
            >
              <Box className="mb-3">
                <Typography className="text-sm font-semibold">Kullanıcı Adı</Typography>
                <TextField
                  required
                  fullWidth
                  id="userNameOrEmail"
                  name="username"
                  autoComplete="username"
                  size="small"
                />
              </Box>
              <Box className="mb-3">
                <Typography className="text-sm font-semibold">Şifre</Typography>
                <TextField
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  size="small"
                />
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="text-sm font-semibold bg-[#7BAE42]"
              >
                GİRİŞ YAP
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          className="bg-background flex items-center justify-center"
        >
          <img src="../img/logoLogin.png" alt="Company Logo" />
        </Grid>
      </Grid>
    </div>
  );
}
