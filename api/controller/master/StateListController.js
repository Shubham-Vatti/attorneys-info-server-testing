import { StateListModel } from "../../model/master/StateList.js";
import dotenv from "dotenv";
dotenv.config();

export const GET_StateList = async (req, res) => {
  try {
    console.log("--inside-get-call--");
    StateListModel.findAll().then((result) => {
      return res.status(200).json({
        message: "successfully state list found",
        count: result.length,
        data: result,
      });
    });
  } catch (Err) {
    return res.status(500).json({
      message: "Failed to get state list",
      data: Err.message,
    });
  }
};

export const POST_StateList = async (req, res) => {
  try {
    console.log("--inside-post-call--");
    const { name } = req.body;
    StateListModel.create({
      name: name,
    }).then((result) => {
      return res.status(200).json({
        message: "successfully state added",
        data: result.dataValues,
      });
    });
  } catch (Err) {
    return res.status(500).json({
      message: "Failed to add state",
      data: Err.message,
    });
  }
};

export const DELETE_StateList = async (req, res) => {
  try {
    const { id } = req.params;
    StateListModel.destroy({
      where: {
        id: id,
      },
    }).then((result) => {
      return res.status(200).json({
        message: "successfully state deleted",
        data: result,
      });
    });
  } catch (Err) {
    return res.status(500).json({
      message: "Failed to delete state",
      data: Err.message,
    });
  }
};

export const PATCH_StateList = async (req, res) => {
  try {
    const { name, id } = req.body;
    StateListModel.update(
      {
        name: name,
      },
      {
        where: {
          id: id,
        },
      }
    ).then((result) => {
      return res.status(200).json({
        message: "successfully state list updated",
      });
    });
  } catch (Err) {
    return res.status(500).json({
      message: "Failed to update state list",
      data: Err.message,
    });
  }
};
