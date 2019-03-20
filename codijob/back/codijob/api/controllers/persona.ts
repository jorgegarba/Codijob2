import {Response, Request} from 'express';
import {Persona} from '../config/sequelize';
export var controller_persona = {
    create: (req:Request, res:Response)=>{
        //creando una instancia u obj de la clase Persona
        //OJO=> Solo es instancia, no se guardó en la BD
        let objPersona = Persona.build(req.body);
        console.log(objPersona);
        objPersona.saludar();
        //guardando al objeto en la BD
        objPersona.save().then((personaCreada:any)=>{
            if(personaCreada){
                let response = {
                    message:'created',
                    content:personaCreada
                }
                res.status(201).send(response);
            }else{
                let response = {
                    message:'error',
                    content:'error al crear la persona'
                }
                res.status(500).send(response);
            }                        
        })
    },
}