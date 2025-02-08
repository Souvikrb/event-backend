const router = require('express').Router()
const multer = require("multer");
const upload = multer();
const {AdvertisementAdd,Advertisement,deleteAdvertisement} = require("../controllers/advertisementController")

router.get("/advertisement/:id?",Advertisement);
router.post("/advertisement",AdvertisementAdd);
router.delete('/advertisement/:id', deleteAdvertisement);
module.exports = router;