# nologychallenge-django

﻿# Django-Portfolio website for Nology pre-course challenge


This project has been made using the Django=3.1 framework
Please make sure you have Python 3.8.2 installed locally on your system before proceeding 

## How to run the project

Initialise a Python virtual environment

To do this, on Windows:

`> mkdir <DIRECTORY-NAME>`
`> cd <DIRECTORY-NAME>`


Clone the repo into this folder
`> py -m venv env`

`> .\env\Scripts\activate`




----------

Whilst in the virtual environment install the requirements using:


`> pip install -r requirements.txt`

This should install all of the requirements in the requirements.txt document required to run the project

## How to run the server

Still inside a virtualenv:

`>python manage.py runserver`

This should start the development server on port 8000
If using this port intereferes with other instances running, then you can change port by using, for example:

`>python manage.py runserver 8050`

This, for example, would make the server run on 127.0.0.1:805

If all is good, then you should be taken to index.html, the stylesheet should work. You'll know if the it's all up and running correctly if there's a top nav bar and a Hello World! heading cover styled with a css file I quickly put together named mystyle.css

## Please Note

You shouldn't need to touch the .py files unless you want to try and build models, forms and views, etc., or add your own django apps. All I've done at this point is configured the settings, url patterns and created the index view. As well as created the html files and stylesheet.
