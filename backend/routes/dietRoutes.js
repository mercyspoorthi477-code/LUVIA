const express = require("express");
const router = express.Router();

const Diet = require("../models/Diet");



// GET ALL DIET DATA
router.get("/", async (req, res) => {

    try {

        const diets = await Diet.find();


        res.status(200).json(diets);


    } catch(error) {


        res.status(500).json({

            message:error.message

        });


    }

});




// GET DIET BY SYMPTOM

router.get("/symptom/:symptom", async(req,res)=>{


    try{


        const diet = await Diet.find({

            symptom:req.params.symptom

        });



        if(diet.length===0){

            return res.status(404).json({

                message:"No diet found"

            });

        }



        res.status(200).json(diet);



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});





// ADD DIET DATA (ADMIN)

router.post("/", async(req,res)=>{


    try{


        const diet = await Diet.create(req.body);



        res.status(201).json({

            message:"Diet added successfully",

            diet

        });



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});






// DELETE DIET

router.delete("/:id",async(req,res)=>{


    try{


        await Diet.findByIdAndDelete(
            req.params.id
        );



        res.status(200).json({

            message:"Diet deleted"

        });



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }



});





module.exports = router;