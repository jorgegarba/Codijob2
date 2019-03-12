import {Response, Request} from 'express';
import {Proyecto} from '../config/sequelize';
export var controller_proyecto = {
    create: (req:Request, res:Response)=>{
        Proyecto.create(req.body).then((proyectoCreado:any)=>{
            let response = {
                message:"created",
                content:proyectoCreado
            }
            res.status(201).send(response);
        });
    },
}