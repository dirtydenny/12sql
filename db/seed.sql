USE company_db;

INSERT INTO department(name)
VALUES 
    ("Sales"),
    ("Administration"),
    ("Engineering"),
    ("Accounting");

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Sales Lead", 100000, 1),
    ("Executive Secretary", 80000, 2),
    ("Senior Engineer", 120000, 3),
    ("CFO", 150000, 4),
    ("Junior Accountant", 85000, 4),
    ("CEO", 200000, 2);


INSERT INTO employee
    (first_name, last_name, role_id, manager_id )
VALUES
    ("John","Smith",1,null),
    ("Jerry","Johnson", 2, null),
    ("Carrol","Li", 3, null),
    ("Hilary", "Yama", 4, null),
    ("Fred", "Rolly", 4, null),
    ("Sally", "Suds", 2, NULL);



