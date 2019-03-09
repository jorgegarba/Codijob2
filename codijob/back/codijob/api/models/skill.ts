// definiendo un modelo
// sequelize => la conexión a la base de datos
export var skill_model = (sequelize:any, type:any)=>{
    return sequelize.define("t_skill",{
        skill_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        skill_nom: type.STRING,
        skill_desc: type.STRING,
        skill_img: type.STRING
    }, {
        timestamps:false
    });
};