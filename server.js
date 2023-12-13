const express = require("express");

const PORT = 8080;

const Users = [
  {
    id: 0,
    name: "Jack",
  },
  {
    id: 1,
    name: "Lsj",
  },
];

const app = express();
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/users", (req, res) => {
  res.send(Users);
});

app.get("/users/:userId", (req, res) => {
  const userId = Number(req.params.userId);
  const user = Users[userId];
  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});

app.listen(PORT, () => {
  console.log("Running!");
});
