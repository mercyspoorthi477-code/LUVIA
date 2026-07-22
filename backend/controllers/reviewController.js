const Review = require("../models/Review");

// Add Review
exports.addReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);

    res.status(201).json({
      message: "Review added successfully",
      review,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Get All Reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();

    res.json(reviews);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Update Review
exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json(review);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Delete Review
exports.deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);

    res.json({
      message: "Review deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};