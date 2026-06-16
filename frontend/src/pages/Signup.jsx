import React, { useState } from "react";
import axios from "axios";

function Signup() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSignup = async(e)=>{

    e.preventDefault();

    try{

      await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          name,
          email,
          password
        }
      );

      alert("Signup Successful");

      window.location.href="/login";

    }catch(error){

      alert("Signup Failed");

    }

  };

  return (

    <div
      style={{
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:"#f2f2f2"
      }}
    >

      <form
        onSubmit={handleSignup}
        style={{
          background:"white",
          padding:"30px",
          borderRadius:"10px",
          width:"350px"
        }}
      >

        <h2>Signup</h2>

        <input
          type="text"
          placeholder="Name"
          onChange={(e)=>
            setName(e.target.value)
          }
          style={{
            width:"100%",
            padding:"10px",
            marginTop:"10px"
          }}
        />

        <input
          type="email"
          placeholder="Email"
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
            background:"#198754",
            color:"white",
            border:"none"
          }}
        >
          Signup
        </button>

      </form>

    </div>

  );
}

export default Signup;