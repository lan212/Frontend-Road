CREATE DATABASE todolist;
CREATE TABLE `list` (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
info VARCHAR(100) NOT NULL,
done BOOLEAN NOT NULL
)CHARSET=utf8;