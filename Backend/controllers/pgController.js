const Pg =
require("../models/Pg");

exports.addPg =
async(req,res)=>{

try{

const pg =
new Pg(req.body);

await pg.save();

res.status(201).json(pg);

}catch(error){

res.status(500).json({
message:error.message
});

}

};

exports.getAllPgs =
async(req,res)=>{

const pgs =
await Pg.find();

res.json(pgs);

};

exports.getPgById =
async(req,res)=>{

const pg =
await Pg.findById(
req.params.id
);

res.json(pg);

};

exports.updatePg =
async(req,res)=>{

const pg =
await Pg.findByIdAndUpdate(

req.params.id,

req.body,

{new:true}

);

res.json(pg);

};

exports.deletePg =
async(req,res)=>{

await Pg.findByIdAndDelete(
req.params.id
);

res.json({
message:"PG Deleted"
});

};