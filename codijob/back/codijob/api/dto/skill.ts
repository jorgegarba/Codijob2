import {Skill} from '../models/skill';
import {connection} from '../../index';

export class SkillDTO{
    static getAll():Promise<any>{
        let query = "SELECT * FROM t_skill";

        return new Promise((resolve, reject)=>{
            connection.query(query,(err:any,result:any)=>{
                if(err){
                    reject(err);
                }
                let skills:Array<Skill> = [];
                if(result.length === 0){
                    resolve(skills);
                }
                result.forEach((skillDB:any) => {
                    let skill:Skill = new Skill();
                    skill.skill_Id = skillDB.skill_id;
                    skill.skill_Desc = skillDB.skill_desc;
                    skill.skill_Nom = skillDB.skill_nom;
                    skill.skill_Img = skillDB.skill_img;
                    skills.push(skill);
                });
                resolve(skills);
            });
        });
    }
    // tarea crear el objeto con un procedure 
    static create(skill:Skill){
        let query = "INSERT INTO `codijob`.`t_skill`(`skill_nom`, `skill_desc`, `skill_img`) VALUES ('"+skill.skill_Nom+"', '"+skill.skill_Desc+"', '"+skill.skill_Img+"')";
        connection.query(query,(error:any,result:any)=>{
            if(error){
                console.log("ERROR AL EJECUTAR");
                console.log(query);
            }
            // result.insertId => tiene el id del objeto creado
            skill.skill_Id = result.insertId;
            console.log("OBJETO CREADO");
            console.log(skill);
        });
    }
    
}