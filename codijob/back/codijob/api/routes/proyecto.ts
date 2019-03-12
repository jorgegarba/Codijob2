import {Router} from 'express';
import {controller_proyecto} from '../controllers/proyecto';

export var router_proyecto = Router();

router_proyecto.post('/proyecto/create',controller_proyecto.create);
