export class Skill{
    private _skill_id:number;
    private _skill_nom:string;
    private _skill_desc:string;
    private _skill_img:string;

    constructor(){
        this._skill_id= 0;
        this._skill_nom= "";
        this._skill_desc= "";
        this._skill_img= "";
    }

    get skill_id():number{
        return this._skill_id;
    }
    set skill_id(_skill_id:number){
        this._skill_id = _skill_id;
    }

    get skill_nom():string{
        return this._skill_nom;
    }
    set skill_nom(_skill_nom:string){
        this._skill_nom = _skill_nom;
    }

    get skill_desc():string{
        return this._skill_desc;
    }
    set skill_desc(_skill_desc:string){
        this._skill_desc = _skill_desc;
    }

    get skill_img():string{
        return this._skill_img;
    }
    set skill_img(_skill_img:string){
        this._skill_img = _skill_img;
    }
}