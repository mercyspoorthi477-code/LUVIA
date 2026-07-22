const Article = require("../models/Article");

// Add
exports.addArticle = async (req, res) => {
  try {
    const article = await Article.create(req.body);

    res.status(201).json({
      message: "Article added successfully",
      article,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Get All
exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();

    res.json(articles);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Update
exports.updateArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json(article);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Delete
exports.deleteArticle = async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);

    res.json({
      message: "Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};