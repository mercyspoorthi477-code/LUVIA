const express = require("express");

const router = express.Router();


const {

addNotification,
getUserNotifications,
getCaregiverNotifications,
markAsRead,
deleteNotification

} = require("../controllers/notificationController");



// create notification
router.post(
"/add",
addNotification
);


// user notifications
router.get(
"/user/:userId",
getUserNotifications
);


// caregiver notifications
router.get(
"/caregiver/:caregiverId",
getCaregiverNotifications
);


// mark read
router.put(
"/read/:id",
markAsRead
);


// delete
router.delete(
"/delete/:id",
deleteNotification
);



module.exports = router;