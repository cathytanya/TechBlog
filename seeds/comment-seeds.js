// using the Comment model
const { Comment } = require('../models');
// creating an object containing the seeds
// the comment will full in 3 columns:user_id,post_id,comment_text
const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "AMAZING!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "DAMN!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Awesome! GREAT JOB"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Fantastic!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is great news!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Keep up Going!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Nice"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice tool!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;