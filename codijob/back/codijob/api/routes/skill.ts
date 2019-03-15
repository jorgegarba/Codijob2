import {Router} from 'express';
import {controller_skill} from '../controllers/skill';

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir:'./imagenes'});

export var router_skill = Router();

router_skill.get('/skill/getall',controller_skill.getAll);
router_skill.post('/skill/create',multipartMiddleware,controller_skill.create);
router_skill.post('/skill/update',controller_skill.update);
