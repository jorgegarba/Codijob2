// En este archivo irá la configuración
// e inicialización, migración de nuestros modelos
// a la base de datos
// usando el principio CODE FIRST

import {skill_model} from '../models/skill';
const Sequelize = require('sequelize');

const sequelize = new Sequelize('codijob2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});


export const Skill = skill_model(sequelize,Sequelize);
// force => true; cada vez que el proyecto incie (npm start)
//          toda la data y tablas, se van a borrar y crear nuevamente
//          sin datos.
// force => false; solo va a crear las tablas y/o campos que no figuren
//          actualmente en nuestra base de datos
//          los datos no se van a borrar.
sequelize.sync({force:true}).then(()=>{
    console.log("Base de datos creada con éxito");    
});

