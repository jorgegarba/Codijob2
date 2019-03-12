export var proyectoskill_model = (sequelize:any, type:any)=>{
    return sequelize.define("t_proyectoskill",{
        proskill_id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

    },{
        timestamps:true,
        tableName: 't_proyectoskill'
    });
}