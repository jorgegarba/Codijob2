export class Skill{
    private skill_id:number;
    private skill_nom:string;
    private skill_desc:string;
    private skill_img:string;

    constructor(){
        this.skill_id= 0;
        this.skill_nom= "";
        this.skill_desc= "";
        this.skill_img= "";
    }

    get skill_Id():number{
        return this.skill_id;
    }
    set skill_Id(skill_id:number){
        this.skill_id = skill_id;
    }

    get skill_Nom():string{
        return this.skill_nom;
    }
    set skill_Nom(skill_nom:string){
        this.skill_nom = skill_nom;
    }

    get skill_Desc():string{
        return this.skill_desc;
    }
    set skill_Desc(skill_desc:string){
        this.skill_desc = skill_desc;
    }

    get skill_Img():string{
        return this.skill_img;
    }
    set skill_Img(skill_img:string){
        this.skill_img = skill_img;
    }
}