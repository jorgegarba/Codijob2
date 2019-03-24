export var persona_model = (sequelize:any, type:any)=>{
    let personaModel =  sequelize.define('t_persona',{
        per_id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        per_nom:
        {
            type: type.STRING(50),
            allowNull: true,
            defaultValue: "sin nombre"
        },
        per_ape:
        {
            type: type.STRING(50),
            allowNull: true,
            defaultValue: "sin apellido"
        },
        per_email:
        {
            type: type.STRING(45),
            allowNull: true,
            defaultValue: "sin email",
            unique: true
        },
        per_tel:
        {
            type: type.STRING(45),
            allowNull: true,
            defaultValue: "000000"
        },
        per_dni:
        {
            type: type.STRING(45),
            allowNull: true,
            defaultValue: "00000000"
        },
        per_fech:
        {
            type: type.DATE,
            allowNull: true,
            defaultValue: new Date()
        },
    },
    {        
        timestamps: true,
        tableName:'t_persona'
    });

    personaModel.prototype.saludar = function(){
        console.log(this.per_nom + " te saluda");
    }

    return personaModel;
};




