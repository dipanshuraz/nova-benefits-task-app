const User = require("../models/User");
const Post = require("../models/Post");
const path = require('path')
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");


// @desc          Get Users
// @route         GET /api/v1/users
// @route         GET /api/v1/post/:postId/
// @access        Public

exports.getUsers = asyncHandler(async (req, res, next) => {
  console.log('backend hi')
  const users = await User.find().sort({createdAt:-1});
  return res.status(200).json({
    success: true,
    count: users.length,
    data: users,
  });
});

// @desc          Add a User
// @route         POST /api/v1/user/
// @access        Private

exports.addUser = asyncHandler(async (req, res, next) => {
  console.log(req.body,'create user hit');
  let existingUser = await User.findOne({email : req.body.email});
  if(existingUser) {
    res.status(200).json({
      success: true,
      msg : "already exists"
    });
  } else {
    const user = await User.create(req.body);
    res.status(201).json({
      success: true,
      data: user,
    });
  }
  
 
  });

// @desc          Get Signle Post
// @route         GET /api/v1/post/:id
// @access        Public

exports.getPost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id)
  if (!post) {
    return next(
      new ErrorResponse(`No post with the id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: post,
  });
});



// @desc          Update a Courses
// @route         PUT /api/v1/courses/:id
// @access        Private

exports.updatePost = asyncHandler(async (req, res, next) => {
 let post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  
  res.status(201).json({
    success: true,
    data: post,
  });
          if (!post) {
            return next(
              new ErrorResponse(`No course with the id of ${req.params.id}`, 404)
            );
          }
});

// @desc          Delete a Post
// @route         DELETE /api/v1/post/:id
// @access        Private

exports.deletePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return next(
      new ErrorResponse(`No course with the id of ${req.params.id}`, 404)
    );
  }

  await post.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
