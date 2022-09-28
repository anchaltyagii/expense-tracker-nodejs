const express = require("express");
const cors = require("cors");
const connection = require("./database/database");
const Data = require("./database/tasks");
const app = express();

app.use(express.json());
app.use(cors());

connection();

//Routes
app.post("/addExpenses", async (req, res) => {
  const { title, price, date } = req.body;
  try {
    const data = new Data({ title, price, date });
    data.save((err) => {
      if (err) res.send(err);
      else res.send("Success!");
    });
  } catch (err) {
    res.send(err);
  }
});

app.get("/getExpenses", async (req, res) => {
  Data.find({}, function (err, expense) {
    if (err) res.send(err);
    else res.send(expense);
  });
});

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
