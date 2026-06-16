import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function AddPg() {

  const [data, setData] = useState({
    pgName:"",
    pg_image:"",
    ownerName:"",
    mobile:"",
    location:"",
    rent:"",
    facilities:""
  });

  const handleChange = (e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();

    await axios.post(
      "http://localhost:5000/api/pg",
      data,{
        headers:{
            Authorization:localStorage.getItem("token")
        }
      }
    );

    alert("PG Added");
  };

  return (
    <>
      <Navbar />

      <form onSubmit={handleSubmit}>
        <input name="pgName" placeholder="PG Name" onChange={handleChange}/>
        <input name="pg_image" placeholder="Image URL" onChange={handleChange}/>
        <input name="ownerName" placeholder="Owner Name" onChange={handleChange}/>
        <input name="mobile" placeholder="Mobile" onChange={handleChange}/>
        <input name="location" placeholder="Location" onChange={handleChange}/>
        <input name="rent" placeholder="Rent" onChange={handleChange}/>
        <input name="facilities" placeholder="Facilities" onChange={handleChange}/>

        <button>Add PG</button>
      </form>
    </>
  );
}

export default AddPg;