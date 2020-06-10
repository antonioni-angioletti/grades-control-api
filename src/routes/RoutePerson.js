import {Router} from'express';

import PersonController from "../controllers/PersonController";

const route = Router();

route.get("/search/:id", PersonController.searchStudent);
route.get("/list", PersonController.listStudent);
route.get("/note", PersonController.studentNote);
route.get("/average", PersonController.averageGrades);
route.get("/best", PersonController.bestGrades);

route.post("/create", PersonController.create);

route.delete("/delete/:id", PersonController.deleteStudent);
route.put("/update", PersonController.updateStudent);


export default route;
