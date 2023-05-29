import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

const initialState = {
  username: "",
  email: "",
  password: "",
  fname: "",
  telephone: "",
};

export default function Register() {
  const [state, setState] = useState({ ...initialState });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      window.location = "/login";
    } catch (err) {
      console.log(err);
      alert("An error occur");
    }
  };

  const setLabel = (label, value) => {
    const updatedState = { ...state };
    updatedState[label] = value;
    setState(updatedState);
  };

  return (
    <div>
      <div className="Styles.App ">
        <header className="App-header">
          <h1>Register</h1>
          <div className="form-background">
            <form onSubmit={handleSubmit}>
              <label style={{ display: "inline-block", marginBottom: "5px" }}>
                Username
              </label>
              <input
                type="text"
                value={state.username}
                onChange={(e) => setLabel("username", e.target.value)}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "5px",
                  marginBottom: "15px",
                }}
              />

              <label style={{ display: "inline-block", marginBottom: "5px" }}>
                Email
              </label>
              <input
                type="email"
                value={state.email}
                onChange={(e) => setLabel("email", e.target.value)}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "5px",
                  marginBottom: "15px",
                }}
              />

              <label style={{ display: "inline-block", marginBottom: "5px" }}>
                First Name
              </label>
              <input
                type="text"
                value={state.fname}
                onChange={(e) => setLabel("fname", e.target.value)}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "5px",
                  marginBottom: "15px",
                }}
              />

              <label style={{ display: "inline-block", marginBottom: "5px" }}>
                Telephone
              </label>
              <input
                type="text"
                value={state.telephone}
                onChange={(e) => setLabel("telephone", e.target.value)}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "5px",
                  marginBottom: "15px",
                }}
              />

              <label style={{ display: "inline-block", marginBottom: "5px" }}>
                Password
              </label>
              <input
                type="password"
                value={state.password}
                onChange={(e) => setLabel("password", e.target.value)}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "5px",
                  marginBottom: "15px",
                }}
              />

              <button
                style={{
                  display: "block",
                  width: "100%",
                  padding: "10px 20px",
                  backgroundColor: "gray",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Submit
              </button>

              <p style={{ marginTop: "20px" }}>
                Already have an account?{" "}
                <Link href="/login" className="link-colour">
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </header>
      </div>
    </div>
  );
}
