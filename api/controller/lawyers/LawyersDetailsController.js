import dotenv from "dotenv";
import { LawyersDetailsModel } from "../../model/lawyers/LawyerDetailsModel.js";
import { StateListModel } from "../../model/master/StateList.js";
import { CityListModel } from "../../model/master/CityList.js";
import { AreaofPracticeModel } from "../../model/master/AreaofPractice.js";
dotenv.config();

export const GET_LawyersDetails = async (req, res) => {
  try {
    const result = LawyersDetailsModel.findAll({
      include: [
        {
          model: StateListModel,
          as: "stateDetails",
          attributes: ["id", "name"],
        },
        {
          model: CityListModel,
          as: "cityDetails",
          attributes: ["id", "state_id", "name"],
        },
        {
          model: AreaofPracticeModel,
          as: "areaOfPracticeDetails",
        },
      ],
    });

    const formattedData = (await result).map((lawyer) => {
      const json = lawyer.toJSON();
      // Replace ID fields with full objects
      json.state = json.stateDetails;
      json.city = json.cityDetails;
      json.area_of_practice = json.areaOfPracticeDetails;

      // Remove the association keys
      delete json.stateDetails;
      delete json.cityDetails;
      delete json.areaOfPracticeDetails;
      return json;
    });

    return res.status(200).json({
      message: "successfully lawyers details list found",
      count: formattedData.length,
      data: formattedData,
    });

    // .then((result) => {
    // });
  } catch (Err) {
    return res.status(500).json({
      message: "Failed to get lawyers details",
      data: Err.message,
    });
  }
};

export const GET_LawyersDetails_BYID = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await LawyersDetailsModel.findByPk(id, {
      include: [
        {
          model: StateListModel,
          as: "stateDetails",
          attributes: ["id", "name"],
        },
        {
          model: CityListModel,
          as: "cityDetails",
          attributes: ["id", "state_id", "name"],
        },
        {
          model: AreaofPracticeModel,
          as: "areaOfPracticeDetails",
        },
      ],
    });

    if (!result) {
      return res.status(404).json({
        message: "Lawyer not found",
        data: null,
      });
    }

    const json = result.toJSON();

    json.state = json.stateDetails;
    json.city = json.cityDetails;
    json.area_of_practice = json.areaOfPracticeDetails;

    delete json.stateDetails;
    delete json.cityDetails;
    delete json.areaOfPracticeDetails;

    return res.status(200).json({
      message: "Successfully fetched lawyer details",
      data: json,
    });
    // .then((result) => {
    // });
  } catch (Err) {
    return res.status(500).json({
      message: "Failed to get lawyers details",
      data: Err.message,
    });
  }
};

export const POST_LawyersDetails = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      address,
      state,
      city,
      contact_no,
      Alternative_contact_no,
      email_id,
      area_of_practice,
      college_name,
      country_code,
    } = req.body;
    LawyersDetailsModel.create({
      first_name,
      last_name,
      address,
      state,
      city,
      country_code,
      contact_no,
      Alternative_contact_no,
      email_id,
      area_of_practice,
      college_name,
    }).then((result) => {
      return res.status(201).json({
        message: "successfully created lawyers details",
        data: result,
      });
    });
  } catch (Err) {
    return res.status(500).json({
      message: "Failed to create lawyers details",
      data: Err.message,
    });
  }
};

export const DELETE_LawyersDetails = async (req, res) => {
  try {
    const { id } = req.params;
    LawyersDetailsModel.destroy({
      where: {
        id: id,
      },
    }).then((result) => {
      return res.status(200).json({
        message: "successfully lawyers detail deleted",
        data: result,
      });
    });
  } catch (Err) {
    return res.status(500).json({
      message: "Failed to delete lawyers details",
      data: Err.message,
    });
  }
};

export const PATCH_LawyersDetails = async (req, res) => {
  try {
    const updateFields = {};
    const {
      id,
      first_name,
      last_name,
      address,
      state,
      city,
      country_code,
      contact_no,
      Alternative_contact_no,
      email_id,
      area_of_practice,
      college_name,
    } = req.body;
    console.log("--req.body--", req.body);

    // Check if state is provided but city is missing
    if (state !== undefined && (city === undefined || city === "")) {
      return res.status(400).json({
        message: "City is required when state is provided.",
      });
    }

    if (first_name !== undefined) updateFields.first_name = first_name;
    if (last_name !== undefined) updateFields.last_name = last_name;
    if (address !== undefined) updateFields.address = address;
    if (state !== undefined) updateFields.state = state;
    if (city !== undefined) updateFields.city = city;
    if (country_code !== undefined) updateFields.country_code = country_code;
    if (contact_no !== undefined) updateFields.contact_no = contact_no;
    if (Alternative_contact_no !== undefined)
      updateFields.Alternative_contact_no = Alternative_contact_no;
    if (email_id !== undefined) updateFields.email_id = email_id;
    if (area_of_practice !== undefined)
      updateFields.area_of_practice = area_of_practice;
    if (college_name !== undefined) updateFields.college_name = college_name;

    // const { id } = req.params;
    LawyersDetailsModel.update(updateFields, {
      where: {
        id: id,
      },
    }).then((result) => {
      return res.status(200).json({
        message: "successfully lawyers detail updated",
        data: result,
      });
    });
  } catch (Err) {
    return res.status(500).json({
      message: "Failed to update lawyers details",
      data: Err.message,
    });
  }
};
