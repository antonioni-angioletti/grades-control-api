import {Router} from'express';

import PersonController from "../controllers/PersonController";

const route = Router();
route.post("/create", PersonController.create);
route.get("/search/:id", PersonController.searchStudent);
route.get("/list", PersonController.listStudent);
route.delete("/delete/:id", PersonController.deleteStudent);
route.put("/update", PersonController.updateStudent);

export default route;
