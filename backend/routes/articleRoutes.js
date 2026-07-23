const express = require("express");

const router = express.Router();

const Article = require("../models/Article");


// GET ALL ARTICLES

router.get("/all", async (req, res) => {

    try {

        const articles = await Article.find()
            .sort({
                createdAt: -1
            });


        res.json(articles);


    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});




// ADD ARTICLE

router.post("/", async (req, res) => {

    try {


        const article = await Article.create(req.body);


        res.status(201).json(article);


    }
    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});




// GET SINGLE ARTICLE BY ID ⭐ IMPORTANT

router.get("/:id", async (req, res) => {

    try {

        const article = await Article.findById(req.params.id);


        if (!article) {

            return res.status(404).json({
                message: "Article not found"
            });

        }


        res.json(article);


    }
    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});




// DELETE ARTICLE

router.delete("/:id", async (req, res) => {

    try {


        await Article.findByIdAndDelete(req.params.id);


        res.json({
            message: "Deleted"
        });


    }
    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});



module.exports = router;