// using the USER model
const { User } = require('../models');
// the seeds will embed into the USER model
const userData = [
    {
        username: "nziclavera",
        twitter: "july31",
        github: "nziclavera",
        email: "nziclaverab@gmail.com",
        password: "cati22cara"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;