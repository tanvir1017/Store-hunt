import { Container, Grid, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import "../../Registation/Registation.css";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const { isLoading, token } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://desolate-taiga-27947.herokuapp.com/users/admin`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <Container sx={{ my: 5 }}>
        <Paper>
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
              <h2 className="login-text">
                <i class="fas fa-user-shield "></i> Make An Admin
              </h2>
              <br />

              {!isLoading && (
                <form onSubmit={handleSubmit}>
                  <TextField
                    sx={{ width: "50%", mb: 2 }}
                    id="standard-basic"
                    label="Email"
                    name="email"
                    type="email"
                    variant="standard"
                    onBlur={handleEmail}
                  />
                  <br />
                  <br />
                  <button
                    className="button-reg shadow"
                    variant="contained"
                    type="submit"
                  >
                    Make an admin
                  </button>
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

export default MakeAdmin;
