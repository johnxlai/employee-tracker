INSERT INTO department (name)
VALUES  ("Sales"),
        ("Advertising"),
        ("Marketing"),
        ("Development"),
        ("Customer Service");

INSERT INTO role ( title, salary, department_id )
VALUES  ("Tech Lead" , 900000.00, 4),
        ("Marketing Manager" , 100000.00, 3),
        ("Project Manager" , 50000.00, 3),
        ("Art Director" ,134000.00, 2),
        ("Copy Writer" ,156000.00, 2),
        ("Sales Manager" ,121000.00, 1),
        ("Sales Rep" ,129000.00, 1),
        ("Front End Developers" ,310000.00, 4),
        ("Software Developer" ,510000.00, 4),
        ("Backend Developer" ,310000.00, 4);

INSERT INTO employee ( first_name, last_name, role_id, manager_id)
VALUES  ("John", "Lai", 9, null),
        ("Dan", "Taylor", 1, 3),
        ("Taylor", "Smith", 3, null),
        ("Jack", "Ma", 2, 5),
        ("Elon", "Musk", 8, null),
        ("Tim", "Cook", 7, 8),
        ("Skylar", "Water", 5, null ),
        ("Paige", "Gerrad", 4, 1),
        ("Sam", "Smith", 6, null),
        ("Adele", "Notsure", 2, 4),
        ("Sam", "Drinkwater", 4, 5),
        ("Mark", "Messi", 5, 6),
        ("Sarah", "Ronaldo", 6, 7),
        ("Zara", "Neymar", 7, 1),
        ("Mary", "Me", 10, 7);