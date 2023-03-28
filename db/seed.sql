USE company_db;

insert into department(name)
values ("Sales"),("Administration"),("Engineering"),("Accounting"),("Wharehoue");
insert into role(title, salary, department_id)
values("Sales Lead", 100000, 1);
insert into employee(first_name, last_name, role_id,manager_id )
values("John","Smith",1,null);



