const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc          Get Users
// @route         GET /api/v1/users
// @route         GET /api/v1/post/:postId/
// @access        Public

exports.getUsers = asyncHandler(async (req, res, next) => {
  console.log('backend hi');
  const users = await User.find().sort({ createdAt: -1 });
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
  console.log(req.body, 'create user hit');
  let existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    res.status(200).json({
      success: true,
      msg: 'already exists',
    });
  } else {
    const user = await User.create(req.body);
    res.status(201).json({
      success: true,
      data: user,
    });
  }
});
