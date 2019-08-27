const express = require("express");
const AC = require("./controllers/auth_controller");
const PC = require("./controllers/post_controller");
const session = require("express-session");

const massive = require("massive");
require("dotenv").config();
const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env;
const app = express();
app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db is connected");
});
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

app.post("/auth/register", AC.register);
app.get("/auth/logout", AC.logout);
app.post("/auth/login", AC.login);

app.post("/api/addPost", PC.addPost);
app.get("/api/getPost/:id", PC.getPost);

app.get("/api/getQuery", PC.getQuery);

app.listen(SERVER_PORT, console.log(`listening on port ${SERVER_PORT}`));
