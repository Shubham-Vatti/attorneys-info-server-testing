import { AreaofPracticeModel } from "../../model/master/AreaofPractice.js";
import dotenv from "dotenv";
dotenv.config();

export const GET_AreaOfPractices = async (req, res) => {
  try {
    AreaofPracticeModel.findAll().then((result) => {
      return res.status(200).json({
        message: "successfully Area of practice list found",
        count: result.length,
        data: result,
      });
    });
  } catch (Err) {
    return res.status(500).json({
      message: "Failed to get  Area of practice list",
      data: Err.message,
    });
  }
};

export const POST_AreaOfPractices = async (req, res) => {
  try {
    const { name } = req.body;
    AreaofPracticeModel.create({
      name: name,
    }).then((result) => {
      return res.status(201).json({
        message: "successfully Area of practice list created",
        data: result.dataValues,
      });
    });
  } catch (Err) {
    return res.status(500).json({
      message: "Failed to add Area of practice list",
      data: Err.message,
    });
  }
};

export const DELETE_AreaOfPractices = async (req, res) => {
  try {
    const { id } = req.params;
    AreaofPracticeModel.destroy({
      where: {
        id: id,
      },
    }).then((result) => {
      return res.status(200).json({
        message: "successfully Area of practice list deleted",
        data: result,
      });
    });
  } catch (Err) {
    return res.status(500).json({
      message: "Failed to delete Area of practice list",
      data: Err.message,
    });
  }
};

export const PATCH_AreaOfPractices = async (req, res) => {
  try {
    const { name, id } = req.body;
    AreaofPracticeModel.update(
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
        message: "successfully Area of practice list updated",
      });
    });
  } catch (Err) {
    return res.status(500).json({
      message: "Failed to update Area of practice list",
      data: Err.message,
    });
  }
};
