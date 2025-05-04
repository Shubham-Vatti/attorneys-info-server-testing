import { Router } from "express";
import {
  DELETE_StateList,
  GET_StateList,
  PATCH_StateList,
  POST_StateList,
} from "../../controller/master/StateListController.js";
const master_state_router = Router();

master_state_router.get("/states", GET_StateList);
master_state_router.delete("/states/:id", DELETE_StateList);
master_state_router.post("/register/states", POST_StateList);
master_state_router.patch("/states", PATCH_StateList);

export default master_state_router;
