// En este archivo irá la configuración
// e inicialización, migración de nuestros modelos
// a la base de datos
// usando el principio CODE FIRST

import {skill_model} from '../models/skill';
import {proyecto_model} from '../models/proyecto';
import {proyectoskill_model} from '../models/proyectoskill';

const Sequelize = require('sequelize');

const sequelize = new Sequelize('codijob2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    timezone: '-05:00', // for writing to database
});

export const Skill = skill_model(sequelize,Sequelize);
export const Proyecto = proyecto_model(sequelize,Sequelize);
export const ProyectoSkill = proyectoskill_model(sequelize,Sequelize);
//ProyectoSkill.belongsTo(Skill);
//Crea una clave foránea en la tabla ProyectoSkill de la tabla Skill
ProyectoSkill.belongsTo(Skill,{foreignKey:'skill_id'});
ProyectoSkill.belongsTo(Proyecto,{foreignKey:'pro_id'});

// force => true; cada vez que el proyecto incie (npm start)
//          toda la data y tablas, se van a borrar y crear nuevamente
//          sin datos.
// force => false; solo va a crear las tablas y/o campos que no figuren
//          actualmente en nuestra base de datos
//          los datos no se van a borrar.
//raw:true, se debe especificar cuando se hará una consulta T-SQL
sequelize.query('SET FOREIGN_KEY_CHECKS = 0',{raw:true}).then(()=>{
  sequelize.sync({force:true}).then(()=>{
    console.log("Base de datos creada con éxito");    
  });
});



