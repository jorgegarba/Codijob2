// importando la ruta de HOME
import {router_home} from './api/routes/home';
// importando las rutas de EMPRESA
import {router_empresa} from './api/routes/empresa';
// importando las rutas de SKILL
import {router_skill} from './api/routes/skill';

// Importamos la libreria desde node_modules
var express = require('express');
var app = express();

// Realizando la Conexion a MySql;
var mysql = require('mysql');
export var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'codijob'
});



// inicialización del puerto
const PUERTO = process.env.PORT || 3700;

// use => settea configuraciones de rutas, middlewares, cors, etc.
app.use('/api',router_home);
app.use('/api',router_empresa);
app.use('/api',router_skill);
// listen => lanza o ejecuta el servidor WEB
app.listen(PUERTO,()=>{
    console.log("Servidor corriendo perfectamente => localhost:3700");
    connection.connect((error:any)=>{
        if(error){
            throw(error);
        }
        console.log("Conectado a la base de datos correctamente");
    });
});