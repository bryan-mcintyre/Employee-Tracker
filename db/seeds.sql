INSERT INTO department (id, name)
VALUES  (1, 'Sales'),
        (2, 'Finance'),
        (3, 'Engineering'),
        (4, 'Legal');

INSERT INTO role (id, title, salary, department_id)
VALUES  (1, 'Software Engineer', 120000, 3),
        (2, 'Account Manager', 160000, 2),
        (3, 'Accountant', 125000, 2),
        (4, 'Legal Team Lead', 250000, 4),
        (5, 'Sales Lead', 100000, 1),
        (6, 'Lawyer', 190000, 4);

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES  (1, 'John', 'Doe', 1),
        (2, 'Jane', 'Doe', 2),
        (3, 'Bryan', 'McIntyre', 3),
        (4, 'Emily', 'Dykstra', 4);
