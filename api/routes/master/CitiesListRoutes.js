import { Router } from "express";
import {
  DELETE_CitiesList,
  GET_CitiesList,
  GET_CitiesList_By_ID,
  PATCH_CitiesList,
  POST_CitiesList,
} from "../../controller/master/CitiesListController.js";
const master_city_router = Router();

master_city_router.get("/cities", GET_CitiesList);
master_city_router.post("/register/cities", POST_CitiesList);
master_city_router.get("/cities/:state_id", GET_CitiesList_By_ID);
master_city_router.delete("/cities", DELETE_CitiesList);
master_city_router.patch("/cities", PATCH_CitiesList);

export default master_city_router;
