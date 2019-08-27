INSERT INTO posts 
(author_id, content)
 VALUES($1, $2)

 returning *;