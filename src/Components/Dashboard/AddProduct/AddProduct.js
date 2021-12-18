import { Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import swal from "sweetalert";

const AddProduct = () => {
  const [data, setData] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/product", data).then((res) => {
      if (res.data.insertedId) {
        swal({
          title: "Data loaded successfully",
          text: "Great; Data has been load on the server",
          icon: "success",
          button: "Ok",
        });
      }
    });
  };
  const handleInput = (e) => {
    const filed = e.target.name;
    const value = e.target.value;
    const newData = { ...data };
    newData[filed] = value;
    setData(newData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} md={6} sm={6}>
            <TextField
              sx={{ width: "90%", mb: 2 }}
              id="outlined-textarea"
              label="Product Name"
              name="name"
              multiline
              required
              onBlur={handleInput}
            />
            <br />
            <TextField
              sx={{ width: "90%", mb: 2 }}
              id="outlined-textarea"
              label="Brand Name"
              name="brand"
              multiline
              required
              onBlur={handleInput}
            />
            <br />
            <TextField
              sx={{ width: "90%", mb: 2 }}
              id="outlined-textarea"
              label="Condition"
              name="condition"
              multiline
              required
              onBlur={handleInput}
            />
            <br />
            <TextField
              sx={{ width: "90%", mb: 2 }}
              id="outlined-textarea"
              label="$ Price"
              name="price"
              multiline
              required
              onBlur={handleInput}
            />
            <br />
            <TextField
              sx={{ width: "90%", mb: 2 }}
              id="outlined-textarea"
              label="Category"
              name="category"
              multiline
              required
              onBlur={handleInput}
            />
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <TextField
              sx={{ width: "90%", mb: 2 }}
              id="outlined-textarea"
              label="Title"
              name="title"
              multiline
              required
              onBlur={handleInput}
            />
            <br />

            <TextField
              sx={{ width: "90%", mb: 2 }}
              id="outlined-textarea"
              label="Product Code"
              name="pcode"
              multiline
              required
              onBlur={handleInput}
            />
            <br />
            <TextField
              sx={{ width: "90%", mb: 2 }}
              id="outlined-textarea"
              label="Avilavility"
              name="avilavility"
              multiline
              required
              onBlur={handleInput}
            />

            <br />
            <TextField
              sx={{ width: "90%", mb: 2 }}
              id="outlined-textarea"
              label="Rating"
              name="rating"
              multiline
              required
              onBlur={handleInput}
            />
            <br />
            <TextField
              sx={{ width: "90%", mb: 2 }}
              id="outlined-textarea"
              label="Image url link"
              name="img"
              multiline
              required
              onBlur={handleInput}
            />
          </Grid>
          <Grid item xs={12} md={12} sm={12}>
            <TextField
              sx={{ width: "95%", mb: 2 }}
              id="outlined-multiline required-static"
              label="Product Description"
              name="description"
              multiline
              required
              rows={4}
              onBlur={handleInput}
            />
          </Grid>
        </Grid>

        <button className="button-reg shadow" variant="contained" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
