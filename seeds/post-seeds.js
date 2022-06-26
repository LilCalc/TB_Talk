const { Post } = require('../models');

const postData = [
    {
        title: "Taskmaster goes public!",
        post_content: "Best tool ever!",
        user_id: 3
    },
    {
        title: "Zoo Keepr reaches 1 million subscribers!",
        post_content: "This website is awesome!",
        user_id: 1
    },
    {
        title: "TB Talks has been released!",
        post_content: "Welcome to the family!",
        user_id: 5
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;