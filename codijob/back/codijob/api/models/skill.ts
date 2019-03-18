// definiendo el modelo
// sequelize => la conexión a la base de datos

export var skill_model = (sequelize:any, type:any)=>{
    var skill_model = sequelize.define('t_skill',{
        skill_id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        skill_nom:
        {
            type: type.STRING,
            allowNull: true // No nulo
        },
        skill_desc:
        {
            type: type.STRING,
            allowNull: true // No nulo
        },
        skill_img:
        {
            type: type.STRING,
            allowNull: true // No nulo
        }
    },
    {
        
        timestamps: true,
        tableName:'t_skill',
        // instanceMethods:{
        //     saludar : function(nombre:string){
        //         return `Hola ${nombre}`;
        //     }
        // }
    });

    return skill_model;
    
};