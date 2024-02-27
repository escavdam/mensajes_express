const express = require("express");
const fs = require("fs");
const routers = express.Router();
const { getAll, add, reset } = require("../scripts/mensajes.js");

routers.get("/", (req, res) => {
  const lista = getAll();
  res.render("mensajes", { lista });
});

routers.get("/mensajes", (req, res) => {
  res.json(getAll());
});

routers.post("/mensajes", (req, res) => {
  const { nombre, mensaje } = req.body;
  console.log(nombre);
  if (nombre === "") {
    res.json({
      status: "error",
      mensaje: "Debes ingresar un nombre y mensaje",
    });
    return;
  }
  add(mensaje, nombre);
  res.json({ status: "ok", mensaje: "Mensaje agregado correctamente" });
});

routers.get("/mensajes/reset", (req, res) => {
  reset();
  res.json({ status: "ok", mensaje: "Mensajes eliminados correctamente" });
});

module.exports = routers;
