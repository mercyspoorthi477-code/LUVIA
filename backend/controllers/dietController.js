const Diet = require("../models/Diet");

// Add Diet
const addDiet = async (req, res) => {
  try {
    const { symptom, food, benefits, image } = req.body;

    if (!symptom || !food || !benefits) {
      return res.status(400).json({
        message: "Please provide all required fields.",
      });
    }

    const diet = await Diet.create({
      symptom,
      food,
      benefits,
      image,
    });

    res.status(201).json({
      message: "Diet added successfully.",
      diet,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Diets
const getAllDiets = async (req, res) => {
  try {
    const diets = await Diet.find();

    res.status(200).json(diets);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Diet
const updateDiet = async (req, res) => {
  try {
    const diet = await Diet.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!diet) {
      return res.status(404).json({
        message: "Diet not found.",
      });
    }

    res.status(200).json({
      message: "Diet updated successfully.",
      diet,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Diet
const deleteDiet = async (req, res) => {
  try {
    const diet = await Diet.findByIdAndDelete(req.params.id);

    if (!diet) {
      return res.status(404).json({
        message: "Diet not found.",
      });
    }

    res.status(200).json({
      message: "Diet deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addDiet,
  getAllDiets,
  updateDiet,
  deleteDiet,
};