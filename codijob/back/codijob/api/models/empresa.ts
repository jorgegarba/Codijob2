export class Empresa{
    private _emp_id:number;
    private _emp_nom:string;
    private _emp_img:string;
    
    constructor(){
        this._emp_id=0;
        this._emp_nom="";
        this._emp_img="";
    }

    get emp_id():number{
        return this._emp_id;
    }
    set emp_id(_emp_id:number){
        this._emp_id = _emp_id;
    }

    get emp_nom():string{
        return this._emp_nom;
    }
    set emp_nom(_emp_nom:string){
        this._emp_nom = _emp_nom;
    }

    get emp_img():string{
        return this._emp_img;
    }
    set emp_img(_emp_img:string){
        this._emp_img = _emp_img;
    }

    
}