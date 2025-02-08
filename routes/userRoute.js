const router = require("express").Router();
const multer = require("multer");
const upload = multer();
const { getUsers,addUser,updateUser,deleteUser,approveUser } = require("../controllers/userController");

router.get("/users/:id?",getUsers);
router.post("/users",addUser);
// // Route to update an existing Event
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.put('/users/approve/:id',upload.none(), approveUser);
module.exports = router;