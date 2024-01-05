import React, { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BankCount from "../components/BankCount";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../store/userSlice";

function User() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
    } else {
      fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          dispatch(setUserDetails(data.body));
        });
    }
  }, []);
  return (
    <div>
      <Nav />
      <BankCount />
      <Footer />
    </div>
  );
}

export default User;
