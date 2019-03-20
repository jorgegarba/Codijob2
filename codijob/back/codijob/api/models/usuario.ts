const crypto = require('crypto');

export var usuario_model = (sequelize:any, type:any)=>{
    let usuarioModel =  sequelize.define('t_usuario',{
        usu_id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        usu_tipo:
        {
            type: type.STRING(1),
            allowNull: true,
            defaultValue:"p"
        },
        usu_hash:
        {
            type: type.TEXT,
            allowNull: true,
            defaultValue:'hash por defecto'
        },
        usu_salt:
        {
            type: type.TEXT,
            allowNull: true,
            defaultValue:'salt por defecto'
        },
        usu_img:
        {
            type: type.STRING(100),
            allowNull: true,
            defaultValue:'img por defecto'
        },
        usu_lat:
        {
            type: type.STRING(20),
            allowNull: true,
            defaultValue:'0',
        },
        usu_lng:
        {
            type: type.STRING(20),
            allowNull: true,
            defaultValue:'0'
        },
        usu_www:
        {
            type: type.STRING(100),
            allowNull: true,
            defaultValue:'www.example.com'
        },
        usu_git:
        {
            type: type.STRING(100),
            allowNull: true,
            defaultValue:'www.git.com'
        },
        usu_fb:
        {
            type: type.STRING(100),
            allowNull: true,
            defaultValue:'www.fb.com'
        }
    },
    {        
        timestamps: true,
        tableName:'t_usuario'
    });

    usuarioModel.prototype.setPassword = function(password:string){
        this.usu_salt = crypto.randomBytes(16).toString("hex");
        this.usu_hash = crypto.pbkdf2Sync(password,this.usu_salt,1000,64,'sha512').toString('hex');
    };

    return usuarioModel;
};