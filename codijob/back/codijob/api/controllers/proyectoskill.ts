import {Response, Request} from 'express';
import {ProyectoSkill} from '../config/sequelize';
import {Skill} from '../config/sequelize';
import {Proyecto} from '../config/sequelize';

export var controller_proyectoskill = {
    create: (req:Request, res:Response)=>{
        Skill.findById(req.body.skill_id).then((skill:any)=>{
            Proyecto.findById(req.body.pro_id).then((proyecto:any)=>{
                ProyectoSkill.create(req.body).then((proyectoskill:any)=>{
                    let response = {
                        message:"created",
                        content:proyectoskill
                    }
                    res.status(201).send(response);
                }).catch((error:any)=>{
                    let response = {
                        message:"error",
                        content:"error al crear"
                    }
                    res.status(500).send(response);
                });
            }).catch((error:any)=>{
                let response = {
                    message:"error",
                    content:"El proyecto no existe"
                }
                res.status(500).send(response);
            });
        }).catch((error:any)=>{
            let response = {
                message:"error",
                content:"El Skill no existe"
            }
            res.status(500).send(response);
        });
    },
}










// 
Skill.findById(req.body.skill_id).then((skill:any)=>{
    Proyecto.findById(req.body.pro_id).then((proyecto:any)=>{
        ProyectoSkill.create(req.body).then((proyectoSkillCreado:any)=>{
            let response = {
                message:"created",
                content:proyectoSkillCreado
            }
            res.status(201).send(response);
        });
    }).catch(()=>{
        let response = {
            message:"error",
            content:`El proyecto con id ${req.body.pro_id} no existe`
        }
        res.status(500).send(response);
    });
}).catch(()=>{
    let response = {
        message:"error",
        content:`El Skill con id ${req.body.skill_id} no existe`
    }
    res.status(500).send(response);
});   