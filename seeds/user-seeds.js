const { User } = require('../models');

const userData = [
    {
        username: "Noahsav",
        twitter: "NoahS",
        github: "LilCalc",
        email: "Noahs@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "Pretzel",
        twitter: "Ptwit",
        github: "PGhub",
        email: "Pretzelsareawesome@!mail",
        password: "p@ssword2"
    },
    {
        username: "shaun_c",
        twitter: "shaun",
        github: "shaun",
        email: "shaun_c@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "Leanin",
        twitter: "JUSTLEAN",
        github: "Leaninlean",
        email: "leannnn@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "privateRyan",
        twitter: "RyanPrivate",
        github: "Pryan13245",
        email: "someresponse@gmail.com",
        password: "p@ssword5"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;