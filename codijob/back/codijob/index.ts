
// importando las rutas de SKILL
import {router_skill} from './api/routes/skill';
import {router_home} from './api/routes/home';
import {router_proyecto} from './api/routes/proyecto';
import {router_proyectoskill} from './api/routes/proyectoskill';

// Importamos la libreria desde node_modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// Configurar cabeceras y cors
app.use((req:any, res:any, next:any) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});
  
// inicialización del puerto
const PUERTO = process.env.PORT || 3700;

// use => settea configuraciones de rutas, middlewares, cors, etc.

app.use('/api',router_skill);
app.use('/api',router_home);
app.use('/api',router_proyecto);
app.use('/api',router_proyectoskill);

// listen => lanza o ejecuta el servidor WEB
app.listen(PUERTO,()=>{
    console.log("Servidor corriendo perfectamente => localhost:3700");
});