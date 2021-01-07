const Company = require('../models/Company');
const path = require('path');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

exports.getCompanies = asyncHandler(async (req, res, next) => {
  const companies = await Company.find().sort({ createdAt: -1 });
  return res.status(200).json({
    success: true,
    count: companies.length,
    data: companies,
  });
});

exports.getTopCompanies = asyncHandler(async (req, res, next) => {
  const companies = await Company.find({ industry: req.params.industry })
    .sort({ numOfEmp: -1 })
    .limit(3);

  return res.status(200).json({
    success: true,
    count: companies.length,
    data: companies,
  });
});

exports.getCompany = asyncHandler(async (req, res, next) => {
  const company = await Company.findById(req.params.id);
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

exports.addCompany = asyncHandler(async (req, res, next) => {
  const company = await Company.create(req.body);

  res.status(201).json({
    success: true,
    data: company,
  });
});

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
