const Authors = require('./authors');
const Books = require('./books');
const Users = require('./users');
const My_List = require('./my_list');

Authors.hasMany(Books, {
  foreignKey: 'author_id',
  onDelete: 'CASCADE',
});

Books.belongsTo(Authors, {
  foreignKey: 'author_id',
  allowNull: true
});

Books.belongsToMany(Users, {
  through: My_List,
  as: 'reading_list'
});

Users.belongsToMany(Books, {
  through: My_List,
  as: 'reading_list'
});

module.exports = { Authors, Books, Users, My_List };
