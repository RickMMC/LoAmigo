var express = require("express");
var path = require("path");
var cors = require("cors");
var session = require("cookie-session");
var rutaUsu = require("./rutas/usuarioRutas");
//var usuarioRutas = require("./rutas/usuarioRutaApis");  // Corrected import
//var rutasProductosApis = require("./rutas/productosRutasApis");
var negocioRutas = require("./rutas/negocioRutas");
const Negocio = require("./models/Negocio");
require("dotenv").config();

var app = express();
app.set("view engine", "ejs");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    name: "session",
    keys: ["r9203jfj"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use("/", express.static(path.join(__dirname, "/web")));
//app.use(express.urlencoded({ extended: true }));
//RUTAS
app.use("/", rutaUsu);
//app.use("/", rutaUsu);
app.use("/", negocioRutas);
//app.use("/", rutasProductosApis);

var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("servidor en http://localhost:" + port);
});
