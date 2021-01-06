const Company = require("../models/Company");
const path = require('path')
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");


// @desc          Get Post
// @route         GET /api/v1/posts
// @route         GET /api/v1/post/:postId/
// @access        Public

exports.getCompanies = asyncHandler(async (req, res, next) => {
  const companies = await Company.find().sort({createdAt:-1});
  return res.status(200).json({
    success: true,
    count: companies.length,
    data: companies,
  });
});


// @desc          Get Signle Post
// @route         GET /api/v1/post/:id
// @access        Public

exports.getCompany = asyncHandler(async (req, res, next) => {
  console.log(req.params.id,'id')
  const company = await Company.findById(req.params.id)
  if (!company) {
    return next(
      new ErrorResponse(`No Company with the id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: company,
  });
});

// @desc          Add a Post
// @route         POST /api/v1/post/
// @access        Private

exports.addCompany = asyncHandler(async (req, res, next) => {

  console.log(req.body,'body ')

const company = await Company.create(req.body);

  res.status(201).json({
    success: true,
    data: company,
  });
});

// @desc          Update a Courses
// @route         PUT /api/v1/courses/:id
// @access        Private

exports.updateCompany = asyncHandler(async (req, res, next) => {
 let company = await Company.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  
  res.status(201).json({
    success: true,
    data: company,
  });
          if (!company) {
            return next(
              new ErrorResponse(`No Company with the id of ${req.params.id}`, 404)
            );
          }
});

// @desc          Delete a Post
// @route         DELETE /api/v1/post/:id
// @access        Private

exports.deleteCompany = asyncHandler(async (req, res, next) => {
  const company = await Company.findById(req.params.id);

  if (!company) {
    return next(
      new ErrorResponse(`No course with the id of ${req.params.id}`, 404)
    );
  }

  await company.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});