const router = require("express").Router();
const multer = require("multer");
const upload = multer();
const { getUsers,addUser,updateUser,deleteUser,approveUser } = require("../controllers/userController");
const validateToken = require("../middleware/authMiddleware");

router.get("/users/:id?",validateToken,getUsers);
router.post("/users",addUser);
// // Route to update an existing Event
router.put('/users/:id',validateToken, updateUser);
router.delete('/users/:id',validateToken,upload.none(), deleteUser);
router.put('/users/approve/:id',upload.none(), approveUser);
module.exports = router;