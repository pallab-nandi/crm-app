const { userService } = require("../services/users.service");
const { serverErr } = require("../utils/errorHandler");
const { sendMail } = require('../utils/notification');

async function addUser(req, res) {
  const user = req.body;

  if (!user.userType) user.userType = 'CUSTOMER';

  if (user.userStatus) delete user.userStatus;

  return await userService
    .addUser(user)
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

      return res.status(200).send(JSON.stringify({
        status: 'success',
        message: 'User registered successfully',
        data: data
      }))
    })
    .catch(err => serverErr(err))
}

async function getAllUser(req, res) {
  let queryObj = {};
  if (req.query) {
    queryObj = req.query
  }

  return await userService
    .getAllUser(queryObj)
    .then((data) => {
      console.log(data);
      if (data.length === 0 || !data) {
        return res.status(400).send(JSON.stringify({
          status: 'fail',
          message: 'No User data available'
        }))
      } else {
        res.status(200).send(JSON.stringify({
          status: 'success',
          message: 'All user data fetched',
          data: data
        }))
      }
    })
    .catch(err => serverErr(err));
}

async function getUserByID(req, res) {
  const id = req.params.id;

  return await userService
    .getUserById(id)
    .then((data) => {
      console.log(data);
      if (!data || data.length === 0) {
        return res.status(400).send(JSON.stringify({
          status: 'fail',
          message: 'No such user exist'
        }))
      } else {
        res.status(200).send(JSON.stringify({
          status: 'success',
          message: 'User fetch successfully',
          data: data
        }))
      }
    })
    .catch(err => serverErr(err));
}

async function updateUser(req, res) {
  const id = req.params.id;
  const update = req.body;

  return await userService
    .updateUser(id, update)
    .then(async (data) => {
      console.log(data);

      await sendMail(`Hey ${data.name}, your profile update is successful in CRM App`, JSON.stringify({
        _id: data._id,
        name: data.name,
        email: data.email,
        username: data.userId,
        role: data.userType,
        status: data.userStatus,
        createdAt: data.createdAt
      }), data.email);

      return res.status(200).send(JSON.stringify({
        status: 'success',
        message: 'User updated successfully',
        data: data
      }))
    })
    .catch(err => serverErr(err))
}

async function deleteUser(req, res) {
  const id = req.params.id;

  return await userService
    .deleteUser(id)
    .then((data) => {
      console.log(data);
      res.status(200).send(JSON.stringify({
        status: 'success',
        message: 'User deleted successfully'
      }))
    })
    .catch(err => serverErr(err))
}

module.exports = {
  addUser,
  getAllUser,
  getUserByID,
  updateUser,
  deleteUser
}