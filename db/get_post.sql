SELECT posts.* FROM posts 
INNER JOIN users ON posts.author_id = users.id
WHERE users.id = $1;

