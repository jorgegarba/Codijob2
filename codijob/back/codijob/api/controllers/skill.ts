import {Response, Request} from 'express';

import {Skill} from '../config/sequelize';

export var controller_skill = {
    getAll: (req:Request, res:Response)=>{
        Skill.findAll().then((skills:any)=>{
            console.log(skills);
            res.status(200).send("OK");
        })
    },
    create: (req:Request, res:Response)=>{
             
    },
    update: (req:Request, res:Response)=>{
        
    }
}