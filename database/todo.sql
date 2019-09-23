DROP DATABASE IF EXISTS todolistapp;
CREATE DATABASE todolistapp;

\c todolistapp;

DROP TABLE IF EXISTS todolist;

CREATE TABLE todolist (
	ID SERIAL PRIMARY KEY,
	title VARCHAR,
	completed boolean
);