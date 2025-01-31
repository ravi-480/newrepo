const express = require("express");
const {signup} = require("../controllers/authController");

const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  postUser,
} = require("../controllers/userControllers");

const router = express.Router();

router.post("/signup", signup);

router.route("/").get(getAllUsers).post(postUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
