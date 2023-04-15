const express = require('express');
const authController = require('../../src/controllers/auth.controller');
const validReqBody = require('../../src/middlewares/validReqBody.middleware');

const router = express.Router();

router.post('/signup', validReqBody.validUserBody, authController.signUp);
router.post('/signin', authController.signIn);

module.exports = router;