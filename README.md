# RESTful-Api
In this exercise are going to create a small RESTful API using Node + Express + pgAdmin + a PostgreSQL database that will serve the client with some data about users and their orders.

# clone the repository
```bash
git clone
```
# install express
```bash
npm i express
```
# install dotenv
```bash
npm i dotenv
```
# install pgAdmin
```bash
npm i pg
```

## Description

Create two table - one users table and one orders table - then feed the table like below:

## for users
INSERT INTO users (first_name, last_name, age) VALUES ('John', 'Doe', 18);

## for orders
INSERT INTO orders (price,date, user_id) VALUES ( 18, '2021-01-01 00:00:00', 1);

Now create an express server with seperate routes for http verbs get, post, put delete for users and orders