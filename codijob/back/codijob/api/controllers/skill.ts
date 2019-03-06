import {SkillDTO} from '../dto/skill';
import {Response, Request} from 'express';
import {Skill} from '../models/skill';
export var controller_skill = {
    getAll: (req:Request, res:Response)=>{
        
        SkillDTO.getAll().then((skills:Array<Skill>)=>{
            console.log(skills);
            res.send(skills);
        }).catch((error)=>{
            console.log(error);
        });
        
    }
}