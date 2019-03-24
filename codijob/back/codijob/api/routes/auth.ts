import {Router} from 'express';
import {controller_auth} from '../controllers/auth';

export var router_auth = Router();

router_auth.post('/auth/registrar',controller_auth.registrar);
router_auth.post('/auth/login',controller_auth.login);
