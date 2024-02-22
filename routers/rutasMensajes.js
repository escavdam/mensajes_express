const express = require("express");
const fs = require("fs");
const routers = express.Router();
const { getAll, add, reset } = require("../scripts/mensajes.js");

routers.get("/mensajes", (req, res) => {
  res.json(getAll());
});

routers.post("/mensajes", (req, res) => {
  add("Algo", "Pablo");
  res.json({"status": "ok", "mensaje": "Mensaje agregado correctamente"});
});


module.exports = routers;
