export var usuarioempresa_model = (sequelize:any, type:any)=>{
    return sequelize.define('t_usuarioempresa',{
        usuemp_id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        usuemp_cargo:
        {
            type: type.STRING(50),
            allowNull: true
        },
        usuemp_fechin:
        {
            type: type.DATE,
            allowNull: true
        },
        usuemp_fechfin:
        {
            type: type.DATE,
            allowNull: true
        },
        usuemp_desc:
        {
            type: type.TEXT,
            allowNull: true
        }
    },
    {        
        timestamps: true,
        tableName:'t_usuarioempresa'
    }); 
};