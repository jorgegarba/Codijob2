export var usuarioskill_model = (sequelize:any, type:any)=>{
    return sequelize.define('t_usuarioskill',{
        ususkill_id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        ususkill_lvl:
        {
            type: type.INTEGER,
            allowNull: true
        }
    },
    {       
        timestamps: true,
        tableName:'t_usuarioskill'
    }); 
};