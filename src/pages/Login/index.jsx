import React, { useState } from "react";
import { HeroHeader } from "../../components/ImgData";
import { Button, TextField, Typography } from "@mui/material";
import "./login.css";
const Login = () => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <HeroHeader pageTitle="Login" pageTitleClass="login-title" />
      <section className="login-container">
        <div className="login-header">
          <Typography variant="h4" className="login-heading">
            Login
          </Typography>
        </div>
        <form className="login-input-container" onSubmit={handleSubmit}>
          <TextField
            onChange={handleChange}
            label="email"
            className="login-input"
            type="email"
          />
          <TextField
            onChange={handleChange}
            label="pasword"
            className="login-input"
            type="password"
          />
          <Button variant="contained" type="submit" className="login-btn">
            Login
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Login;
