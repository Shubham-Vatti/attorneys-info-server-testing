import { DataTypes } from "sequelize";
import seqalizedb from "../../config/DBConfig.js";

export const AreaofPracticeModel = seqalizedb.define(
  "area_of_law_practice",
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
