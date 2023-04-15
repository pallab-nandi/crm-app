const express = require('express');
const usersController = require('../../src/controllers/users.controller');
const authValidator = require('../../src/middlewares/auth.middleware');
const validReqBody = require('../../src/middlewares/validReqBody.middleware');

const router = express.Router();

router
  .route('/')
  .get([authValidator.verifyToken, authValidator.isAdmin], usersController.getAllUser)
  .post([validReqBody.validUserBody, authValidator.verifyToken, authValidator.isAdmin], usersController.addUser)

router
  .route('/:id')
  .get([authValidator.verifyToken, authValidator.isAdmin], usersController.getUserByID)
  .put([authValidator.verifyToken, authValidator.isAdmin], usersController.updateUser)
  .delete([authValidator.verifyToken, authValidator.isAdmin], usersController.deleteUser)

module.exports = router;