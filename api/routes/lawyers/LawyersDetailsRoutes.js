import { Router } from "express";
import {
  DELETE_LawyersDetails,
  GET_LawyersDetails,
  GET_LawyersDetails_BYID,
  PATCH_LawyersDetails,
  POST_LawyersDetails,
} from "../../controller/lawyers/LawyersDetailsController.js";
const master_LawyersDetails_router = Router();

master_LawyersDetails_router.post(
  "/register/lawyersdetails",
  POST_LawyersDetails
);
master_LawyersDetails_router.get(
  "/register/lawyersdetails",
  GET_LawyersDetails
);

master_LawyersDetails_router.get(
  "/register/lawyersdetails/:id",
  GET_LawyersDetails_BYID
);

master_LawyersDetails_router.delete(
  "/register/lawyersdetails/:id",
  DELETE_LawyersDetails
);

master_LawyersDetails_router.patch(
  "/register/lawyersdetails",
  PATCH_LawyersDetails
);

export default master_LawyersDetails_router;
