// definiendo el modelo
// sequelize => la conexión a la base de datos

export var skill_model = (sequelize:any, type:any)=>{
    return sequelize.define('t_skill',{
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
        
        timestamps: true, // Campos de creación y actualización de los registros de la tabla

        tableName:'t_skill'
        // // I don't want createdAt
        // createdAt: false,

        // // I want updatedAt to actually be called updateTimestamp
        // updatedAt: 'updateTimestamp',

        // // And deletedAt to be called destroyTime (remember to enable paranoid for this to work)
        // deletedAt: 'destroyTime',
        // paranoid: true
    }); 
};