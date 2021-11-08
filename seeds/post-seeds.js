const { Post } = require('../models');
// enbedding the seeds into the Post model
// they filled in the title, post content and user ID column
const postData = [
    {
        title: "JavaScript!",
        post_content: "JS is very different and hard to learn",
        user_id: 3
    },
    {
        title: "CSS!",
        post_content: "styling is sooo fun",
        user_id: 1
    },
    {
        title: "SQL",
        post_content: "making a database is very calming",
        user_id: 2

    },
    {
        title: "Bootstrap",
        post_content: "Bootstrap makes the application look so much better than using CSS",
        user_id: 5
    },
    {
        title: "Heroku",
        post_content: "Heroku site is cute looking",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;