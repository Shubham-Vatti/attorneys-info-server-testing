import { Router } from "express";
import {
  DELETE_AreaOfPractices,
  GET_AreaOfPractices,
  PATCH_AreaOfPractices,
  POST_AreaOfPractices,
} from "../../controller/master/AreaofPracticeController.js";
const master_AreaOfPractice_router = Router();

master_AreaOfPractice_router.get("/areaofpractices", GET_AreaOfPractices);
master_AreaOfPractice_router.post(
  "/register/areaofpractices",
  POST_AreaOfPractices
);
master_AreaOfPractice_router.delete(
  "/areaofpractices/:id",
  DELETE_AreaOfPractices
);

master_AreaOfPractice_router.patch("/areaofpractices", PATCH_AreaOfPractices);

export default master_AreaOfPractice_router;
