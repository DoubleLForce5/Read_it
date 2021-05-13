
create database read_it;

use read_it;

create table users (

user_id int not null auto_increment primary key,

name_first varchar(255) not null,

name_last varchar(255) not null,

email varchar(255) not null,

password varchar(255) not null
);

create table authors (

author_id int not null auto_increment primary key,

name_first varchar(255) null,

name_last varchar(255) null
);

create table books (

book_id int not null auto_increment primary key,

isbn varchar(255) null,

title varchar(255) not null,

genre varchar(255) null,

year numeric null,

author_id int not null,

foreign key (author_id) references authors (author_id)
);

create table my_list (

list_item_id int not null auto_increment primary key,

user_id int not null,

book_id int not null,

has_read boolean default false,

is_reading boolean default false,

will_read boolean default true,

foreign key (user_id) references users (user_id),

foreign key (book_id) references books (book_id)
);