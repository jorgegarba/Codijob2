import {Router} from 'express';
import {controller_skill} from '../controllers/skill';

export var router_skill = Router();

router_skill.get('/skill/getall',controller_skill.getAll);
router_skill.post('/skill/create',controller_skill.create);
router_skill.post('/skill/update',controller_skill.update);
