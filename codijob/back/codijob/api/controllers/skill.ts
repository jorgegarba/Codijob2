import {SkillDTO} from '../dto/skill';
import {Response, Request} from 'express';
import {Skill} from '../models/skill';
export var controller_skill = {
    getAll: (req:Request, res:Response)=>{
        console.log(`Variable 'a' => ${req.query.a}`);
        SkillDTO.getAll().then((skills:Array<Skill>)=>{
            console.log(skills);
            res.send(skills);
        }).catch((error)=>{
            console.log(error);
        });
    },
    create: (req:Request, res:Response)=>{
        // creando un objeto skill vacio
        let skill = new Skill();
        // obteniendo los parametros recibidos por post
        let params = req.body;
        // creando los campos del objetco skill
        skill.skill_Nom = params.skill_nom;
        skill.skill_Desc = params.skill_desc;
        skill.skill_Img = params.skill_img;
        // invocando a la funcion create(funcion estatica)
        // le mandamos todo el objeto skill sin su ID
        SkillDTO.create(skill);

        res.send("OK");
        
    }

}