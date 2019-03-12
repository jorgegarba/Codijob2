import {Response, Request} from 'express';

import {Skill} from '../config/sequelize';

export var controller_skill = {
    getAll: (req:Request, res:Response)=>{
        Skill.findAll().then((skills:any)=>{
            let response = {
                message:"ok",
                content:skills
            }
            res.status(200).send(response);
        })
    },
    create: (req:Request, res:Response)=>{
        Skill.create(req.body).then((skillCreado:any)=>{
            let response = {
                message:"created",
                content:skillCreado
            }
            res.status(200).send(response);
        });
    },
    update: (req:Request, res:Response)=>{
        Skill.update(
            {
                skill_desc: req.body.skill_desc,
                skill_nom: req.body.skill_nom,
                skill_img: req.body.skill_img,
            },
            {
                where: {
                    skill_id:req.body.skill_id
                }
            }).then((respuesta:any)=>{
                // respuesta[0] es 1 cuando se actualizado el registro correctamente
                // respuesta[0] es 0 cuando hubo un error
                if(respuesta[0]===1){
                    Skill.findById(req.body.skill_id).then((skill:any)=>{
                        let response = {
                            message:"updated",
                            content: skill
                        }
                        res.status(200).send(response);
                    })
                }else{
                    let response = {
                        message:"error",
                        content: "error"
                    }
                    res.status(500).send(response);
                }
            })
    }
}