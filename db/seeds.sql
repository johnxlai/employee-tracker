INSERT INTO department (id, department_name)
VALUES  ("Sales"),
        ("Advertising"),
        ("Marketing"),
        ("Development"),
        ("Customer Service");

INSERT INTO role (title, department_id )
VALUES  ("Software Dev" , 4),
        ("Marketing Manager" , 3),
        ("Project Manager" , 3),
        ("Art Director" , 2),
        ("Copy Writer" , 2),
        ("Sales Manager" , 1),
        ("Sales Rep" , 1),
        ("Front End Developers" , 4),
        ("Software Developer" , 4),
        ("Backend Developer" , 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("John", "Lai", 9, 1);
        ("Dan", "Taylor", 1, 3);
        ("Taylor", "Smith", 3, 2);
        ("Jack", "Ma", 2, 5);
        ("Elon", "Musk", 8, 7);
        ("Tim", "Cook", 7, 8);
        ("Skylar", "Water", 5,  );
        ("Paige", "Gerrad", 4, 7);
        ("Sam", "Smith", 6, 7);
        ("Adele", "Notsure", 9, 7);
        ("Mary", "Me", 10, 7);