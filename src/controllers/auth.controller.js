const { authService } = require('../services/auth.service');
const { serverErr } = require('../utils/errorHandler');
const { sendMail } = require('../utils/notification');

async function signUp(req, res) {
  let user = req.body;

  if (!user.userType) user.userType = 'CUSTOMER';

  if (user.userStatus) delete user.userStatus;

  return await authService
    .signUp(user)
    .then(async (data) => {
      console.log(data);

      await sendMail(`Hey ${data.name}, your User registration is successful in CRM App`, JSON.stringify({
        _id: data._id,
        name: data.name,
        email: data.email,
        username: data.userId,
        role: data.userType,
        status: data.userStatus,
        createdAt: data.createdAt
      }), data.email);

      return res.status(201).send(JSON.stringify({
        status: 'success',
        message: 'User registered successfully',
        data: data
      }))
    })
    .catch((err) => serverErr(err));
}

async function signIn(req, res) {
  const userId = req.body.userId;
  const password = req.body.password;

  return await authService
    .signIn(userId, password)
    .then((returnValue) => {
      res.status(returnValue.statusCode).send(JSON.stringify({
        status: returnValue.status,
        message: returnValue.message,
        data: returnValue.data
      }))
    })
    .catch((err) => serverErr(err));
}

module.exports = {
  signUp,
  signIn
}