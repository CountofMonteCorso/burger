CREATE DATABASE burgersdb;

USE burgersdb;

CREATE TABLE burgers(
	item_id INTEGER AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(40),
    devoured BOOLEAN, 
    date TIMESTAMP,
    PRIMARY KEY (item_id)
);

INSERT INTO burgers (burger_name, devoured)
VALUES ("double double animal style", false), ("baconator", false), ("breakfast burger", true);

DESCRIBE burgers;