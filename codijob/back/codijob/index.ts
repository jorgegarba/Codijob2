// importando la ruta de HOME
import {router_home} from './api/routes/home';

// Importamos la libreria desde node_modules
var express = require('express');
var app = express();

// inicialización del puerto
const PUERTO = process.env.PORT || 3700;

// use => settea configuraciones de rutas, middlewares, cors, etc.
app.use('/api',router_home);
// listen => lanza o ejecuta el servidor WEB
app.listen(PUERTO,()=>{
    console.log("Servidor corriendo perfectamente => localhost:3700");
});