const express = require('express');
const {
  getUsers,

  addUser,
} = require('../controller/user');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(getUsers)
  .post(addUser);

module.exports = router;
