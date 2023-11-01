-- Company will be devops. What is needed? development, operations, infrastructure, QA and security.
use company_db;

INSERT INTO department (name)
VALUES
  ('Development'),
  ('Operations'),

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Software Engineer', 80000, 1),
  ('DevOps Engineer', 90000, 2),
  ('Frontend Developer', 75000, 1),
  ('Backend Developer', 75000, 2);


  INSERT INTO employee (first_name,last_name,role_id, manager_id)
  VALUES
  ('John', 'Doe', 1, NULL),
  ('Jane', 'Smith', 2, 1),
  ('Michael', 'Jackson', 2, 1),
  ('Aston', 'Dahllof', 1, 1);
