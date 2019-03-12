// definiendo un modelo
// sequelize => la conexión a la base de datos
export var proyecto_model = (sequelize:any, type:any)=>{
    return sequelize.define("t_proyecto",{
        pro_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        pro_nom: {
            type: type.STRING,
            allowNull: false,
        },
        pro_desc: {
            type: type.TEXT,
            allowNull: false,
        },
        pro_fechin:{
            type: type.DATE,
            allowNull: false,
        },
        pro_fechfin:{
            type: type.DATE,
            allowNull: false
        }
    }, {
        timestamps: true,
        tableName: 't_proyecto'
      });
};