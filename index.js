const express = require("express");
const app = express();

const users = [
  {
    id: 1,
    firstName: "Mukand",
    lastName: "Kirshna",
    ins: "SMIT",
  },
  {
    id: 2,
    firstName: "Sagar",
    lastName: "Vasu",
    office: "The Talent Games",
  },
  {
    id: 3,
    firstName: "Lubavan",
    lastName: "Joshi",
    ins: "Iqra university",
  },
];

app.use(express.json());

app.listen(4000, () => {
  console.log("server is running");
});

// read method
app.get("/", (req, res) => {
  res.send(users);
});

// create method
app.post("/", (req, res) => {
  users.push(req.body);
});

// update method
app.put("/:id", (req, res) => {
  let index = users.findIndex((data) => data.id == req.params.id);
  users.splice(index, 1, req.body);
  console.log(req.body);
});

// DELETE method
app.delete("/:id", (req, res) => {
  let index = users.findIndex((data) => data.id == req.params.id);
  users.splice(index, 1);
});
