import {Request, Response} from 'express';
import {EmpresaDTO} from '../dto/empresa';
export var controller_empresa = {
    getAll: (req:Request,res:Response)=>{
        EmpresaDTO.getAll();
        res.send("Entregando todas las empresas");
    },
    updateById: (req:Request,res:Response)=>{
        res.send("Actualizando una empresa dado su ID");
    },
    deleteById: (req:Request,res:Response)=>{
        res.send("Eliminando una empresa dado su ID");
    },
    create: (req:Request,res:Response)=>{
        res.send("Creando una nueva empresa");
    }
}