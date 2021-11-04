const {Models, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}
// create the comment table
Comment.init(
    {
        // ID column was made with the following characteristics
        id:{
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // USER_ID column was created with the following characteristics
        user_id:{
            type: DataType.INTEGER,
            allowNull: false,
            reference:{
                module:'user',
                key:'id'
            }
        },
        // POST_ID column was created with the following characteristics
        post_id:{
            type: DataType.INTEGER,
            allowNull: false,
            reference:{
                module:'post',
                key:'id'
            }
        },
        // COMMENT_ID column was created with the following characteristics
        comment_id:{
            type: DataType.STRING,
            allowNull: false,
            validate:{
                len:[1]
            }
        },      
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName:'comment'
    }
)
module.exports=Comment;