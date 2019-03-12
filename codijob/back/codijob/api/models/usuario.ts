export var usuario_model = (sequelize:any, type:any)=>{
    return sequelize.define('t_usuario',{
        usu_id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        usu_tipo:
        {
            type: type.STRING(1),
            allowNull: true
        },
        usu_hash:
        {
            type: type.TEXT,
            allowNull: true
        },
        usu_salt:
        {
            type: type.TEXT,
            allowNull: true
        },
        usu_img:
        {
            type: type.STRING(100),
            allowNull: true
        },
        usu_lat:
        {
            type: type.STRING(20),
            allowNull: true
        },
        usu_lng:
        {
            type: type.STRING(20),
            allowNull: true
        },
        usu_www:
        {
            type: type.STRING(100),
            allowNull: true
        },
        usu_git:
        {
            type: type.STRING(100),
            allowNull: true
        },
        usu_fb:
        {
            type: type.STRING(100),
            allowNull: true
        }
    },
    {        
        timestamps: true,
        tableName:'t_usuario'
    }); 
};