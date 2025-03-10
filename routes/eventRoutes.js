const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const { addEvent,getEvent,updateEvent,deleteEvent,approveEvent,approvespecialist } = require("../controllers/eventManager")
const validateToken = require("../middleware/authMiddleware");
router.post('/event', addEvent);

// Route to get a list of all Event
router.get('/event/:id?', getEvent);

//Route to update an existing Event
router.put('/event/:id', updateEvent);

//Route to delete a Event by ID
router.delete('/event/:id', deleteEvent);

//Route to update an existing Event
router.put('/event/approve/:id',upload.none(), approveEvent);
//Route to update an existing Event
router.put('/event/specialist/:id',upload.none(), approvespecialist);
module.exports = router;