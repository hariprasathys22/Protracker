import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Landing = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    document.title = "Protracker";
  }, []);

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <nav className="top">
        <h2>Protracker</h2>
        <div>
          <Button color="inherit" href="/login">
            Login
          </Button>
          <Button variant="contained" href="/register">
            Sign Up
          </Button>
        </div>
      </nav>
      <div className="landing-inner">
        <h1>Protracker</h1>
        <p>Efficient tracking option for your projects!</p>
        <div className="buttons">
          <Button variant="outlined" color="inherit" href="/register">
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
