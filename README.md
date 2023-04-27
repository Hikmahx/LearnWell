# LearnWell - A Simple Learning Application 


This is the Python Django backend documentation for LearnWell. If you want the Node.js Express documentation, you can visit the [api](https://github.com/Hikmahx/LearnWell/tree/api) branch of LearnWell

## Table of contents

- [Overview](#overview)
  - [Introduction](#introduction)
  - [Features](#features)
- [Installation](#installation)
- [Endpoints](#endpoints)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)


<img width="1680" alt="learnwell-django" src="https://user-images.githubusercontent.com/54153841/234898582-22826548-43fb-4703-8721-464c9625ad34.png">


## Overview

### Introduction
This project is a RESTful API built using the Django web framework.  It provides CRUD (Create, Read, Update, Delete) operations for topics and subjects, and also supports searching of subjects and topics.



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
2. Create a virtual environment and activate it.
3. Install the required packages using `pip install -r requirements.txt`.
4. Create a database: `python manage.py migrate`
5. Start the server: `python manage.py runserver`

## Endpoints

| Endpoint | Method	 | Response	 |
| --------------- | --------------- | --------------- |
| `/api/subjects/`  | GET | List of all subjects  |
| `/api/subjects/`  | POST | Create a new subject  |
| `/api/subjects/<int:subject_id>`  | GET | Details of a single subject	  |
| `/api/subjects/<int:subject_id>`  | PUT | 	Update an existing subject  |
| `/api/subjects/<int:subject_id>`  | DELETE | Details of a single subject	  |
| `/api/subjects/search?q={subject/topic title}`  | GET | Search for subjects and topics  |
| `/api/topics/`  | GET | List of all topics  |
| `/api/topics/`  | POST | Create a new topic  |
| `/api/topics/<int:topic_id>`  | GET | Details of a single topic	  |
| `/api/topics/<int:topic_id>`  | PUT | 	Update an existing topic  |
| `/api/topics/<int:topic_id>`  | DELETE | Details of a single topic	  |







## My process

### Built with

- Django
- Django Rest Framework


## Author

- Github - [Hikmah Yousuph](https://github.com/Hikmahx)
- Frontend Mentor - [@Hikmahx](https://www.frontendmentor.io/profile/Hikmahx)
- Email - [hikmayousuph@gmail.com](hikmayousuph@gmail.com)
- LinkedIn - [Hikmah Yousuph](linkedin.com/in/hikmah-yousuph-449467204/)


