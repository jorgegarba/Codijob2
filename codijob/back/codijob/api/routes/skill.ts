import {Router} from 'express';
import {controller_skill} from '../controllers/skill';

export var router_skill = Router();

router_skill.get('/skill/getall',controller_skill.getAll);
