import { Container, Grid, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../Hooks/useAuth";
import Navigation2 from "../Navigation/Navigation2";
import "./Registation.css";

const Registation = () => {
  const [login, setLogin] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const { register, isLoading, error, googleSignin } = useAuth();
  const handleLogin = (e) => {
    const filed = e.target.name;
    const value = e.target.value;
    const newLogin = { ...login };
    newLogin[filed] = value;
    setLogin(newLogin);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.password !== login.retype_password) {
      swal({
        title: "Please set the password correctly",
        text: "The password you given is not matched with Retype-password",
        icon: "error",
        button: "Opps!",
      });

      return;
    }
    register(login.email, login.password, navigate, location, login.name);
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
              <h2 className="login-text">Create an account</h2>
              {!isLoading && (
                <form onSubmit={handleSubmit}>
                  <TextField
                    sx={{ width: "50%", mb: 2 }}
                    id="standard-basic"
                    label="Full-Name"
                    type="userName"
                    name="name"
                    variant="standard"
                    onBlur={handleLogin}
                  />
                  <br />
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
                    type="password"
                    name="password"
                    onBlur={handleLogin}
                  />
                  <br />
                  <TextField
                    sx={{ width: "50%", mb: 2 }}
                    id="standard-basic"
                    label="Retype_password"
                    variant="standard"
                    type="password"
                    name="retype_password"
                    onBlur={handleLogin}
                  />
                  <br />

                  <p className="mt-3 ">
                    Already have an account?
                    <Link className="login-text" to="/logIn">
                      Log in
                    </Link>
                  </p>
                  <button
                    className="button-reg"
                    variant="contained"
                    type="submit"
                  >
                    Sign-up
                  </button>
                  <div className="mt-2">
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
              {error &&
                swal({
                  title: { error },
                  icon: "warning",
                  button: "Opps!",
                })}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default Registation;
