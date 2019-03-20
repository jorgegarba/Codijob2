import {Router} from 'express';
import {controller_persona} from '../controllers/persona';

export var router_persona = Router();

router_persona.post('/persona/create',controller_persona.create);
