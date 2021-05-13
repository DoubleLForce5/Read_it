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
});

Books.hasMany(My_List, {
    foreignKey: 'book_id',
    onDelete: 'CASCADE',
});

Users.hasMany(My_List, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

My_List.belongsTo(Books, {
    foreignKey: 'book_id',
});

My_List.belongsTo(Users, {
    foreignKey: 'user_id',
});


module.exports = { Authors, Books, Users, My_List };
