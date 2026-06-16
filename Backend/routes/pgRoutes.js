const express =
require("express");

const router =
express.Router();
const authMiddleware=require("../middlerware/authMiddleware");


const {

addPg,
getAllPgs,
getPgById,
updatePg,
deletePg

}
=
require(
"../controllers/pgController"
);

router.post(
"/",
addPg
);

router.get(
"/",
getAllPgs
);

router.get(
"/:id",
getPgById
);

router.put(
"/:id",
updatePg
);

router.delete(
"/:id", 
deletePg
);

module.exports =
router;