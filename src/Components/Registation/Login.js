import { Container, Grid, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Navigation2 from "../Navigation/Navigation2";
import "./Registation.css";

const Login = () => {
  const [login, setLogin] = useState();
  const { signin, isLoading, error, googleSignin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    const filed = e.target.name;
    const value = e.target.value;
    const newLogin = { ...login };
    newLogin[filed] = value;
    setLogin(newLogin);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signin(login.email, login.password, navigate, location);
  };
  return (
    <div>
      <Navigation2 />
      <Container sx={{ my: 5 }}>
        <Paper elevation={6}>
          <Grid
            container
            sx={{ mt: 2, background: "#f2f3f3", padding: "10px" }}
            spacing={2}
          >
            <Grid item xs={12} md={6} lg={6}>
              <img
                className="login-img img-fluid w-100"
                src="https://i.ibb.co/Zxg616N/giphy.gif"
                alt=""
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <h2 className="login-text">Login</h2>
              {!isLoading && (
                <form onSubmit={handleSubmit}>
                  <TextField
                    sx={{ width: "50%", mb: 2 }}
                    id="standard-basic"
                    label="Email"
                    name="email"
                    type="email"
                    variant="standard"
                    onBlur={handleLogin}
                  />
                  <br />
                  <TextField
                    sx={{ width: "50%", mb: 2 }}
                    id="standard-basic"
                    label="password"
                    variant="standard"
                    name="password"
                    type="password"
                    onBlur={handleLogin}
                  />
                  <br />
                  {error && (
                    <p className="text-danger">
                      <strong>{error}</strong>
                    </p>
                  )}
                  <p className="mt-3  ">
                    Already have an account?
                    <Link className="login-text" to="/registation">
                      Create an accont
                    </Link>
                  </p>
                  <button
                    className="button-reg shadow"
                    variant="contained"
                    type="submit"
                  >
                    Sign-in
                  </button>

                  <div className="mt-4">
                    {" "}
                    <div
                      className="googleBtn shadow"
                      onClick={() => googleSignin(location, navigate)}
                    >
                      <img src="https://i.ibb.co/KFdqhhY/google.png" alt="" />
                      <span className=" text-danger ms-2 fw-bold">Google</span>
                    </div>
                    <div
                      className="fbBtn shadow m-2"
                      onClick={() => googleSignin(location, navigate)}
                    >
                      <img
                        src="https://i.ibb.co/TTLdNpT/Facebook-logo.png"
                        alt=""
                      />
                      <span className=" text-danger ms-2 fw-bold">Fbook</span>
                    </div>
                  </div>
                </form>
              )}
              {isLoading && (
                <img src="https://i.ibb.co/km1NDXC/loading.gif" alt="" />
              )}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
