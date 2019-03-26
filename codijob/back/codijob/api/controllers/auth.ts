import {Response, Request} from 'express';
import {Persona, Usuario} from '../config/sequelize';

export var controller_auth = {
    registrar: (req:Request, res:Response)=>{
        var objPersona = Persona.build(req.body);
        var objUsuario = Usuario.build();
        objUsuario.setPassword(req.body.usu_pass);

        objPersona.save().then((personaCreada:any)=>{
            if(personaCreada != null){
                objUsuario.per_id = personaCreada.per_id;
                return objUsuario.save();
            }else{
                let response = {
                    messsage:"error",
                    content: "Error al crear la persona"
                };
                res.status(500).send(response);
            }
        }).then((usuarioCreado:any)=>{
            if(usuarioCreado){
                return usuarioCreado.generateJWT();
            }else{
                let response = {
                    message: "error",
                    content: "Se creó a la persona, pero no al usuario"
                };
                res.status(201).send(response);
            }
        }).then((token:any)=>{
            let response = {
                message: "created",
                content: objUsuario,
                token: token
            };
            res.status(201).send(response);
        });
    },
    login:(req:Request, res:Response)=>{
        let objPersona = Persona.build();
        let objUsuario = Usuario.build();
        Persona.findAll({
            where:{
                per_email: req.body.per_email
            }
        }).then((personasEncontradas:any)=>{
            if(personasEncontradas.length > 0){
                objPersona = personasEncontradas[0];
                return Usuario.findAll({
                    where:{
                        per_id: objPersona.per_id
                    }
                });
            }else{
                let response = {
                    message:'error',
                    content:'El email no está registrado'
                };
                res.status(500).send(response);
            }
        }).then((usuariosEncontrados:any)=>{
            if(usuariosEncontrados.length > 0){
                objUsuario = usuariosEncontrados[0];
                if(objUsuario.validPassword(req.body.usu_pass)==true){
                    //usuario con password autentico

                }else{
                    let response = {
                        message: 'error',
                        content: 'Contraseña Incorrecta'
                    }
                    res.status(500).send(response);
                }
            }else{
                let response = {
                    message: 'error',
                    content: 'No existe un usuario para esa persona'
                }
                res.status(500).send(response);
            }
        });
    }
}