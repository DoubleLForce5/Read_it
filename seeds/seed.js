const sequelize = require('../config/connection');
const { Authors, Books, Users, HasRead, IsReading, WillRead } = require('../models');

const authorsSeedData = require('./authorsSeedData.json');
const booksSeedData = require('./booksSeedData.json');
const hasReadSeedData = require('./hasReadSeedData.json');
const usersSeedData = require('./usersSeedData.json');
const isReadingSeedData = require('./isReadingSeedData.json');
const willReadSeedData = require('./willReadSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Authors.bulkCreate(authorsSeedData, {
    individualHooks: true,
    returning: true,
  });

  await Books.bulkCreate(booksSeedData, {
    individualHooks: true,
    returning: true,
  });

  await Users.bulkCreate(usersSeedData, {
    individualHooks: true,
    returning: true,
  });

  await HasRead.bulkCreate(hasReadSeedData, {
    individualHooks: true,
    returning: true,
  });

  await IsReading.bulkCreate(isReadingSeedData, {
    individualHooks: true,
    returning: true,
  })

  await WillRead.bulkCreate(willReadSeedData, {
    individualHooks: true,
    returning: true,
  })

  process.exit(0);
};

seedDatabase();
