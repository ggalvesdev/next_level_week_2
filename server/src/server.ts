import express from "express";

const app = express();

app.use(express.json()); // interpretar JSON

app.get("/users", (req, res) => {
  return res.json({
    name: "teste",
  });
});

app.listen(3333);
