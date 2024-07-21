-- Deletes database if it already exists to avoid duplicate data
DROP DATABASE IF EXISTS employee_tracker_db;
-- Creates new database
CREATE DATABASE employee_tracker_db;

-- Selects employee_tracker_db for use
\c employee_tracker_db;

-- Creates tables for Department, Role, and Employee

    -- Department table
    CREATE TABLE department (
        id INTEGER PRIMARY KEY,
        name VARCHAR(30) UNIQUE NOT NULL
    );

    -- Role table
    CREATE TABLE role (
        id INTEGER PRIMARY KEY,
        title VARCHAR(30) UNIQUE NOT NULL,
        salary DECIMAL NOT NULL,
        department_id INTEGER NOT NULL,
        FOREIGN KEY (department_id)
        REFERENCES department(id)
    );

    -- Employee table
    CREATE TABLE employee (
        id INTEGER PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INTEGER NOT NULL,
        FOREIGN KEY (role_id)
        REFERENCES role(id)
        ON DELETE SET NULL,
        manager_id INTEGER,
        FOREIGN KEY (manager_id)
        REFERENCES employee(id)
        );
