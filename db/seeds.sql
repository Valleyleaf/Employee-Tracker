-- Company will be devops. What is needed? development, operations, infrastructure, QA and security.

-- Departments
INSERT INTO departments (name)
VALUES
  ('Development'),
  ('Operations'),
  ('Quality Assurance'),
  ('Infrastructure'),
  ('Security');

-- Roles dep 1
INSERT INTO roles (title, salary, department_id)
VALUES
  ('Software Engineer', 80000, 1),
  ('DevOps Engineer', 90000, 1),
  ('Frontend Developer', 75000, 1),
  ('Backend Developer', 75000, 1);

-- Roles dep 2
INSERT INTO roles (title, salary, department_id)
VALUES
  ('Network Administrator', 80000, 2),
  ('System Administrator', 85000, 2),
  ('Database Administrator', 85000, 2),
  ('Junior Network Administrator', 60000, 2);

-- Roles dep 3
INSERT INTO roles (title, salary, department_id)
VALUES
  ('QA Engineer', 75000, 3),
  ('Automation Tester', 80000, 3);

-- Roles dep 4
INSERT INTO roles (title, salary, department_id)
VALUES
  ('Cloud Engineer', 90000, 4),
  ('Infrastructure Architect', 95000, 4);

-- Roles dep 5
INSERT INTO roles (title, salary, department_id)
VALUES
  ('Security Analyst', 85000, 5),
  ('Security Engineer', 90000, 5),
  ('Hackerman', 9100000, 5);

-- ________________________________________________________________________________________________


-- Software Engineers dep 1
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('John', 'Doe', 1, NULL),
  ('Jane', 'Smith', 2, 1),
  ('Michael', 'Jackson', 2, 1),
  ('Aston', 'Dahllof', 3, 1);

-- Operations dep 2
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Robert', 'Brown', 4, NULL),
  ('Emily', 'Davis', 5, 4),
  ('Michael', 'Lee', 5, 4);

-- Quality Assurance dep 3
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('David', 'Hall', 6, NULL),
  ('Laura', 'Wright', 7, 6);

-- Infrastructure dep 4
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Anton', 'Dallop', 8, NULL);
  ('Jonathan', 'Young', 9, 7);

-- Security dep 5
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Olivia', 'King', 10, NULL),
  ('Henry', 'Evans', 11, 9);