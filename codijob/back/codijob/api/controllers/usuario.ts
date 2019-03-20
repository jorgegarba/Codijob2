import {Response, Request} from 'express';
import {Usuario} from '../config/sequelize';
import {Persona} from  '../config/sequelize';
export var controller_usuario = {
    create: (req:Request, res:Response)=>{
        
        let per_id = req.params.per_id;

        Persona.findById(per_id).then((persona:any)=>{
            if(persona){
                var objUsuario = Usuario.build();
                objUsuario.setPassword(req.body.password);
                return objUsuario.save();
            }
        }).then((usuarioCreado:any)=>{
            res.status(201).send(usuarioCreado);
        });
    },
}