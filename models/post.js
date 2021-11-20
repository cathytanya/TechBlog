const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Post extends Model {}

// create fields/columns for Post model
Post.init(
    {
        // ID COLUMN IS CREATED WITH THE FOLLOWING FIELDS
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      // TITLECOLUMN IS CREATED WITH THE FOLLOWING FIELDS
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
        // POSTED CONTENT COLUMN IS CREATED WITH THE FOLLOWING FIELDS
      post_content: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      // user ID COLUMN IS CREATED WITH THE FOLLOWING FIELDS
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  );

  module.exports = Post;
