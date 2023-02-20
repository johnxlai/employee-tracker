INSERT INTO department ( department_name)
VALUES  ("Sales"),
        ("Advertising"),
        ("Marketing"),
        ("Development"),
        ("Customer Service");

INSERT INTO role ( title, salary, department_id )
VALUES  ("Software Dev" , 123.123, 4),
        ("Marketing Manager" ,123.123, 3),
        ("Project Manager" ,123.123, 3),
        ("Art Director" ,123.123, 2),
        ("Copy Writer" ,123.123, 2),
        ("Sales Manager" ,123.123, 1),
        ("Sales Rep" ,123.123, 1),
        ("Front End Developers" ,123.123, 4),
        ("Software Developer" ,123.123, 4),
        ("Backend Developer" ,123.123, 4);

INSERT INTO employee ( first_name, last_name, role_id, manager_id)
VALUES  ("John", "Lai", 9, 1),
        ("Dan", "Taylor", 1, 3),
        ("Taylor", "Smith", 3, 2),
        ("Jack", "Ma", 2, 5),
        ("Elon", "Musk", 8, 7),
        ("Tim", "Cook", 7, 8),
        ("Skylar", "Water", 5, 7 ),
        ("Paige", "Gerrad", 4, 1),
        ("Sam", "Smith", 6, 7),
        ("Adele", "Notsure", 2, 4),
        ("Sam", "Drinkwater", 4, 5),
        ("Mark", "Messi", 5, 6),
        ("Sarah", "Ronaldo", 6, 7),
        ("Zara", "Neymar", 7, 1),
        ("Mary", "Me", 10, 7);