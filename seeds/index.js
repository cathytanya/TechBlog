// the index is pulling all the seeds here to present them in the terminal 
const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
//   post the user seeds here
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
//   post the POST seeds here
    await seedPosts();
    console.log('\n----- POSTS SEEDED -----\n');
//   post the COMMENTS seeds here
    await seedComments();
    console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();