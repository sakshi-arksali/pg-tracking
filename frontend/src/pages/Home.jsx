import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {

  const [pgs, setPgs] = useState([]);

  const [searchName, setSearchName] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchRent, setSearchRent] = useState("");

  const fetchData = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/pg",
        {
          headers: {
            token: localStorage.getItem("token")
          }
        }
      );

      setPgs(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {
    fetchData();
  }, []);

  const deletePg = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/pg/${id}`
      );

      fetchData();

    } catch (error) {

      console.log(error);

    }

  };

  const filteredPgs = pgs.filter((pg) => {

    const nameMatch =
      pg.pgName
        .toLowerCase()
        .includes(searchName.toLowerCase());

    const locationMatch =
      pg.location
        .toLowerCase()
        .includes(searchLocation.toLowerCase());

    const rentMatch =
      searchRent === ""
        ? true
        : pg.rent <= Number(searchRent);

    return (
      nameMatch &&
      locationMatch &&
      rentMatch
    );

  });

  return (
    <>
      <style>{`

      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
      }

      body{
        background:#f4f7fc;
        font-family:Arial,sans-serif;
      }

      .home-container{
        padding:30px;
      }

      .title{
        text-align:center;
        margin:30px 0;
        color:#0d6efd;
        font-size:40px;
        font-weight:bold;
      }

      .filter-box{
        display:flex;
        justify-content:center;
        gap:15px;
        flex-wrap:wrap;
        margin-bottom:30px;
      }

      .filter-box input{
        width:250px;
        padding:12px;
        border:1px solid #ddd;
        border-radius:10px;
        font-size:15px;
      }

      .card-container{
        display:grid;
        grid-template-columns:
        repeat(
          auto-fit,
          minmax(320px,350px)
        );

        justify-content:center;

        gap:25px;
      }

      .pg-card{
        background:white;
        border-radius:20px;
        overflow:hidden;
        box-shadow:0 10px 25px rgba(0,0,0,0.15);
        transition:0.4s;
      }

      .pg-card:hover{
        transform:
        translateY(-10px)
        scale(1.03);

        box-shadow:
        0 20px 35px
        rgba(0,0,0,0.25);
      }

      .pg-image{
        width:100%;
        height:240px;
        object-fit:cover;
      }

      .card-body{
        padding:20px;
      }

      .pg-name{
        font-size:24px;
        margin-bottom:10px;
      }

      .location{
        color:#666;
        margin-bottom:10px;
      }

      .rent{
        color:#198754;
        font-size:22px;
        font-weight:bold;
        margin-bottom:15px;
      }

      .info{
        margin-bottom:8px;
      }

      .btn-group{
        display:flex;
        gap:10px;
        margin-top:15px;
      }

      .edit-btn{
        flex:1;
        text-align:center;
        text-decoration:none;
        background:#0d6efd;
        color:white;
        padding:10px;
        border-radius:10px;
      }

      .delete-btn{
        flex:1;
        border:none;
        background:#dc3545;
        color:white;
        padding:10px;
        border-radius:10px;
        cursor:pointer;
      }

      `}</style>

      <Navbar />

      <div className="home-container">

        <h1 className="title">
          🏠 PG Finder
        </h1>

        <div className="filter-box">

          <input
            type="text"
            placeholder="Search PG Name"
            value={searchName}
            onChange={(e) =>
              setSearchName(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Search Location"
            value={searchLocation}
            onChange={(e) =>
              setSearchLocation(e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Max Rent"
            value={searchRent}
            onChange={(e) =>
              setSearchRent(e.target.value)
            }
          />

        </div>

        <div className="card-container">

          {filteredPgs.map((pg) => (

            <div
              className="pg-card"
              key={pg._id}
            >

              <img
                src={pg.pg_image}
                alt={pg.pgName}
                className="pg-image"
              />

              <div className="card-body">

                <h3 className="pg-name">
                  {pg.pgName}
                </h3>

                <p className="location">
                  📍 {pg.location}
                </p>

                <p className="info">
                  👤 {pg.ownerName}
                </p>

                <p className="info">
                  📞 {pg.mobile}
                </p>

                <p className="info">
                  🛏️ {pg.facilities}
                </p>

                <p className="rent">
                  ₹ {pg.rent}/month
                </p>

                <div className="btn-group">

                  <Link
                    to={`/editpg/${pg._id}`}
                    className="edit-btn"
                  >
                    Edit
                  </Link>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deletePg(pg._id)
                    }
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </>
  );
}

export default Home;