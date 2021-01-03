const express = require("express");
const {
  getPosts,
  getPost,
  addPost,
  updatePost,
  deletePost,
  uploadPhoto,
} = require("../controller/post");

const router = express.Router({ mergeParams: true });

router.route("/").get(getPosts).post(addPost);

router.route("/:id").get(getPost).put(updatePost).delete(deletePost);

router.route("/:id/photo").put(uploadPhoto)

module.exports = router;
