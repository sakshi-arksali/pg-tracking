import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate()
    const logoutfunc=async () => {
        localStorage.clear()
        navigate("/")
    }
  return (
    <nav
      style={{
        background: "#0d6efd",
        padding: "15px",
        display: "flex",
        gap: "20px"
      }}
    >
      <Link to="/home" style={{ color: "white" }}>
        Home
      </Link>

      <Link to="/addpg" style={{ color: "white" }}>
        Add PG
      </Link>


      <button  onClick={logoutfunc}>Logout</button>
    </nav>
  );
}

export default Navbar;