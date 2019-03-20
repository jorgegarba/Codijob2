import {Router} from 'express';
import {controller_usuario} from '../controllers/usuario';

export var router_usuario = Router();

router_usuario.post('/usuario/create/:per_id',controller_usuario.create);
