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
        SkillDTO.create(skill).then((skill:Skill)=>{
            let respuesta = {
                mensaje:"creado",
                content:skill
            }
            res.status(201).send(respuesta);
        }).catch((error)=>{
            let respuesta = {
                mensaje:"error",
                content:error
            }
            res.status(500).send(respuesta);
        });        
    },
    update: (req:Request, res:Response)=>{
        // creando un objeto skill vacio
        let skill = new Skill();
        // obteniendo los parametros recibidos por post
        let params = req.body;
        // creando los campos del objetco skill
        skill.skill_Nom = params.skill_nom;
        skill.skill_Desc = params.skill_desc;
        skill.skill_Img = params.skill_img;
        skill.skill_Id = params.skill_id;
        // invocando a la funcion create(funcion estatica)
        // le mandamos todo el objeto skill sin su ID
        SkillDTO.update(skill);
        res.send("OK");
    },

}