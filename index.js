import express, { json, urlencoded } from "express";
const app = express();
import cors from "cors";
import "./api/config/DBConfig.js";
const PORT = 7500;
import fileUpload from "express-fileupload";
import { StateListModel } from "./api/model/master/StateList.js";
import { CityListModel } from "./api/model/master/CityList.js";
import { AreaofPracticeModel } from "./api/model/master/AreaofPractice.js";
import master_state_router from "./api/routes/master/StateListRoutes.js";
import master_city_router from "./api/routes/master/CitiesListRoutes.js";
import master_AreaOfPractice_router from "./api/routes/master/AreaofPracticeRoutes.js";
import { LawyersDetailsModel } from "./api/model/lawyers/LawyerDetailsModel.js";
import master_LawyersDetails_router from "./api/routes/lawyers/LawyersDetailsRoutes.js";

// App Use

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// Tables

StateListModel.sync();
CityListModel.sync();
AreaofPracticeModel.sync();
LawyersDetailsModel.sync();
// Routes

// Master routes
app.use("/api/master", master_state_router);
app.use("/api/master", master_city_router);
app.use("/api/master", master_AreaOfPractice_router);

// Lawyers routes
app.use("/api/lawyers", master_LawyersDetails_router);

// PORT Listen

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
