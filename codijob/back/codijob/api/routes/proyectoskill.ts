import {Router} from 'express';
import {controller_proyectoskill} from '../controllers/proyectoskill';

export var router_proyectoskill = Router();

router_proyectoskill.post('/proyectoskill/create',controller_proyectoskill.create);
router_proyectoskill.get('/proyectoskill/proyecto/:pro_id/skills',controller_proyectoskill.getSkillsByProyectoId);
