import {Router} from'express';
import PersonController from "../controllers/PersonController";

const route = Router();
route.get("/index", PersonController.index);



export default route;
