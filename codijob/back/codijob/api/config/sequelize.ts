// En este archivo iré la configuración
// e inicialización , migración de nuestros modelos
// a la base de datos
// usando el principio de Code First

import { skill_model } from '../models/skill';
import { proyecto_model } from '../models/proyecto';
import { proyectoskill_model } from '../models/proyectoskill';
import { usuario_model } from '../models/usuario';
import { usuarioskill_model } from '../models/usuarioskill';
import { usuarioproyecto_model } from '../models/usuarioproyecto';
import { imagenproyecto_model } from '../models/imagenproyecto';
import { empresa_model } from '../models/empresa';
import { usuarioempresa_model } from '../models/usuarioempresa';
import { persona_model } from '../models/persona';
const Sequelize = require('sequelize');

const sequelize = new Sequelize('codijob2','root','',{
    host:'localhost',
    dialect: 'mysql',
    operatorAliases: false,
    pool: {
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    timezone: '-05:00'
});

export const ImagenProyecto = imagenproyecto_model(sequelize, Sequelize);
export const Proyecto = proyecto_model(sequelize, Sequelize);
export const Skill = skill_model(sequelize,Sequelize);
export const ProyectoSkill = proyectoskill_model(sequelize, Sequelize);
export const Usuario = usuario_model(sequelize, Sequelize);
export const UsuarioSkill = usuarioskill_model(sequelize, Sequelize);
export const UsuarioProyecto = usuarioproyecto_model(sequelize, Sequelize);
export const Empresa = empresa_model(sequelize, Sequelize);
export const UsuarioEmpresa = usuarioempresa_model(sequelize, Sequelize);
export const Persona = persona_model(sequelize, Sequelize);

// belongsTo crea una clave foranea
ProyectoSkill.belongsTo(Skill, {foreignKey:'skill_id'});
ProyectoSkill.belongsTo(Proyecto, {foreignKey:'pro_id'});

UsuarioSkill.belongsTo(Usuario, {foreignKey: 'usu_id'});
UsuarioSkill.belongsTo(Skill, {foreignKey: 'skill_id'});

UsuarioProyecto.belongsTo(Usuario, {foreignKey: 'usu_id'});
UsuarioProyecto.belongsTo(Proyecto, {foreignKey: 'pro_id'});

ImagenProyecto.belongsTo(Proyecto, {foreignKey: 'pro_id'});

UsuarioEmpresa.belongsTo(Empresa, {foreignKey: 'emp_id'});
UsuarioEmpresa.belongsTo(Usuario, {foreignKey: 'usu_id'});

Usuario.belongsTo(Persona, {foreignKey: 'per_id'});

// Para borrar tablas en cascada
// raw:true, se debe especificar cuando se hará una consulta T-SQL
sequelize.query('SET FOREIGN_KEY_CHECKS = 0', {raw:true}).then(()=>{
    // force == true: cada vez que el proyecto inicie (npm star), toda la data y tablas, se van a borrar y crear nuevamente.
    // force == false: solo va crear las tablas y/o campos que no figuren actualmente en nuestra base de datos. No se borran los datos.
    sequelize.sync({force:true}).then(()=>{
        console.log("Base de datos creada con éxito");
    }).catch(()=>{
        console.log();
    });
});


// // En este archivo irá la configuración
// // e inicialización, migración de nuestros modelos
// // a la base de datos
// // usando el principio CODE FIRST

// import {skill_model} from '../models/skill';
// import {proyecto_model} from '../models/proyecto';
// import {proyectoskill_model} from '../models/proyectoskill';

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('codijob2', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
//     pool: {
//       max: 10,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     },
//     timezone: '-05:00', // for writing to database
// });

// export const Skill = skill_model(sequelize,Sequelize);
// export const Proyecto = proyecto_model(sequelize,Sequelize);
// export const ProyectoSkill = proyectoskill_model(sequelize,Sequelize);
// //ProyectoSkill.belongsTo(Skill);
// //Crea una clave foránea en la tabla ProyectoSkill de la tabla Skill
// ProyectoSkill.belongsTo(Skill,{foreignKey:'skill_id'});
// ProyectoSkill.belongsTo(Proyecto,{foreignKey:'pro_id'});

// // force => true; cada vez que el proyecto incie (npm start)
// //          toda la data y tablas, se van a borrar y crear nuevamente
// //          sin datos.
// // force => false; solo va a crear las tablas y/o campos que no figuren
// //          actualmente en nuestra base de datos
// //          los datos no se van a borrar.
// //raw:true, se debe especificar cuando se hará una consulta T-SQL
// sequelize.query('SET FOREIGN_KEY_CHECKS = 0',{raw:true}).then(()=>{
//   sequelize.sync({force:false}).then(()=>{
//     console.log("Base de datos creada con éxito");    
//   });
// });
