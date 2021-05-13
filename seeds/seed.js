const sequelize = require('../config/connection');
const { Authors, Books, My_List, Users } = require('../models');

const authorsSeedData = require('./authorsSeedData.json');
const booksSeedData = require('./booksSeedData.json');
const myListSeedData = require('./myListSeedData.json');
const usersSeedData = require('./usersSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const authors = await Authors.bulkCreate(authorsSeedData, {
    individualHooks: true,
    returning: true,
  });

  const books = await Books.bulkCreate(booksSeedData, {
    individualHooks: true,
    returning: true,
  });

  const users = await Users.bulkCreate(usersSeedData, {
    individualHooks: true,
    returning: true,
  });

  const myList = await My_List.bulkCreate(myListSeedData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
