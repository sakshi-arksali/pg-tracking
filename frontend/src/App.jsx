import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import AddPg from "./pages/AddPg";
import EditPg from "./pages/EditPg";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addpg" element={<AddPg />} />
        <Route path="/editpg/:id" element={<EditPg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;