import { DataTypes } from "sequelize";
import seqalizedb from "../../config/DBConfig.js";

export const StateListModel = seqalizedb.define(
  "states",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false, // <--- Add this line
   }
);
