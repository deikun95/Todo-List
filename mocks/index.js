var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

let todos = [
  {
    id: 1,
    title: "Таска 1",
    description: "Описание таски 1",
    editing: false,
    done: false,
  },
  {
    id: 2,
    title: "Таска 2",
    description: "Описание таски 2",
    editing: false,
    done: false,
  },
  {
    id: 3,
    title: "Таска 3",
    description: "Описание таски 3",
    editing: false,
    done: false,
  },
];

app.get("/api/todos", function(req, res) {
  res.status(200);
  res.send(todos);
});

app.post("/api/todo", function(req, res) {
  res.status(200);
  const newItem = {
    ...req.body,
    editing: false,
    done: false,
    id: todos.length + 1,
  };
  todos.push(newItem);
  res.send(newItem);
});

app.delete("/api/todo/:id", function(req, res) {
  res.status(200);
  todos = todos.filter((todo) => todo.id !== +req.params.id);
  res.send("Got a delete request");
});

app.put("/api/todo", function(req, res) {
  res.status(200);
  todos = todos.map(todo => {
    if (todo.id === req.body.id) {
      return req.body
    } 
    return todo
  } )
  console.log(req.body.id)
  res.send("Got a PUT request");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
