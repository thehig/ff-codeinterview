# Future Finance Coding Challenge

The [spec](#specification) can be found at the bottom of this document

## Technologies/stacks

* node, npm, yarn, sails, eslint, sublime, cmdr

## How to use

* Lift the sails :dash: with `yarn start` or `npm run start`
* Using a REST client like curl or postman, use `http://127.0.0.1:1337` for the url base path


## To Do:

> Guideline: Create tests for each operation and include it in project. Use git as you would when working in team. Write code that is easy to read and understand without comments or documentation.

### Phase 0:

* ~~Learn sails.js basics~~
* ~Identify the tasks required for further phases (decompose the problem)~
* ~Create a Postman collection that represents the API interactions~
* Determine how much additional stuff to add (eg: login, rate limiting)

### Phase 1:

* ~~bring up sails app, tidy up with eslint~~
* ~~Establish and confirm testing framework~~
  * ~~Install mocha, chai, sinon and hook in with grunt~~
  * ~~Loop in coffeescript for terse tests~~~
* `users` role or group with `create`, `read`, `update`, `delete` (CRUD) permissions
* ~~Set up database (sqllite) with the columns: `id`, `first_name`, `last_name`, `birth_date`~~
* ~~Connect database to REST Api with JSON response format~~

### Phase 2:

* ~~list all the customers in database sorted by one of the parameters passed in request~~
  * ~~first_name~~ - `{{host}}/user?sort=first_name`
  * ~~last_name~~ - `{{host}}/user?sort=last_name`
  * ~~birth_date~~ - `{{host}}/user?sort=birth_date`
* ~~CRUD customer data~~
  * ~~create~~ - `POST` form-data to `{{host}}/user`
  * ~~delete~~ - `DELETE` to `{{host}}/user/:id`
  * ~~edit~~ - `PUT` form-data to `{{host}}/user/:id`

### Phase 3:

* return first name, last name and current age of particular customer AND 
* a random joke fetched from [external service](http://www.icndb.com/api/) with customer name interpolated

---

# ~~sqlite3~~
> See [sails-disk](#sails-disk)

### adaptor

There are many adaptors for sqlite3 and sails.js. The most popular one in my initial search was waterline-sqlite3, although further investigation into the pros/cons of the different adaptors would be prudent prior to scale.

**DEBUG MODE IS ENABLED IN THE ADAPTOR AND MIGRATE IS ENABLED IN THE MODEL**

### data formats

sqlite3s data formats are quite basic so some care should be taken with the date field. Additionally the **user ids are auto-incrementing integers**, which is bad practise as it can cause some data leakage.

# sails-disk

Something went wrong with waterline-sqlite3 and I was unable to diagnose the problem within a reasonable timeframe. I tried succesfully to reproduce the issue in both Windows and Linux, but will address later time-permitting. For now, the database running using sails-disk is functionally close enough to sqlite3, and the process of changing from sails-disk to sqlite should be a straightforward affair thanks to MVC decomposition.

---

# Specification

We want you to create simple web service. You can use any frameworks but preferably Sails.js as it implements MVC pattern. If you choose any other remember to separate concerns.

Imagine we want to give users ability to create, update, and delete records from out database. Obviously we want them to view it them too. Your target is to take care of the back-end service that does this, so building a web based form is not required. Interact with server using any REST client or even curl.

Let the database be driven by sqlite and here are the required columns: id, first_name, last_name, birth_date. 

The service is an interface to database and speaks HTTP JSON.

You want it to be able to:

* list all the customers in database sorted by one of the parameters passed in request (first, second name or date)
* create, delete and edit customer data
* return first name, last name and current age of particular customer AND a random joke fetched from [external service](http://www.icndb.com/api/) with customer name interpolated

Create tests for each operation and include it in project. Use git as you would when working in team. Write code that is easy to read and understand without comments or documentation.

When done please place the code in Github and send us a link. Let the README.md contain some explanation how to use it. Thinks how to design solution in elegant fashion.