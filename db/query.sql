-- SELECT movies.movie_name AS movie, reviews.review
-- FROM reviews
-- LEFT JOIN movies
-- ON reviews.movie_id = movies.id
-- ORDER BY movies.movie_name;


-- SELECT role.role_id AS id, reviews.review
-- FROM reviews
-- LEFT JOIN movies
-- ON reviews.movie_id = movies.id
-- ORDER BY movies.movie_name;

-- SELECT * FROM role;

-- SELECT
--   favorite_books.book_name AS name, book_prices.price AS price
-- FROM favorite_books
-- JOIN book_prices ON favorite_books.book_price = book_prices.id;



-- SELECT department.department_id AS ID, department.department_name AS Name;
-- FROM departments;


SELECT
  department.department_id AS id, department.department_name AS department;

