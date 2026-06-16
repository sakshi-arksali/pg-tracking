const dns=require('dns');
dns.setServers(['8.8.8.8','8.8.4.4']);
const express =
require("express");

const authMiddleware =require("./middlerware/authMiddleware");


const mongoose =
require("mongoose");

const cors =
require("cors");

const dotenv =
require("dotenv");

dotenv.config();

const app =
express();

app.use(cors());

app.use(express.json());

mongoose.connect(
process.env.MONGO_URI
)
.then(()=>
console.log(
"MongoDB Connected"
))
.catch((error)=>console.log(error.message));


app.use(
"/api/pg",
require("./routes/pgRoutes")
);
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

app.listen(
5000,
()=>{
console.log(
"Server Running"
);
}
);


