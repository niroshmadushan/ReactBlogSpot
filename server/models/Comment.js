module.exports=(sequelize,DataTypes)=>{
    const Comment = sequelize.define("Comment",{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
       comment:{
            type:DataTypes.STRING,
            allowNull:false
        },
        pid:{
            type:DataTypes.STRING,
            allowNull:false
        },
       
    });
    return Comment;
};