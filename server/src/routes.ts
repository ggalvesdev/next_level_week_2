import express from "express";
import ClassesController from "./controllers/ClassesController";

const routes = express.Router();
const classesControllers = new ClassesController();

routes.get("/users", (req, res) => {
  return res.json({
    name: "teste",
  });
});
 
routes.post("/classes", classesControllers.create);

routes.post("/classes", classesControllers.index);

export default routes;
