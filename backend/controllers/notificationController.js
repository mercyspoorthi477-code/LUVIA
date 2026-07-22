const Notification = require("../models/Notification");


// CREATE NOTIFICATION
exports.addNotification = async (req, res) => {
  try {

    const notification =
      await Notification.create(req.body);


    res.status(201).json({
      message: "Notification created successfully",
      notification,
    });


  } catch(error){

    res.status(500).json({
      message:error.message
    });

  }
};



// GET USER NOTIFICATIONS
exports.getUserNotifications = async(req,res)=>{

  try{

    const notifications =
      await Notification.find({
        userId:req.params.userId,
        receiverType:"user"
      })
      .sort({
        createdAt:-1
      });


    res.json(notifications);


  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};



// GET CAREGIVER NOTIFICATIONS
exports.getCaregiverNotifications = async(req,res)=>{

  try{

    const notifications =
      await Notification.find({
        caregiverId:req.params.caregiverId,
        receiverType:"caregiver"
      })
      .sort({
        createdAt:-1
      });


    res.json(notifications);


  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};



// MARK AS READ
exports.markAsRead = async(req,res)=>{

  try{

    const notification =
      await Notification.findByIdAndUpdate(
        req.params.id,
        {
          isRead:true
        },
        {
          new:true
        }
      );


    res.json({
      message:"Notification marked as read",
      notification
    });


  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};



// DELETE NOTIFICATION
exports.deleteNotification = async(req,res)=>{

  try{

    await Notification.findByIdAndDelete(
      req.params.id
    );


    res.json({
      message:"Notification deleted successfully"
    });


  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};