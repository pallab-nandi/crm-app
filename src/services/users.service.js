const { db } = require('../models/index.model');

class UserService {
  schema;
  constructor() {
    this.schema = db.users;
  }

  addUser(user) {
    return this
      .schema
      .create(user);
  }

  getAllUser(queryObj) {
    return this
      .schema
      .find(queryObj)
  }

  getUserById(id) {
    return this
      .schema
      .findOne({ _id: id })
  }

  updateUser(id, update) {
    return this
      .schema
      .findOneAndUpdate({ _id: id }, update)
  }

  deleteUser(id) {
    return this
      .schema
      .deleteOne({ _id: id })
  }
}

const userService = new UserService();

module.exports = { userService }