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
                    skill.skill_id = skillDB.skill_id;
                    skill.skill_desc = skillDB.skill_desc;
                    skill.skill_nom = skillDB.skill_nom;
                    skill.skill_img = skillDB.skill_img;
                    skills.push(skill);
                });
                resolve(skills);
            });
        });
    
        
        
    }
}