
// importando las rutas de SKILL
import {router_skill} from './api/routes/skill';

// Importamos la libreria desde node_modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// inicialización del puerto
const PUERTO = process.env.PORT || 3700;

// use => settea configuraciones de rutas, middlewares, cors, etc.

app.use('/api',router_skill);

// listen => lanza o ejecuta el servidor WEB
app.listen(PUERTO,()=>{
    console.log("Servidor corriendo perfectamente => localhost:3700");
});