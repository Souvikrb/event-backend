const router = require('express').Router()
const multer = require("multer");
const upload = multer();
const {addBooking,updateBooking,deleteBooking,getBookings} = require("../controllers/bookingController")
const validateToken = require("../middleware/authMiddleware");
router.use(validateToken);
router.get("/booking/:id?",getBookings);
router.post("/booking",upload.none(),addBooking);
router.put("/booking/:id",upload.none(),updateBooking);
router.delete('/booking/:id', deleteBooking);
module.exports = router;