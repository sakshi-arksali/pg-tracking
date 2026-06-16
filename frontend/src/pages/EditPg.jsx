import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditPg() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [data,setData] = useState({
    pgName:"",
    pg_image:"",
    ownerName:"",
    mobile:"",
    location:"",
    rent:"",
    facilities:""
  });

  useEffect(()=>{

    axios
      .get(
        `http://localhost:5000/api/pg/${id}`,
        {
          headers:{
            token:localStorage.getItem("token")
          }
        }
      )
      .then((res)=>{
        setData(res.data);
      });

  },[id]);

  const handleChange=(e)=>{

    setData({
      ...data,
      [e.target.name]:e.target.value
    });

  };

  const handleUpdate=async(e)=>{

    e.preventDefault();

    try{

      await axios.put(
        `http://localhost:5000/api/pg/${id}`,
        data,
        {
          headers:{
            token:localStorage.getItem("token")
          }
        }
      );

      alert("PG Updated Successfully");

      navigate("/home");

    }catch(error){

      console.log(error);

      alert("Update Failed");

    }

  };

  return (
    <>
      <style>{`

      body{
        background:#f4f7fc;
        font-family:Arial,sans-serif;
      }

      .container{
        min-height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        padding:20px;
      }

      .form-box{
        width:700px;
        background:white;
        padding:30px;
        border-radius:20px;
        box-shadow:0 10px 30px rgba(0,0,0,0.15);
      }

      .title{
        text-align:center;
        color:#0d6efd;
        margin-bottom:25px;
      }

      .preview{
        width:100%;
        height:250px;
        object-fit:cover;
        border-radius:15px;
        margin-bottom:20px;
      }

      .input{
        width:100%;
        padding:12px;
        margin-bottom:15px;
        border:1px solid #ddd;
        border-radius:10px;
      }

      .btn{
        width:100%;
        padding:14px;
        border:none;
        background:#0d6efd;
        color:white;
        border-radius:10px;
        font-size:16px;
        cursor:pointer;
      }

      .btn:hover{
        background:#084298;
      }

      `}</style>

      <div className="container">

        <div className="form-box">

          <h1 className="title">
            Update PG
          </h1>

          {data.pg_image && (

            <img
              src={data.pg_image}
              alt=""
              className="preview"
            />

          )}

          <form onSubmit={handleUpdate}>

            <input
              className="input"
              name="pgName"
              placeholder="PG Name"
              value={data.pgName || ""}
              onChange={handleChange}
            />

            <input
              className="input"
              name="pg_image"
              placeholder="PG Image URL"
              value={data.pg_image || ""}
              onChange={handleChange}
            />

            <input
              className="input"
              name="ownerName"
              placeholder="Owner Name"
              value={data.ownerName || ""}
              onChange={handleChange}
            />

            <input
              className="input"
              name="mobile"
              placeholder="Mobile"
              value={data.mobile || ""}
              onChange={handleChange}
            />

            <input
              className="input"
              name="location"
              placeholder="Location"
              value={data.location || ""}
              onChange={handleChange}
            />

            <input
              className="input"
              name="rent"
              placeholder="Rent"
              value={data.rent || ""}
              onChange={handleChange}
            />

            <input
              className="input"
              name="facilities"
              placeholder="Facilities"
              value={data.facilities || ""}
              onChange={handleChange}
            />

            <button
              className="btn"
              type="submit"
            >
              Update PG
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default EditPg;;