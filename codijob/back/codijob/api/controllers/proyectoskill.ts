import {Response, Request} from 'express';
import {ProyectoSkill} from '../config/sequelize';
import {Skill} from '../config/sequelize';
import {Proyecto} from '../config/sequelize';
// forma 1 METODO GET
// ruta => /api/:parametro/ruta
// ejm => /api/1/ruta
// req.params.paremetro

// forma 2 METODO GET
// ruta => /api/ruta
// ejm => /api/ruta?parametro=8
// req.query.parametro

export var controller_proyectoskill = {
    create: (req:Request, res:Response)=>{
        Skill.findById(req.body.skill_id).then((skill:any)=>{
            if(skill != null){
                return Proyecto.findById(req.body.pro_id);
            }else{
                console.log("error con el skill");
                let response = {
                    message:"error",
                    content:"El Skill no existe"
                }
                res.status(500).send(response);
                throw ("ERROR => El Skill no existe");
            }
        }).then((proyecto:any)=>{
            if(proyecto != null){
                return ProyectoSkill.create(req.body);
            }else{
                console.log("error con el proyecto");
                let response = {
                    message:"error",
                    content:"El Skill existe, pero el Proyeto, no"
                }
                res.status(500).send(response);
                throw ("ERROR => El Proyecto no existe");
            }
        }).then((proyectoSkillCreado:any)=>{
            if(proyectoSkillCreado!=null){
                let response = {
                    message:"created",
                    content:proyectoSkillCreado
                }
                res.status(201).send(response);
            }else{
                console.log("error con el proyectoskill");
                let response = {
                    message:"error",
                    content:"Error al crear el Proyecto Skill"
                }
                res.status(500).send(response);
                throw ("ERROR => No se pudo crear el Proyecto Skill");

            }
        }).catch((error:any)=>{
            console.log("ERROR => ", error);
        });
    },
    getSkillsByProyectoId: (req:Request, res:Response)=>{
        ProyectoSkill.findAll(
            {
                include:[{
                    model: Skill,
                    attributes:['skill_nom','skill_desc']
                },{
                    model: Proyecto
                }],
                where:{
                    pro_id: req.params.pro_id
                }
            }).then((response:any)=>{
                res.send(response);
            });
    }
}