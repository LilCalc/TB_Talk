const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is awesome!"
    },
    {
        user_id: 4,
        post_id: 3,
        comment_text: "Wow!"
    },
    {
        user_id: 1,
        post_id: 1,
        comment_text: "wor, kudos to everyone"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "We just reached a million subscribers!!!"
    },
    {
        user_id: 3,
        post_id: 1,
        comment_text: ":D"
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: "YEAH BABY THIS IS WHAT I'VE BEEN WAITING FOR"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "bad!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "this sucks!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;