import { DataTypes } from "sequelize";
import seqalizedb from "../../config/DBConfig.js";
import { StateListModel } from "../master/StateList.js";
import { CityListModel } from "../master/CityList.js";
import { AreaofPracticeModel } from "../master/AreaofPractice.js";

export const LawyersDetailsModel = seqalizedb.define(
  "lawyers_details",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: StateListModel,
        key: "id",
      },
    },
    city: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: CityListModel,
        key: "id",
      },
    },
    country_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Alternative_contact_no: {
      type: DataTypes.STRING,
    },
    email_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    area_of_practice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: AreaofPracticeModel,
        key: "id",
      },
    },
    college_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false, // <--- Add this line
    freezeTableName: true,
  }
);

LawyersDetailsModel.belongsTo(StateListModel, {
  foreignKey: "state",
  as: "stateDetails",
});

LawyersDetailsModel.belongsTo(CityListModel, {
  foreignKey: "city",
  as: "cityDetails",
});

LawyersDetailsModel.belongsTo(AreaofPracticeModel, {
  foreignKey: "area_of_practice",
  as: "areaOfPracticeDetails",
});
