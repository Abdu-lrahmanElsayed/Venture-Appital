USE first_db;
CREATE TABLE IF NOT exists user (
	id int AUTO_INCREMENT,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    email varchar(50) not null,
    password varchar(200) not null,
    created_at datetime default current_timestamp,
    primary key(id)
    )