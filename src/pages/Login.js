import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div className="pages-style">
      <Nav />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default Login;
