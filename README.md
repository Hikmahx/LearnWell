# LearnWell - A Simple Learning Application 

This is the Node.js Express backend documentation for LearnWell. If you want the Python Django documentation, you can visit the [api-django](https://github.com/Hikmahx/LearnWell/tree/api-django) branch of LearnWell.

## Table of Contents

- [Overview](#overview)
  - [Introduction](#introduction)
  - [Features](#features)
- [Installation](#installation)
- [Endpoints](#endpoints)
- [My Process](#my-process)
  - [Built With](#built-with)
- [Author](#author)

<img width="1680" alt="Screenshot 2023-04-27 at 3 49 46 PM" src="https://user-images.githubusercontent.com/54153841/234903526-c44b26d8-7ac8-44ee-9680-2329c9c36614.png">

## Overview

### Introduction

This project is a RESTful API built using the Node.js Express web framework. It provides CRUD (Create, Read, Update, Delete) operations for subjects and topics, and also supports searching of subjects and topics.

### Features

Users should be able to:

- Create, Read, Update, and Delete subjects and topics.
- Search subjects and topics by title.
- View a list of all subjects.
- View a list of all topics.
- View all topics associated with a subject.
- View detailed information for a single subject.
- View detailed information for a single topic.


## Installation

1. Clone the repository.
2. Install the required packages using `npm install`.
3. Create a database and update the database configuration in the `config/db.ts` file.
4. Start the server: `npm start`

## Endpoints

| Endpoint | Method | Response |
| --- | --- | --- |
| `/api/subjects` | GET | List of all subjects |
| `/api/subjects` | POST | Create a new subject |
| `/api/subjects/:id` | GET | Details of a single subject |
| `/api/subjects/:id` | PUT | Update an existing subject |
| `/api/subjects/:id` | DELETE | Delete a single subject |
| `/api/search?q={subject/topic title}` | GET | Search for subjects and topics |
| `/api/topics` | GET | List of all topics |
| `/api/topics` | POST | Create a new topic |
| `/api/topics/:id` | GET | Details of a single topic |
| `/api/topics/:id` | PUT | Update an existing topic |
| `/api/topics/:id` | DELETE | Delete a single topic |

## My Process

### Built With

- Node.js
- Express.js
- MongoDB
- TypeScript
- Express Validator
- DotEnv
- Config
- Cors
- Nodemon

## Author

- Github - [Hikmah Yousuph](https://github.com/Hikmahx)
- Email - [hikmayousuph@gmail.com](hikmayousuph@gmail.com)
- LinkedIn - [Hikmah Yousuph](linkedin.com/in/hikmah-yousuph-449467204/)
