// connecting to the modules for the following model files
const Comment= require('./comment.js')
const Post = require('./post.js')
const User = require('./user.js');

// creating the associations
// relate the foreign key from User model(userID) to the Post model
User.hasMany(Post,{
    foreignKey:"user_id"
})
// relate the post model to the user file
Post.belongsTo(User, {
    foreignKey: 'user_id',
});
// relate the foreign key from Comment model(userID) to the User model
Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
// User model relates Comment model(userID)
User.hasMany(Comment, {
    foreignKey: 'user_id'
});
// relate the foreign key from Comment model(userID) to the Post model

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});
// POST model relates Comment model(userID)
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = {User, Post, Comment};