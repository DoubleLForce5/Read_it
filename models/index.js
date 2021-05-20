const Authors = require('./authors');
const Books = require('./books');
const HasRead = require('./HasRead');
const Users = require('./users');
const IsReading = require('./IsReading');
const WillRead = require('./WillRead');

Authors.hasMany(Books, {
  foreignKey: 'author_id',
  onDelete: 'CASCADE',
});

Books.belongsTo(Authors, {
  foreignKey: 'author_id',
  allowNull: true
});

Books.belongsToMany(Users, {
  through: HasRead,
  foreignKey: 'book_id',
  otherKey: 'user_id',
  as: 'has_read',
});

Users.belongsToMany(Books, {
  through: HasRead,
  foreignKey: 'user_id',
  otherKey: 'book_id',
  as: 'has_read',
  onDelete: 'CASCADE'
});

Books.belongsToMany(Users, {
  through: IsReading,
  foreignKey: 'book_id',
  otherKey: 'user_id',
  as: 'is_reading',
});

Users.belongsToMany(Books, {
  through: IsReading,
  foreignKey: 'user_id',
  otherKey: 'book_id',
  as: 'is_reading',
  onDelete: 'CASCADE'
});

Books.belongsToMany(Users, {
  through: WillRead,
  foreignKey: 'book_id',
  otherKey: 'user_id',
  as: 'will_read',
});

Users.belongsToMany(Books, {
  through: WillRead,
  foreignKey: 'user_id',
  otherKey: 'book_id',
  as: 'will_read',
  onDelete: 'CASCADE'
});


module.exports = { Authors, Books, Users, HasRead, IsReading, WillRead };
