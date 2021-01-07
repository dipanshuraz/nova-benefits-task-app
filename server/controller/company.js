const Company = require('../models/Company');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const fs = require('fs');

const dataJson = fs.readFileSync(__dirname + '/data.json');
const companyData = JSON.parse(dataJson);

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

let old_key = 'NAME';
let new_key = 'companyName';
const fundings = [
  'Self-funding',
  'Seed-capital',
  'Venture',
  'Series A',
  'Series B',
  'Series C',
  'IPO',
  'NA',
];
const industry = [
  'Fashion',
  'Food',
  'Education',
  'Music',
  'Internet',
  'Real Estate',
  'Sports',
  'Transport',
  'Finance',
  'Software',
  'Others',
];

exports.callme = asyncHandler(async (req, res, next) => {
  let data = companyData.map((element) => {
    const Fundingrandom = Math.floor(Math.random() * fundings.length);
    const industryRandom = Math.floor(Math.random() * industry.length);

    element.numOfEmp = Math.floor(Math.random() * 100);
    element.fundingStage = fundings[Fundingrandom];
    element.industryRandom = industry[industryRandom];
    element.sumInsured = Math.floor(Math.random() * 10000);
    element.numOfPaidLeaves = Math.floor(Math.random() * 10);
    return element;
  });

  return res.status(200).json({
    success: true,
    data: data,
  });
});
