 //importaciones
const express = require("express");
const nunjucks = require("nunjucks");

//crear app
const app = express();

//njk
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set('view engine', 'njk')

//rutas
const rutasTesting = require("./routers/rutasTesting.js");
const rutasMensajes = require("./routers/rutasMensajes.js");
app.use(rutasTesting);
app.use(rutasMensajes);

//arrancar servidor
app.listen(3000, () => {
  console.log("puerto 3000 mis reyes");
});
