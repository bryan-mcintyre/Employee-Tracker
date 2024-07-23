# Employee-Tracker

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Future Development](#future-development)
- [Issues](#issues)
- [Credits](#credits)

## Description
Employee Tracker is a command line application that allows users to keep track of their employees. Through a series of prompts, users will be guided through the process of adding employees, roles, and departments to the database. Users are given options to view reports sorted by department, role, and employees. 

## Installation
Download the codebase from GitHub -> run 'npm i' in the terminal to install packages -> run 'psql -U postgres' in the terminal to connect to postgreSQL -> run '\i db/schema.sql' in terminal to create the database -> run '\i seeds.sql' to populate the db with data.

## Usage
After installing the application open 'index.js' in the terminal and run 'node index.js' to start application. Follow the prompts on the screen to use the application. 

Link to video showcasing application usage: https://drive.google.com/file/d/1kcTDMXBgfyUgZk0UkKSL9k9mn2dMST40/view?usp=drive_link

## Future Development
In future iterations the user will be able to sort employees by manager, role, and department. They'll also be able to to update an employees manager. The ablility to delete roles and departments will also be created at a future date.

## Issues
Application unexpectedly exits after a few of the functions and needs to be restarted using 'node index.js' in the terminal

## Credits
The instructor offered some guidance on getting the tables to display in the terminal. I also consulted Google for assistance in some of the logic/syntax with integrating the inquirer and pg packages.