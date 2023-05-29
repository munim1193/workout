import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
import axios from 'axios'

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res =  await axios.post(`${process.env.REACT_APP_BACKEND}/api/login`, { identity: email, password });
      console.log(res.data)
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("role", res.data.role)
      if (res.data.role === "admin") {
        window.location = "/dashboard";
      } else {
        window.location = "/home";
      }
    } catch (err) {
      console.log(err);
      alert("An error occur password or email may be wrong");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        color: "black",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "5px",
          padding: "30px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Login
        </h1>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            style={{
              marginBottom: "20px",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3)",
              background: "none",
            }}
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            style={{
              marginBottom: "20px",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3)",
              background: "none",
            }}
          />
          <button
            className="text-center"
            style={{
              backgroundColor: "none",
              color: "#4CAF50",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #4CAF50",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
          <p
            style={{
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            Don't have an account?
            <Link
              to="/register"
              className="link-colour"
              style={{
                color: "#4CAF50",
                marginLeft: "5px",
                textDecoration: "none",
              }}
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
