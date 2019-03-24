import {Response, Request} from 'express';
import {Usuario} from '../config/sequelize';
import {Persona} from  '../config/sequelize';
var jwt = require('jsonwebtoken');
export var controller_usuario = {
    create: (req:Request, res:Response)=>{
        
        let per_id = req.params.per_id;
        var objUsuario = Usuario.build(req.body);
        Persona.findById(per_id).then((persona:any)=>{
            if(persona){
                objUsuario.per_id = req.params.per_id;
                objUsuario.setPassword(req.body.password);
                return objUsuario.save();
            }
        }).then((usuarioCreado:any)=>{
            return usuarioCreado.generateJWT();
        }).then((token:any)=>{
            let response = {
                message:'created',
                content: objUsuario,
                token:token
            };
            res.status(201).send(response);
        });




    },
    privado:(req:Request, res:Response)=>{
        jwt.verify(req.token,'sape',(err:any,payload:any)=>{
            if(err){
                res.status(403).send(err);
            }else{
                let response = {
                    message:"validado",
                    content:payload
                };
                res.status(200).send(response);
            }
        });
    }
}