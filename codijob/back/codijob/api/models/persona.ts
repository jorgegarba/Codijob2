export var persona_model = (sequelize:any, type:any)=>{
    return sequelize.define('t_persona',{
        per_id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        per_nom:
        {
            type: type.STRING(50),
            allowNull: true
        },
        per_ape:
        {
            type: type.STRING(50),
            allowNull: true
        },
        per_email:
        {
            type: type.STRING(45),
            allowNull: true
        },
        per_tel:
        {
            type: type.STRING(45),
            allowNull: true
        },
        per_dni:
        {
            type: type.STRING(45),
            allowNull: true
        },
        per_fech:
        {
            type: type.DATE,
            allowNull: true
        }
    },
    {        
        timestamps: true,
        tableName:'t_persona'
    }); 
};