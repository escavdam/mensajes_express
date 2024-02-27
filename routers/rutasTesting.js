const express = require("express");
const routers = express.Router();
const lista = ["A", "B", "C"];

routers.get("/hola", (req, res) => {
  res.send("<p>holaa mis perritas</p>");
});

routers.get("/testnjk", (req, res) => {
  res.render("test", { mensaje: "Hola mundo", lista: lista });
});

routers.get("/htmx", (req, res) => {
  res.render("htmx")
})

module.exports = routers;