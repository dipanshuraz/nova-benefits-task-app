const express = require("express");
const {
  getCompanies,
  addCompany,
  getCompany,
  updateCompany,
  deleteCompany
} = require("../controller/company");

const router = express.Router({ mergeParams: true });

router.route("/").get(getCompanies).post(addCompany);

router.route("/:id").get(getCompany).put(updateCompany).delete(deleteCompany);

module.exports = router;
