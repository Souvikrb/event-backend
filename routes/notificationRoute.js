const router = require('express').Router()
const multer = require("multer");
const upload = multer();
const {Notification,deleteNotification,NotificationAdd,updateNotification} = require("../controllers/notificationController")

router.get("/notification/:id?",Notification);
router.post("/notification",upload.none(),NotificationAdd);
router.put("/notification/:id",upload.none(),updateNotification);
router.delete('/notification/:id', deleteNotification);
module.exports = router;