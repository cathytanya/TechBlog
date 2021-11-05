// using the USER model
const { User } = require('../models');
// the seeds will embed into the USER model
const userData = [
    {
        username: "nziclvavera",
        twitter: "judly31",
        github: "nziclavera",
        email: "nziclaverab@gmail.com",
        password: "cati22cara"
    },
    {
        username: "cathytanya",
        twitter: "coolcats22",
        github: "caticole",
        email: "caticole81@gmail.com",
        password: "WildnOut"
    },
    {
        username: "jamescooper",
        twitter: "jamesbond",
        github: "alexcooper21",
        email: "jamiebaby@gmail.com",
        password: "iLikeSuits"
    },
    {
        username: "nellynelson",
        twitter: "mariahcareysson",
        github: "singertoscammer",
        email: "nellynel@gmail.com",
        password: "WhatIsLove"
    },
    {
        username: "kuntiiscool",
        twitter: "manstillnothot",
        github: "singhislion",
        email: "ksignh@gmail.com",
        password: "cati22cara"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;