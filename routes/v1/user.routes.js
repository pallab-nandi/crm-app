const express = require('express');
const usersController = require('../../src/controllers/users.controller');

const router = express.Router();

router
  .route('/')
  .get(usersController.getAllUser)
  .post(usersController.addUser)

router
  .route('/:id')
  .get(usersController.getUserByID)
  .put(usersController.updateUser)
  .delete(usersController.deleteUser)

module.exports = router;