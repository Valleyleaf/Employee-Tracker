DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE departments (
  department_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE employees (
  employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT
);

CREATE TABLE managers (
  manager_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  manager_name VARCHAR(30) NOT NULL,
  manager_description TEXT NOT NULL
);

CREATE TABLE roles (
  role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL,
  department_id INT NOT NULL
);

ALTER TABLE employees ADD FOREIGN KEY (manager_id) REFERENCES managers(manager_id);