import {Router} from'express';

import PersonController from "../controllers/PersonController";

const route = Router();
route.post("/create", PersonController.create);


export default route;
