import { CityListModel } from "../../model/master/CityList.js";
import dotenv from "dotenv";
dotenv.config();

export const GET_CitiesList = async (req, res) => {
  try {
    CityListModel.findAll().then((result) => {
      return res.status(200).json({
        message: "successfully city list found",
        count: result.length,
        data: result,
      });
    });
  } catch (Err) {
    return res.status(500).json({
      message: "Failed to get city list",
      data: Err.message,
    });
  }
};

export const GET_CitiesList_By_ID = async (req, res) => {
  try {
    const { state_id } = req.params;
    if (isNaN(state_id)) {
      return res.status(400).json({ message: "Invalid state_id" });
    }
    const cities_list = await CityListModel.findAll({
      where: {
        state_id: state_id, // Filter by state_id
      },
    });

    // Check if cities are found
    if (cities_list.length === 0) {
      return res
        .status(404)
        .json({ message: "No cities found for the given state_id" });
    } else {
      return res.status(200).json({
        message: "successfully city list found",
        count: cities_list.length,
        data: cities_list,
      });
    }
  } catch (Err) {
    return res.status(500).json({
      message: "Failed to get city list",
      data: Err.message,
    });
  }
};

export const POST_CitiesList = async (req, res) => {
  try {
    const { name, state_id } = req.body;
    CityListModel.create({
      name: name,
      state_id: state_id,
    }).then((result) => {
      return res.status(200).json({
        message: "successfully city added",
        data: result.dataValues,
      });
    });
  } catch (Err) {
    return res.status(500).json({
      message: "Failed to add city",
      data: Err.message,
    });
  }
};

export const DELETE_CitiesList = async (req, res) => {
  try {
    const { id, state_id } = req.query;
    CityListModel.destroy({
      where: {
        id: id,
        state_id: state_id,
      },
    }).then((result) => {
      return res.status(200).json({
        message: "successfully city deleted",
        data: result,
      });
    });
  } catch (Err) {
    return res.status(500).json({
      message: "Failed to delete city",
      data: Err.message,
    });
  }
};

export const PATCH_CitiesList = async (req, res) => {
  try {
    const updateFields = {};
    const { name, id, state_id } = req.body;
    if (name !== undefined) updateFields.name = name;
    if (state_id !== undefined) updateFields.state_id = state_id;
    CityListModel.update(updateFields, {
      where: {
        id: id,
      },
    }).then((result) => {
      return res.status(200).json({
        message: "successfully city added",
      });
    });
  } catch (Err) {
    return res.status(500).json({
      message: "Failed to add city",
      data: Err.message,
    });
  }
};
