const express = require("express");
const {
  getUsers,
  getPost,
  addUser,
  updatePost,
  deletePost,
  uploadPhoto,
} = require("../controller/user");

const router = express.Router({ mergeParams: true });

router.route("/").get(getUsers).post(addUser);

router.route("/:id").get(getPost).put(updatePost).delete(deletePost);

router.route("/:id/photo").put(uploadPhoto)

module.exports = router;
