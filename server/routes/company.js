const express = require('express');
const {
  getCompanies,
  addCompany,
  getCompany,
  updateCompany,
  deleteCompany,
  getTopCompanies,
  callme,
} = require('../controller/company');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(getCompanies)
  .post(addCompany);

router.route('/getTop/:industry').get(getTopCompanies);
router.route('/callme').get(callme);

router
  .route('/:id')
  .get(getCompany)
  .put(updateCompany)
  .delete(deleteCompany);

module.exports = router;
