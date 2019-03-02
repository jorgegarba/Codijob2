import {Request, Response} from 'express';

var controller_home = {
    home: function(req:Request, res:Response){
        res.send("HOLA SOY EL SERVIDOR =)");
    },
    otraruta: function(req:Request, res:Response){
        res.send("Esta es otra rut");
    }
}
// SI USAMOS 
// => module.exports = controller_home;
// En otro archivo lo importamos como:
// => var [nombre_cualquiera] = require([ruta_del_archivo]);

// SI USAMOS 
// => exports var controller_home = .....
// En otro archivo lo importamos como:
// => Import {controller_home} from 'ruta_del_archivo';
module.exports = controller_home;

