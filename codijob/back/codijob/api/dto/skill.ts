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
    static create(skill:Skill):Promise<any>{
        let query = "INSERT INTO `codijob`.`t_skill`(`skill_nom`, `skill_desc`, `skill_img`) VALUES ('"+skill.skill_Nom+"', '"+skill.skill_Desc+"', '"+skill.skill_Img+"')";
        return new Promise((resolve:any,reject:any)=>{
            connection.query(query,(error:any,result:any)=>{
                if(error){
                    reject(error);
                }
                // result.insertId => tiene el id del objeto creado
                skill.skill_Id = result.insertId;
                resolve(skill);
            });    
        });        
    }
    static update(skill:Skill){
        let query = "UPDATE `codijob`.`t_skill` SET `skill_nom` = '"+skill.skill_Nom+"', `skill_desc` = '"+skill.skill_Desc+"', `skill_img` = '"+skill.skill_Img+"' WHERE (`skill_id` = '"+skill.skill_Id+"')";
        connection.query(query,(error:any,result:any)=>{
            if(error){
                console.log("ERROR AL EJECUTAR");
                console.log(query);
            }
            console.log("SKILL ACTUALIZADO");
            console.log(result);
        });
    }
    
}