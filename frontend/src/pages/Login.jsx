import React, { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      ); 

    //   localStorage.clear()


      

      alert("Login Successful");

      window.location.href = "/home";

    } catch (error) {

      alert("Login Failed");

    }

  };

  return (

    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f2f2f2"
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          width: "350px"
        }}
      >
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>
            setEmail(e.target.value)
          }
          style={{
            width:"100%",
            padding:"10px",
            marginTop:"10px"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>
            setPassword(e.target.value)
          }
          style={{
            width:"100%",
            padding:"10px",
            marginTop:"10px"
          }}
        />

        <button
          type="submit"
          style={{
            width:"100%",
            padding:"10px",
            marginTop:"15px",
            background:"#0d6efd",
            color:"white",
            border:"none"
          }}
        >
          Login
        </button>

        <p>
          New User?
          <a href="/signup"> Signup</a>
        </p>

      </form>
    </div>

  );
}

export default Login;