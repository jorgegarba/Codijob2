import {Router} from 'express';
import {controller_empresa} from '../controllers/empresa';
export var router_empresa = Router();

router_empresa.get('/empresa/getall',controller_empresa.getAll);
router_empresa.get('/empresa/delete',controller_empresa.deleteById);
router_empresa.get('/empresa/create',controller_empresa.create);
router_empresa.get('/empresa/update',controller_empresa.updateById);