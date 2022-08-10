import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useContext } from "react";
import AuthContext from "../../context/auth-context";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const context = useContext(AuthContext);

  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [mail, setMail] = useState("");
  const fnHandler = (event) => {
    setFn(event.target.value);
  };
  const lnHandler = (event) => {
    setLn(event.target.value);
  };
  const mailHandler = (event) => {
    setMail(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    context.onSignUp({
      First: fn,
      Last: ln,
      Mail: mail,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "none",
            }}
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: "secondary.main",
              }}
            >
              <LockOutlinedIcon sx={{ background: "none" }} />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{ background: "none", color: "black" }}
            >
              Sign in
            </Typography>
            <form className="sign-container" onSubmit={submitHandler}>
              <div className="namee">
                <input
                  className="firstName"
                  type={"text"}
                  placeholder="First Name"
                  value={fn}
                  onChange={fnHandler}
                ></input>
                <input
                  className="lastName"
                  type={"text"}
                  placeholder="Last Name"
                  value={ln}
                  onChange={lnHandler}
                ></input>
              </div>
              <div className="mail-cont">
                <input
                  className="email"
                  type={"email"}
                  placeholder="E-Mail"
                  value={mail}
                  onChange={mailHandler}
                ></input>
              </div>
              <div className="button">
                <button className="submit" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
