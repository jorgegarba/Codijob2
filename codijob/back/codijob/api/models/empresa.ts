export class Empresa{
    private emp_id:number;
    private emp_nom:string;
    private emp_img:string;
    
    constructor(){
        this.emp_id=0;
        this.emp_nom="";
        this.emp_img="";
    }

    get emp_Id():number{
        return this.emp_id;
    }
    set emp_Id(emp_id:number){
        this.emp_id = emp_id;
    }

    get emp_Nom():string{
        return this.emp_nom;
    }
    set emp_Nom(emp_nom:string){
        this.emp_nom = emp_nom;
    }

    get emp_Img():string{
        return this.emp_img;
    }
    set emp_Img(emp_img:string){
        this.emp_img = emp_img;
    }

    
}