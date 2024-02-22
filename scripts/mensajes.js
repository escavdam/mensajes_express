const fs = require("fs");

//Necesitaremos la libreria path si queremos cargar con readFileSync o readFile como teniais en un principio, el jueves os explico en que nos ayuda esta libreria

function getAll() {
  const mensajes = require("../db/mensajes.json"); //esto funciona!
  return mensajes;
}

/*
function getAll_aux() {
  const mensajesActual = fs.readFileSync(path.join(__dirname, "../db/mensajes.json"), "utf-8");
  return mensajesActual
}
*/

function add(mensaje, autor) {
  const mensajes = getAll();
  mensajes.push({ autor, mensaje });
  fs.writeFileSync("./db/mensajes.json", JSON.stringify(mensajes, null, 2));
}

function reset() {
  fs.writeFileSync("./db/mensajes.json", "[]");
}

module.exports = {
  getAll,
  add,
  reset,
};
