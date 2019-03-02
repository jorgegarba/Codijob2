import {Empresa} from '../models/empresa';
import {connection} from '../../index';
export class EmpresaDTO{
    static getAll():void{
        let query = "SELECT * FROM t_empresa";
        connection.query(query,(err:any,result:any)=>{
            console.log(result);
        });
    }
}
