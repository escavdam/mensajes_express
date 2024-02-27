 //importaciones
 const express = require("express");
 const nunjucks = require("nunjucks");
 const { getAll } = require("./scripts/mensajes.js");
 
 //crear app
 const app = express();
 
 //njk
 nunjucks.configure("views", {
   autoescape: true,
   express: app,
 });
 app.set('view engine', 'njk')
 app.use(express.urlencoded({ extended: true }))
 
 //rutas
 const rutasTesting = require("./routers/rutasTesting.js");
 const rutasMensajes = require("./routers/rutasMensajes.js");
 app.use(rutasTesting);
 app.use(rutasMensajes);
 
 
 
 //arrancar servidor
 app.listen(3000, () => {
   console.log("puerto 3000 mis reyes");
 });
 