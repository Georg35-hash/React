import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
import { jwtDecode } from "jwt-decode";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const tokenData = token ? jwtDecode(token) : null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      <h1>{tokenData ? tokenData.user.id : "Login into your account"}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
