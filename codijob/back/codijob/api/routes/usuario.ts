import {Router,Request,Response,NextFunction} from 'express';
import {controller_usuario} from '../controllers/usuario';

export var router_usuario = Router();

var verificar = (req:any,res:Response,next:NextFunction)=>{
    console.log(req.headers);
    const bearerHeader = req.headers["authorization"];
    console.log(bearerHeader);

    if(typeof bearerHeader !== 'undefined'){
        const token = bearerHeader.split(" ")[1];
        req.token = token;
        next();
    }else{
        res.status(403).send("PROHIBIDO");
    }
}

router_usuario.post('/usuario/create/:per_id',controller_usuario.create);
router_usuario.post('/usuario/privado',verificar,controller_usuario.privado);
