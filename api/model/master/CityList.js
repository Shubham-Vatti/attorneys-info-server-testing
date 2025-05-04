import { DataTypes } from "sequelize";
import seqalizedb from "../../config/DBConfig.js";
import { StateListModel } from "./StateList.js";

export const CityListModel = seqalizedb.define(
  "cities",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    state_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:StateListModel,
            key:"id"
        }
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false, // <--- Add this line
    freezeTableName: true,
  }
);
