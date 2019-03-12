import {Router} from 'express';
// import {controller_home} from '../controllers/home';
var controller_home = require('../controllers/home');
// Hacemos el enrutador exportable
//para que el index.ts pueda importarlo
export var router_home = Router();

import {ProyectoSkill} from '../config/sequelize';
import {Proyecto} from '../config/sequelize';

// GET es el verbo HTTP que va a escuchar nuestro server
//request => los datos que el servidor recibe de quien lo invoca
//response => objeto de respuesta a quien invoca la ruta
router_home.get('/',controller_home.home);
router_home.get('/consulta',(req:any, res:any)=>{
    
    let query = ProyectoSkill.findAll({
        include: [
            { 
                model: Proyecto 
            }
        ]
    });
    
    query.then((proyectos:any)=>{
        res.send(proyectos);

    });
});
router_home.get('/otraruta', controller_home.otraruta);

// esta es otra forma de exportar variables en NODE
// module.exports = router;

